import fs from 'fs'
import json5 from 'json5'
import {designToken} from '~/src/schemas/designToken'
import {getFlag} from '../src/utilities/getFlag'
import {validateType} from '~/src/schemas/validTokenType'
import {walkDir} from './utilities/walkDir'
import {validateTokenWithSchema, type validationErrors} from './utilities/validateTokenWithSchema'

export const validateTokens = (tokenDir: string) => {
  const tokenFiles = walkDir(tokenDir, ['removed', 'fallback'])
  const failed: validationErrors[] = []

  for (const file of tokenFiles) {
    // read and parse token file
    const tokenFile = fs.readFileSync(`${file}`, 'utf8')
    let tokenJson
    try {
      tokenJson = json5.parse(tokenFile)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Invalid token file: ${file}`, error)
    }
    // validate token $type property
    const typeValidationErrors = validateTokenWithSchema(file, tokenJson, validateType)
    if (typeValidationErrors) {
      failed.push(typeValidationErrors)
      // abort file validation if invalid $types found
      continue
    }
    // validate tokens
    const tokenValidationErrors = validateTokenWithSchema(file, tokenJson, designToken)
    if (tokenValidationErrors) {
      failed.push(tokenValidationErrors)
    }
  }

  return {
    failed,
    files: tokenFiles,
  }
}

// *****************************************************
// run script
const {failed, files} = validateTokens('./src/tokens/')

// if silent flag is NOT set, output to console
if (getFlag('--silent') === null) {
  // eslint-disable-next-line no-console
  console.log(`\u001b[36;1m\u001b[1m${files.length} token files validated:\u001b[0m`)
  // eslint-disable-next-line no-console
  console.log(
    `${files
      .map(file => {
        let prefix = '✅'
        if (failed.find(item => item.fileName === file)) prefix = '❌'
        return `${prefix} ${file}`
      })
      .join('\n')}`,
  )

  for (const fail of failed) {
    // eslint-disable-next-line no-console
    console.log('++++++++++++++++++++++++++++++')
    // eslint-disable-next-line no-console
    console.log(`\u001b[36;1m\u001b[1m${fail.fileName}\u001b[0m`)
    // eslint-disable-next-line no-console
    for (const path of Object.keys(fail.errorsByPath)) {
      // eslint-disable-next-line no-console
      console.log(`\nPath: \u001b[34;1m\u001b[1m${path}\u001b[0m`)
      // eslint-disable-next-line no-console
      console.log(
        fail.errorsByPath[path]
          .map(({message}) =>
            message.replace(/\*\*(.*?)\*\*/g, '- \u001b[31;1m\u001b[1m$1\u001b[0m').replace(/\n(?!-)/g, '\n  ↳ '),
          )
          .join('\n'),
        '\n',
      )
    }
  }
}

// if failOnErrors flag is set, exit with error code 1 if any errors were found
// this will fail scripts or set a failed status in CI
if (getFlag('--failOnErrors')) {
  if (failed.length > 0) {
    process.exit(1)
  }
}

// if outFile flag is set, write failed tokens to a json file
if (getFlag('--outFile')) {
  // get file name from flag and add .json extension if missing
  const filename = `${`${getFlag('--outFile')}`.replace('.json', '')}.json`
  // replace linebreak with <br> for html output
  const htmlFailed = failed.map(item => ({
    ...item,
    // eslint-disable-next-line github/unescaped-html-literal
    errorsByPath: JSON.parse(JSON.stringify(item.errorsByPath).replace(/\\n/g, '<br />')),
  }))
  //
  fs.writeFileSync(filename, JSON.stringify(htmlFailed))
}

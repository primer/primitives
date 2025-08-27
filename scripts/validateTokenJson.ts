import fs from 'fs'
import json5 from 'json5'
import {designToken} from '../src/schemas/designToken.js'
import {getFlag} from '../src/utilities/index.js'
import {validateType} from '../src/schemas/validTokenType.js'
import {walkDir} from './utilities/walkDir.js'
import {validateTokenWithSchema, type validationErrors} from './utilities/validateTokenWithSchema.js'

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

  return {failed, files: tokenFiles}
}

// *****************************************************
// run script
const {failed, files} = validateTokens('./src/tokens/')

// if silent flag is NOT set, output to console
if (getFlag('--silent') === null) {
  console.log(`\u001b[36;1m\u001b[1m${files.length} token files validated:\u001b[0m`)

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
    console.log('++++++++++++++++++++++++++++++')

    console.log(`\u001b[36;1m\u001b[1m${fail.fileName}\u001b[0m`)

    for (const mainPath of Object.keys(fail.errorsByPath)) {
      console.log(`\nPath: \u001b[34;1m\u001b[1m${mainPath}\u001b[0m`)

      console.log(
        fail.errorsByPath[mainPath]
          .map(
            ({message, code, errors, ...item}) =>
              `${message.replace(/\*\*(.*?)\*\*/g, '- \u001b[31;1m\u001b[1m$1\u001b[0m').replace(/\n(?!-)/g, '\n  ↳ ')}, code: ${code}, path: ${item.path}, errors:\n ${errors
                .map(error => {
                  return `- ${error.issues[0].code}: ${error.issues[0].message}`
                })
                .join('\n')}`,
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

    errorsByPath: JSON.parse(JSON.stringify(item.errorsByPath).replace(/\\n/g, '<br />')),
  }))
  //
  fs.writeFileSync(filename, JSON.stringify(htmlFailed))
}

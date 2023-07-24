import {fromZodError} from 'zod-validation-error'
import fs from 'fs'
import json5 from 'json5'
import {designToken} from '~/src/schemas/designToken'
import {getFlag} from '../src/utilities/getFlag'
import type {ZodIssue} from 'zod'
import {validateType} from '~/src/schemas/validTokenType'
import {walkDir} from './utilities/walkDir'

export const validateTokens = (tokenDir: string) => {
  const tokenFiles = walkDir(tokenDir, ['removed', 'fallback'])
  const failed: {
    fileName: string
    errorMessage: string
    errors: ZodIssue[]
    errorsByPath: Record<string, ZodIssue[]>
  }[] = []

  for (const file of tokenFiles) {
    const tokenFile = fs.readFileSync(`${file}`, 'utf8')
    try {
      const tokenJson = json5.parse(tokenFile)
      // validate token $type property
      const validateTypes = validateType.safeParse(tokenJson)
      if (!validateTypes.success) {
        failed.push({
          fileName: file,
          errorMessage: fromZodError(validateTypes.error).message.replace(/;/g, '\n- '),
          errors: fromZodError(validateTypes.error).details,
          errorsByPath: fromZodError(validateTypes.error).details.reduce((acc, item) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!acc[item.path.join('.')]) acc[item.path.join('.')] = []
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            acc[item.path.join('.')].push(item)
            return acc
          }, {}),
        })
        continue
      }
      // validate token schema
      const validatedTokenJson = designToken.safeParse(tokenJson)
      if (validatedTokenJson.success === false) {
        failed.push({
          fileName: file,
          errorMessage: fromZodError(validatedTokenJson.error).message.replace(/;/g, '\n- '),
          errors: fromZodError(validatedTokenJson.error).details,
          errorsByPath: fromZodError(validatedTokenJson.error).details.reduce((acc, item) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!acc[item.path.join('.')]) acc[item.path.join('.')] = []
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            acc[item.path.join('.')].push(item)
            return acc
          }, {}),
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Invalid token file: ${file}`, error)
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
    console.log(fail.errorMessage)
    // eslint-disable-next-line no-console
    console.log('\n\n')
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
  fs.writeFileSync(filename, JSON.stringify(failed))
}

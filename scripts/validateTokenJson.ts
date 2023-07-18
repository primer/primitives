import type {ValidationError} from 'zod-validation-error'
import {fromZodError} from 'zod-validation-error'
import fs from 'fs'
import path from 'path'
import json5 from 'json5'
import {designToken} from '~/src/schemas/designToken'

const walkDir = (dir: string, ignoreDirs: string[] = []): string[] => {
  const files = fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap(file => {
      if (!file.isDirectory()) return path.join(dir, file.name)
      if (!ignoreDirs.includes(file.name)) return walkDir(path.join(dir, file.name), ignoreDirs)
    })
    .filter(Boolean) as string[]

  return files.flat()
}

export const validateTokens = (tokenDir: string) => {
  const tokenFiles = walkDir(tokenDir, ['removed', 'fallback'])
  const failed: {
    fileName: string
    errorMessage: string
    errors: ValidationError
  }[] = []

  for (const file of tokenFiles) {
    const tokenFile = fs.readFileSync(`${file}`, 'utf8')
    try {
      const tokenJson = json5.parse(tokenFile)
      const validatedTokenJson = designToken.safeParse(tokenJson)
      if (validatedTokenJson.success === false) {
        failed.push({
          fileName: file,
          errorMessage: fromZodError(validatedTokenJson.error).message.replace(/;/g, '\n- '),
          errors: fromZodError(validatedTokenJson.error),
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

// const failed = validateTokens('./src/tokens/base/size')
const {failed, files} = validateTokens('./src/tokens/')

// eslint-disable-next-line no-console
console.log(`\u001b[36;1m\u001b[1m${files.length} token files validated\u001b[0m`)

for (const fail of failed) {
  // eslint-disable-next-line no-console
  console.log('++++++++++++++++++++++++++++++')
  // eslint-disable-next-line no-console
  console.log(`\u001b[36;1m\u001b[1m${fail.fileName}\u001b[0m`)
  // eslint-disable-next-line no-console
  console.log(fail.errorMessage)
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(fail.errors.details))
  // eslint-disable-next-line no-console
  console.log('\n\n')
}

if (failed.length > 0) {
  process.exit(1)
}

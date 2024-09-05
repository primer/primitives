import {format} from 'prettier'
import {jsonToNestedValue} from './utilities/jsonToNestedValue.js'
import {prefixTokens} from './utilities/prefixTokens.js'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {fileHeader} from 'style-dictionary/utils'

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to javascript commonJS module
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const javascriptCommonJs: FormatFn = async ({dictionary, file, platform}: FormatFnArguments) => {
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${await fileHeader({file})}module.exports = ${JSON.stringify(jsonToNestedValue(tokens), null, 2)}\n`

  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

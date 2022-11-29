import StyleDictionary from 'style-dictionary'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import {format} from 'prettier'
import {jsonToNestedValue, prefixTokens} from '~/config/utilities'

const {fileHeader} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to javascript commonJS module
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const javascriptCommonJs: StyleDictionary.Formatter = ({dictionary, file, platform}: FormatterArguments) => {
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${fileHeader({file})}exports.default = ${JSON.stringify(jsonToNestedValue(tokens), null, 2)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

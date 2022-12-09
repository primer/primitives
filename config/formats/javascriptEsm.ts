import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import {jsonToNestedValue} from './utilities/jsonToNestedValue'
import {prefixTokens} from './utilities/prefixTokens'
import type {FormatterArguments} from 'style-dictionary/types/Format'

const {fileHeader} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to javascript esm (javascript export statement)
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const javascriptEsm: StyleDictionary.Formatter = ({dictionary, file, platform}: FormatterArguments) => {
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${fileHeader({file})}export default \n${JSON.stringify(jsonToNestedValue(tokens), null, 2)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

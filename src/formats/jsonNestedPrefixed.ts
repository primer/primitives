import type StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import {prefixTokens} from './utilities/prefixTokens'
import {jsonToNestedValue} from './utilities/jsonToNestedValue'

/**
 * @description Takes a style dictionary token dictionary and converts it to a nested json string.
 * In contrast to the `json/nested` this formatter does add a prefix if provided
 * @param StyleDictionary.FormatterArguments
 * @returns formatted json `string`
 */
export const jsonNestedPrefixed: StyleDictionary.Formatter = ({dictionary, file: _file, options, platform}) => {
  const {outputVerbose} = options
  // add prefix if defined
  let tokens = prefixTokens(dictionary.tokens, platform)
  if (!outputVerbose) {
    tokens = jsonToNestedValue(tokens)
  }
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

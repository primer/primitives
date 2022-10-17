import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import {jsonToNestedValue} from '../utilities/jsonToNestedValue'
import {prefixTokens} from '../utilities/prefixTokens'

/**
 * @description Takes a style dictionary token dictionary and converts it to a nested json string.
 * In contrast to the `json/nested` this formatter does add a prefix if provided
 * @param StyleDictionary.FormatterArguments
 * @returns formatted json `string`
 */
export const jsonNestedPrefixed: StyleDictionary.Formatter = ({
  dictionary,
  file: _file,
  options: _options,
  platform
}) => {
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = JSON.stringify(jsonToNestedValue(tokens), null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

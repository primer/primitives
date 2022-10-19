import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import {jsonToNestedValue} from '../utilities/jsonToNestedValue'

/**
 * @description Takes a style dictionary token dictionary and converts it to a nested json string.
 * In contrast to the `json/nested` this formatter does add a prefix if provided
 * @param StyleDictionary.FormatterArguments
 * @returns formatted json `string`
 */
export const jsonNestedPrefixed: StyleDictionary.Formatter = ({
  dictionary,
  file: _file,
  options: _option,
  platform
}) => {
  const {prefix} = platform
  let tokens = dictionary.tokens

  // add prefix if defined
  if (prefix) {
    tokens = {[prefix]: tokens}
  }

  const output = JSON.stringify(jsonToNestedValue(tokens), null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

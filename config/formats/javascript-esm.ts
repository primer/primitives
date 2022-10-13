import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import {jsonToNestedValue} from '../utilities/jsonToNestedValue'

const {fileHeader} = StyleDictionary.formatHelpers

export const javascriptEsm: StyleDictionary.Formatter = ({dictionary, file, options, platform}) => {
  const {prefix} = platform
  let tokens = dictionary.tokens
  // unwrap first level e.g. color.fg.default -> fg.default
  if (options.unwrapFirstLevel) {
    tokens = tokens[Object.keys(tokens)[0]]
  }
  // add prefix if defined
  if (prefix) {
    tokens = {[prefix]: tokens}
  }

  const output = `${fileHeader({file})}export default \n${JSON.stringify(jsonToNestedValue(tokens), null, 2)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

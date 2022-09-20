
import StyleDictionary from 'style-dictionary';
import { format } from "prettier";

const { fileHeader } = StyleDictionary.formatHelpers;


export const toValue = (token: StyleDictionary.DesignToken | {}) => {
  // is design token
  if ('value' in token) return token.value
  // is non-object value
  if (typeof token !== 'object') return token
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
    // @ts-ignore
    nextObj[prop] = toValue(value)
  }
  return nextObj
}

export const javascriptExport: StyleDictionary.Formatter = ({ dictionary, file, options, platform }) => {
  const { prefix } = platform
  let tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens
  //
  const output = fileHeader({ file }) +
    `export default \n${JSON.stringify(toValue(tokens), null, 2)}\n`
  // return prettified
  return format(output, { parser: "typescript", printWidth: 500 })
}
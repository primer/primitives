
import StyleDictionary from 'style-dictionary';
import { FigmaToken } from '../../@types/FigmaToken'
import { format } from "prettier";

const getFigmaType = (value: {
  value: string,
  $type: string,
  figmaType?: string
}): string => {
  console.log(value)
  if (value.figmaType) return value.figmaType
  return value.$type
}

const hasProp = (object: any, key: string) => Object.prototype.hasOwnProperty.call(object, key)

const replacer = (key: string, value: any): any => {
  // if not token
  if (typeof value !== 'object' || !hasProp(value, 'value')) return value
  //
  const output: FigmaToken = {
    value: value.value,
    type: getFigmaType(value) 
  }
  // add comment if exists
  if (value.comment) {
    output.description = value.comment
  }
  //
  return output
}

export const jsonFigma: StyleDictionary.Formatter = ({ dictionary, file, options, platform }) => {
  const { prefix } = platform
  let tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens
  //
  const output = JSON.stringify(tokens, replacer, 2)
  // return prettified
  return format(output, { parser: "json", printWidth: 500 })
}
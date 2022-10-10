import StyleDictionary from 'style-dictionary';
import { format } from "prettier";
const fs = require('fs');
const path = require('path');

const { fileHeader } = StyleDictionary.formatHelpers;

/**
 * unquoteTypes
 * @description extract types from designTokenTypes (string with type definitions from file) and replace quoted types "Color" with unquoted Color
 * @param output 
 * @param designTokenTypes 
 * @returns string with unquoted types
 */
const unquoteTypes = (output: string, designTokenTypes: string[]): string => {
  // join types for replacement
  const regex = `"(${designTokenTypes.join('|')})"`
  // remove strings
  return output.replace(new RegExp(regex, "g"), '$1')
}

/**
 * getTokenType
 * @description extract content from token files
 * @param path string
 */
const getTokenType = (tokenTypesPath: string): string => {
  const designTokenType = fs.readFileSync(
    path.resolve(tokenTypesPath), { encoding: 'UTF-8' }
  );
  //
  return designTokenType
}

/**
 * convertPropToType
 * @description return take type attribute and return correct typescript type as string 
 * @param type 
 * @returns 
 */
const convertPropToType = (value: string, type: string): string => {
  switch (type) {
    case 'color':
      if (value[0] === '#') {
        return 'ColorHex';
      }
    case 'dimension':
      if (value.substring(value.length - 3) === 'rem') {
        return 'SizeRem';
      }
      return 'Size'
    case 'shadow':
      return 'Shadow';
    default:
      return 'string';
  }
}

/**
 * toType
 * @description converts tokens to type and returns array with used type
 * @param token StyleDictionary.DesignToken in object structure to their types using the $type attribute
 * @returns 
 */
const toType = (token: StyleDictionary.DesignToken | {}, usedTypes: Set<string>): object | string => {
  // is design token
  if ('value' in token) {
    usedTypes.add(convertPropToType(token.value, token.$type))
    return convertPropToType(token.value, token.$type)
  }
  // is non-object value
  if (typeof token !== 'object') return token
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
// @ts-ignore
    nextObj[prop] = toType(value, usedTypes)
  }
  return nextObj
}
/**
 * getTypeDefinition
 * @description returns type definitions as string
 * @param tokens 
 * @param moduleName 
 * @param tokenTypesPath 
 * @returns string
 */
const getTypeDefinition = (tokens: StyleDictionary.DesignTokens, moduleName: string, tokenTypesPath: string): string => {
  const usedTypes = new Set<string>()
  const tokenWithTypes = toType(tokens, usedTypes)
  // clean up types
  usedTypes.forEach((type) => {
    if (!['ColorHex', 'Shadow', 'Size', 'SizeRem'].includes(type)) {
      usedTypes.delete(type)
    }
  })
  // get token type declaration from file
  let designTokenTypes: string[] = []
  for (const type of usedTypes) {
    designTokenTypes.push(getTokenType(`${tokenTypesPath}/${type}.d.ts`))
  }
  // build output
  const output = `${designTokenTypes.join("\n")}\n` +
    `export type ${moduleName} = ${JSON.stringify(tokenWithTypes, null, 2)}`

  // JSON stringify will quote strings, because this is a type we need it unquoted.
  return unquoteTypes(output, [...usedTypes])
}
/**
 * typescriptExportDefinition
 * @description Formatter that returns a typescript definition of a dictionary
 * @param arguments FormatterArguments 
 * @returns formatted string
 */
export const typescriptExportDefinition: StyleDictionary.Formatter = ({ dictionary, file, options, platform }): string => {
  // extract options
  const {
    moduleName = `tokens`,
    tokenTypesPath = `./config/types/`,
    unwrapFirstLevel = false
  } = options
  const { prefix } = platform

  let tokens = dictionary.tokens
  // unwrap first level e.g. color.fg.default -> fg.default
  if (unwrapFirstLevel) {
    tokens = tokens[Object.keys(tokens)[0]]
  }
  // add prefix if defined
  if (prefix) {
    tokens = { [prefix]: tokens }
  }
  // compose output
  const output = fileHeader({ file }) +
    `\n${getTypeDefinition(tokens, moduleName, tokenTypesPath)}\n`
  // return prettified
  return format(output, { parser: "typescript", printWidth: 500 })
}
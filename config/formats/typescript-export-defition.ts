
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
const unquoteTypes = (output: string, designTokenTypes: string): string => {
  // regex to match types like `type Color`
  const findTypesRegex = `type ([A-Za-z]+)`
  // extract types from designToken
  const types = [...designTokenTypes.matchAll(new RegExp(findTypesRegex, "g"))].map(match => match[1])
  // join types for replacement
  const regex = `"(${types.join('|')})"`
  // remove strings
  return output.replace(new RegExp(regex, "g"), '$1')
}

/**
 * getTokenTypes
 * @description extract content from token files
 * @param path 
 */
const getTokenTypes = (tokenTypesPath: string): string => {
  const designTokenTypes = fs.readFileSync(
    path.resolve(tokenTypesPath), { encoding: 'UTF-8' }
  );
  //
  return designTokenTypes
}

/**
 * convertPropToType
 * @description return take type attribute and return correct typescript type as string 
 * @param type 
 * @returns 
 */
const convertPropToType = (type: string): string => {
  switch (type) {
    case 'color':
      return 'Color';
    case 'size':
      return 'Size';
    default:
      return 'string';
  }
}

/**
 * toType
 * @description converts 
 * @param token StyleDictionary.DesignToken in object structure to their types using the $type attribute
 * @returns 
 */
const toType = (token: StyleDictionary.DesignToken | {}): object | string => {
  // is design token
  if ('value' in token) return convertPropToType(token.$type)
  // is non-object value
  if (typeof token !== 'object') return token
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
    // @ts-ignore
    nextObj[prop] = toType(value)
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
  // get token type declaration from file
  const designTokenTypes = getTokenTypes(tokenTypesPath)
  // build output
  const output = `${designTokenTypes}\n` +
    `export type ${moduleName} = ${JSON.stringify(toType(tokens), null, 2)}`

  // JSON stringify will quote strings, because this is a type we need it unquoted.
  return unquoteTypes(output, designTokenTypes)
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
    tokenTypesPath = `./config/types/DesignTokenTypes.d.ts`
  } = options
  // add prefix if set
  const { prefix } = platform
  let tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens
  // compose output
  const output = fileHeader({ file }) +
    `\n${getTypeDefinition(tokens, moduleName, tokenTypesPath)}\n`
  // return prettified
  return format(output, { parser: "typescript", printWidth: 500 })
}
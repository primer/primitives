import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import fs = require('fs')
import path = require('path')
import {prefixTokens} from '~/config/utilities'
import type {FormatterArguments} from 'style-dictionary/types/Format'

const {fileHeader} = StyleDictionary.formatHelpers

/**
 * unquoteTypes
 * @description extract types from designTokenTypes (string with type definitions from file) and replace quoted types "Color" with unquoted Color
 * @param output
 * @param designTokenTypes
 * @returns string with unquoted types
 */
const unquoteTypes = (output: string, designTokenTypes: string[]): string => {
  // join types for replacement
  const regex = `"(${['number', 'string', 'any', ...designTokenTypes].join('|')})"`
  // remove strings
  return output.replace(new RegExp(regex, 'g'), '$1')
}

/**
 * getTokenType
 * @description extract content from token files
 * @param path string
 */
const getTokenType = (tokenTypesPath: string): string => {
  try {
    const designTokenType = fs.readFileSync(path.resolve(tokenTypesPath), {encoding: 'utf-8'})
    return designTokenType
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error trying to load design token type from file "${tokenTypesPath}".`)
  }
  return ''
}

/**
 * convertPropToType
 * @description return take type attribute and return correct typescript type as string
 * @param type
 * @returns
 */
const convertPropToType = (value: unknown, type?: string): string => {
  switch (type) {
    case 'color':
      if (typeof value === 'string' && value[0] === '#') {
        return 'ColorHex'
      }
      return 'string'
    case 'dimension':
      if (typeof value === 'string' && value.substring(value.length - 3) === 'rem') return 'SizeRem'
      if (typeof value === 'string' && value.substring(value.length - 2) === 'px') return 'SizePx'
      return 'string'
    case 'shadow':
      return 'Shadow'
    case 'border':
      return 'Border'
    default:
      if (typeof value === 'number') return 'number'
      if (typeof value === 'string') return 'string'
      return 'any'
  }
}

/**
 * toType
 * @description converts tokens to type and returns array with used type
 * @param token StyleDictionary.DesignToken in object structure to their types using the $type attribute
 * @returns
 */
const toType = (
  token: StyleDictionary.DesignToken | Record<string, unknown>,
  usedTypes: Set<string>
): object | string => {
  // is non-object value
  if (typeof token !== 'object') return convertPropToType(token)
  // is design token
  if ('value' in token) {
    usedTypes.add(convertPropToType(token.value, token.$type))
    return convertPropToType(token.value, token.$type)
  }
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token) as [
    prop: string,
    value: StyleDictionary.DesignToken | Record<string, unknown>
  ][]) {
    // TODO: FIX typescript issues
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
const getTypeDefinition = (
  tokens: StyleDictionary.DesignTokens,
  moduleName: string,
  tokenTypesPath: string
): string => {
  const usedTypes = new Set<string>()
  const tokenWithTypes = toType(tokens, usedTypes)
  // clean up types
  for (const type of usedTypes) {
    if (!['ColorHex', 'Shadow', 'Border', 'Size', 'SizeRem'].includes(type)) {
      usedTypes.delete(type)
    }
  }
  // get token type declaration from file
  const designTokenTypes: string[] = []
  for (const type of usedTypes) {
    designTokenTypes.push(getTokenType(`${tokenTypesPath}/${type}.d.ts`))
  }
  // build output
  const output = `${designTokenTypes.join('\n')} 
    export type ${moduleName} = ${JSON.stringify(tokenWithTypes, null, 2)}`

  // JSON stringify will quote strings, because this is a type we need it unquoted.
  return unquoteTypes(output, [...usedTypes])
}
/**
 * @description Converts `StyleDictionary.dictionary.tokens` to typescript definition
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const typescriptExportDefinition: StyleDictionary.Formatter = ({
  dictionary,
  file,
  options = {},
  platform
}: FormatterArguments): string => {
  // extract options
  const {moduleName = `tokens`, tokenTypesPath = `./config/types/`} = options
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${fileHeader({file})}\n${getTypeDefinition(tokens, moduleName, tokenTypesPath)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

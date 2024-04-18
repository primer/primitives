import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import fs = require('fs')
import path = require('path')
import {treeWalker} from '../utilities/treeWalker'

import type {FormatterArguments} from 'style-dictionary/types/Format'
import type {w3cTransformedToken} from '../types/w3cTransformedToken'
import {prefixTokens} from './utilities/prefixTokens'

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
    throw new Error(`Error trying to load design token type from file "${tokenTypesPath}".`)
  }
}

/**
 * @description throws an error stating the token name, type and invalid value
 * @param token w3cTransformedToken
 */
const invalidTokenValueError = (token: w3cTransformedToken) => {
  throw new Error(`Invalid token: "${token.name}" with type "${token.$type}" can not have a value of "${token.value}"`)
}
/**
 * convertPropToType
 * @description return take type attribute and return correct typescript type as string
 * @param type
 * @returns
 */
const convertPropToType = (tree: w3cTransformedToken): string => {
  if (!Object.prototype.hasOwnProperty.call(tree, 'value')) {
    throw new Error(`Invalid token: ${tree}`)
  }
  switch (tree.$type) {
    case 'color':
      if (typeof tree.value === 'string' && tree.value[0] === '#') {
        return 'ColorHex'
      }
      return invalidTokenValueError(tree)
    case 'dimension':
      if (typeof tree.value === 'string' && tree.value.substring(tree.value.length - 3) === 'rem') return 'SizeRem'
      if (typeof tree.value === 'string' && tree.value.substring(tree.value.length - 2) === 'em') return 'SizeEm'
      if (typeof tree.value === 'string' && tree.value.substring(tree.value.length - 2) === 'px') return 'SizePx'
      return invalidTokenValueError(tree)
    case 'shadow':
      return 'Shadow'
    case 'border':
      return 'Border'
    default:
      if (typeof tree.value === 'number') return 'number'
      if (typeof tree.value === 'string') return 'string'
      if (typeof tree.value === 'boolean') return 'boolean'
      return 'any'
  }
}
/**
 * a valid token node has a `value` property
 * @param item object
 * @returns boolean
 */
const validTokenNode = (item: w3cTransformedToken | unknown): item is w3cTransformedToken => {
  return typeof item === 'object' && item !== null && 'value' in item
}
/**
 * returns a set with every used token type
 * @param item object
 * @param validTypes array, all other types will be removed
 * @returns set of all used token types
 */
const getUsedTokenTypes = (tokens: StyleDictionary.DesignTokens, validTypes: string[]): Set<string> => {
  // using a set to assure every value only exists once
  const usedTypes = new Set<string>()
  // adds type to set
  const callback = (tree: unknown) => usedTypes.add(convertPropToType(tree as w3cTransformedToken))
  // tree walker adds to usedTypes
  treeWalker(tokens, callback, validTokenNode)
  // clean up types
  for (const type of usedTypes) {
    if (!validTypes.includes(type)) {
      usedTypes.delete(type)
    }
  }
  return usedTypes
}
/**
 * returns the entire token object structure but instead of token values each token just has a typescript type
 * @param item object
 * @returns object
 */
const getTokenObjectWithTypes = (tokens: StyleDictionary.DesignTokens): Record<string, unknown> => {
  // TODO: FIX typescript issues
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return treeWalker(tokens, convertPropToType, validTokenNode) as Record<string, unknown>
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
  tokenTypesPath: string,
): string => {
  const usedTypes = getUsedTokenTypes(tokens, ['ColorHex', 'Shadow', 'Border', 'SizeEm', 'SizeRem', 'SizePx'])
  const tokenObjectWithTypes = getTokenObjectWithTypes(tokens)
  // get token type declaration from file
  const designTokenTypes: string[] = []
  for (const type of usedTypes) {
    // path to type files without trailing slash
    const typePath = tokenTypesPath.replace(new RegExp(/\/$/, 'g'), '')

    designTokenTypes.push(getTokenType(`${typePath}/${type}.d.ts`))
  }
  // build output
  const output = `${designTokenTypes.join('\n')} 
    export type ${moduleName} = ${JSON.stringify(tokenObjectWithTypes, null, 2)}`

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
  platform,
}: FormatterArguments): string => {
  // extract options
  const {moduleName = `tokens`, tokenTypesPath = `./src/types/`} = options
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${fileHeader({file})}\n${getTypeDefinition(tokens, moduleName, tokenTypesPath)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

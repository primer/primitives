import {format} from 'prettier'
import {readFileSync} from 'fs'
import {resolve as resolvePath} from 'path'
import {treeWalker} from '../utilities/treeWalker.js'
import type {w3cTransformedToken} from '../types/w3cTransformedToken.js'
import {prefixTokens} from './utilities/prefixTokens.js'
import type {Config, DesignTokens, FormatFn, FormatFnArguments, LocalOptions} from 'style-dictionary/types'
import {fileHeader} from 'style-dictionary/utils'
import {getPropName} from './utilities/getPropName.js'
import {lowerCaseFirstCharacter} from '../utilities/lowerCaseFirstCharacter.js'

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
    const designTokenType = readFileSync(resolvePath(tokenTypesPath), {encoding: 'utf-8'})
    return designTokenType
  } catch (error) {
    throw new Error(`Error trying to load design token type from file "${tokenTypesPath}". Error: ${error}`)
  }
}

/**
 * @description throws an error stating the token name, type and invalid value
 * @param token w3cTransformedToken
 */
const invalidTokenValueError = (token: w3cTransformedToken, options: Config & LocalOptions) => {
  throw new Error(
    `Invalid token: "${token.name}" with type "${token[getPropName('type', options.usesDtcg)]}" can not have a value of "${token[getPropName('value', options.usesDtcg)]}"`,
  )
}
/**
 * convertPropToType
 * @description return take type attribute and return correct typescript type as string
 * @param type
 * @returns
 */
const convertPropToType = (tree: w3cTransformedToken, options: Config & LocalOptions): string => {
  const valueProp = getPropName('value', options.usesDtcg)

  if (!Object.prototype.hasOwnProperty.call(tree, valueProp)) {
    throw new Error(`Invalid token: ${tree}`)
  }
  switch (tree.$type) {
    case 'color':
      if (typeof tree[valueProp] === 'string' && tree[valueProp][0] === '#') {
        return 'ColorHex'
      }
      return invalidTokenValueError(tree, options)
    case 'dimension':
      if (typeof tree[valueProp] === 'string' && tree[valueProp].substring(tree[valueProp].length - 3) === 'rem')
        return 'SizeRem'
      if (typeof tree[valueProp] === 'string' && tree[valueProp].substring(tree[valueProp].length - 2) === 'em')
        return 'SizeEm'
      if (typeof tree[valueProp] === 'string' && tree[valueProp].substring(tree[valueProp].length - 2) === 'px')
        return 'SizePx'
      return invalidTokenValueError(tree, options)
    case 'shadow':
      return 'Shadow'
    case 'border':
      return 'Border'
    default:
      if (typeof tree[valueProp] === 'number') return 'number'
      if (typeof tree[valueProp] === 'string') return 'string'
      if (typeof tree[valueProp] === 'boolean') return 'boolean'
      return 'any'
  }
}
/**
 * a valid token node has a `value` property
 * @param item object
 * @returns boolean
 */
const validTokenNode =
  (usesDtcg?: boolean) =>
  (item: w3cTransformedToken | unknown): item is w3cTransformedToken => {
    return typeof item === 'object' && item !== null && getPropName('value', usesDtcg) in item
  }
/**
 * returns a set with every used token type
 * @param item object
 * @param validTypes array, all other types will be removed
 * @returns set of all used token types
 */
const getUsedTokenTypes = (tokens: DesignTokens, validTypes: string[], options: Config & LocalOptions): Set<string> => {
  // using a set to assure every value only exists once
  const usedTypes = new Set<string>()
  // adds type to set
  const callback = (tree: unknown) => usedTypes.add(convertPropToType(tree as w3cTransformedToken, options))
  // tree walker adds to usedTypes
  treeWalker(tokens, callback, validTokenNode(options.usesDtcg))
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
const getTokenObjectWithTypes = (tokens: DesignTokens, options: Config & LocalOptions): Record<string, unknown> => {
  const callback = (tree: unknown) => convertPropToType(tree as w3cTransformedToken, options)
  // TODO: FIX typescript issues
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return treeWalker(tokens, callback, validTokenNode(options.usesDtcg)) as Record<string, unknown>
}
/**
 * getTypeDefinition
 * @description returns type definitions as string
 * @param tokens
 * @param moduleName
 * @param tokenTypesPath
 * @returns string
 */
const getTypeDefinition = (tokens: DesignTokens, options: Config & LocalOptions): string => {
  // extract options
  const {moduleName = `tokens`, tokenTypesPath = `./src/types/`} = options
  const usedTypes = getUsedTokenTypes(tokens, ['Shadow', 'ColorHex', 'Border', 'SizeEm', 'SizeRem', 'SizePx'], options)
  const tokenObjectWithTypes = getTokenObjectWithTypes(tokens, options)
  // get token type declaration from file
  const designTokenTypes: string[] = []
  for (const type of usedTypes) {
    // path to type files without trailing slash
    const typePath = tokenTypesPath.replace(new RegExp(/\/$/, 'g'), '')

    designTokenTypes.push(getTokenType(`${typePath}/${lowerCaseFirstCharacter(type)}.d.ts`))
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
export const typescriptExportDefinition: FormatFn = async ({
  dictionary,
  file,
  options = {},
  platform,
}: FormatFnArguments) => {
  // add prefix if defined
  const tokens = prefixTokens(dictionary.tokens, platform)
  // add file header and convert output
  const output = `${await fileHeader({file})}\n${getTypeDefinition(tokens, options)}\n`
  // return prettified
  return format(output, {parser: 'typescript', printWidth: 500})
}

import {format} from 'prettier'
import {prefixTokens} from './utilities/prefixTokens.js'
import {jsonToNestedValue} from './utilities/jsonToNestedValue.js'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'

/**
 * @description Takes a style dictionary token dictionary and converts it to a nested json string.
 * In contrast to the `json/nested` this formatter does add a prefix if provided
 * @param FormatFnArguments
 * @returns formatted json `string`
 */
export const jsonNestedPrefixed: FormatFn = async ({dictionary, file: _file, options, platform}: FormatFnArguments) => {
  const {outputVerbose} = options
  // add prefix if defined
  let tokens = prefixTokens(dictionary.tokens, platform)
  if (!outputVerbose) {
    tokens = jsonToNestedValue(tokens)
  }
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

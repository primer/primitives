import {format} from 'prettier'
import {jsonToFlat} from './utilities/jsonToFlat.js'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
/**
 * @description Takes a style dictionary token dictionary and converts it to a one dimensional json object.
 * @param FormatFnArguments
 * @param options.nameSeparator - separator to use for nested token name
 * @returns formatted json `string`
 */
export const jsonOneDimensional: FormatFn = ({dictionary, file: _file, options}: FormatFnArguments) => {
  // option to allow verbose output (object) or just the value
  const {outputVerbose} = options
  const tokens = jsonToFlat(dictionary.allTokens, outputVerbose)
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

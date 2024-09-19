import type StyleDictionary from 'style-dictionary'
import syncPrettier from '@prettier/sync'
import {jsonToFlat} from './utilities/jsonToFlat.js'
/**
 * @description Takes a style dictionary token dictionary and converts it to a one dimensional json object.
 * @param StyleDictionary.FormatterArguments
 * @param options.nameSeparator - separator to use for nested token name
 * @returns formatted json `string`
 */
export const jsonOneDimensional: StyleDictionary.Formatter = ({dictionary, file: _file, options}) => {
  // option to allow verbose output (object) or just the value
  const {outputVerbose} = options
  const tokens = jsonToFlat(dictionary.allTokens, outputVerbose)
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return syncPrettier.format(output, {parser: 'json', printWidth: 500})
}

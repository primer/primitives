import {format} from 'prettier'
import {jsonToFlat} from './utilities/jsonToFlat.js'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {sortByName} from 'style-dictionary/utils'
/**
 * @description Takes a style dictionary token dictionary and converts it to a one dimensional json object.
 * @param FormatFnArguments
 * @param options.nameSeparator - separator to use for nested token name
 * @returns formatted json `string`
 */
export const jsonOneDimensional: FormatFn = ({dictionary, file: _file, options}: FormatFnArguments) => {
  // option to allow verbose output (object) or just the value
  const {outputVerbose, propertyConversion} = options
  const tokens = jsonToFlat(dictionary.allTokens.sort(sortByName), outputVerbose)
  if (propertyConversion === undefined) {
    //
    const output = JSON.stringify(tokens, null, 2)
    // return prettified
    return format(output, {parser: 'json', printWidth: 500})
  }
  // replace property names
  const convertedTokens = Object.fromEntries(
    Object.entries(tokens).map(([name, token]) => {
      for (const [from, to] of Object.entries(propertyConversion as Record<string, string>)) {
        if (from in token) {
          token[to] = token[from]
          delete token[from]
        }
      }
      return [name, token]
    }),
  )
  const output = JSON.stringify(convertedTokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

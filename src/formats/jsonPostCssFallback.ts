import {format} from 'prettier'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'

/**
 * @description Takes a style dictionary token dictionary and converts it to a one dimensional json object.
 * @param FormatFnArguments
 * @param options.nameSeparator - separator to use for nested token name
 * @returns formatted json `string`
 */
export const jsonPostCssFallback: FormatFn = ({dictionary, file: _file}: FormatFnArguments) => {
  const tokens = Object.fromEntries(dictionary.allTokens.map(token => [`--${token.name}`, token.$value]))
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

import type StyleDictionary from 'style-dictionary'
import syncPrettier from '@prettier/sync'

/**
 * @description Takes a style dictionary token dictionary and converts it to a one dimensional json object.
 * @param StyleDictionary.FormatterArguments
 * @param options.nameSeparator - separator to use for nested token name
 * @returns formatted json `string`
 */
export const jsonPostCssFallback: StyleDictionary.Formatter = ({dictionary, file: _file}) => {
  const tokens = Object.fromEntries(dictionary.allTokens.map(token => [`--${token.name}`, token.value]))
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return syncPrettier.format(output, {parser: 'json', printWidth: 500})
}

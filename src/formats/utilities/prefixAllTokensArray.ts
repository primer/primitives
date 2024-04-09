import type StyleDictionary from 'style-dictionary'
/**
 * @description extract prefix from platform and add to tokens array if defined
 * @param tokens StyleDictionary.TransformedTokens
 * @param platform StyleDictionary.Platform
 * @return StyleDictionary.TransformedTokens
 */
export const prefixAllTokensArray = (
  allTokens: StyleDictionary.TransformedToken[],
  platform: StyleDictionary.Platform = {},
): StyleDictionary.TransformedToken[] => {
  // get prefix from platform
  const {prefix} = platform
  // if prefix is defined add it to all tokens
  if (typeof prefix === 'string') {
    allTokens = allTokens.map(token => ({
      ...token,
      path: [prefix, ...token.path],
    }))
  }
  // return all tokens array
  return allTokens
}

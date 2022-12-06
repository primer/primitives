import type StyleDictionary from 'style-dictionary'
/**
 * @description extract prefix from platform and add to tokens array if defined
 * @param tokens StyleDictionary.TransformedTokens
 * @param platform StyleDictionary.Platform
 * @return StyleDictionary.TransformedTokens
 */
export const prefixTokens = (
  tokens: StyleDictionary.TransformedTokens,
  platform: StyleDictionary.Platform = {},
): StyleDictionary.TransformedTokens => {
  const {prefix} = platform
  if (typeof prefix === 'string') {
    tokens = {[prefix]: tokens}
  }
  return tokens
}

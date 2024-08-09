import type {PlatformConfig, TransformedTokens} from 'style-dictionary/types'
/**
 * @description extract prefix from platform and add to tokens array if defined
 * @param tokens StyleDictionary.TransformedTokens
 * @param platform StyleDictionary.Platform
 * @return StyleDictionary.TransformedTokens
 */
export const prefixTokens = (tokens: TransformedTokens, platform: PlatformConfig = {}): TransformedTokens => {
  const {prefix} = platform
  if (typeof prefix === 'string') {
    tokens = {[prefix]: tokens}
  }
  return tokens
}

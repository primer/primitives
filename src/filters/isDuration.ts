import type StyleDictionary from 'style-dictionary'

/**
 * @description Checks if token is of $type `duration`
 * @param token [StyleDictionary.TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isDuration = (token: StyleDictionary.TransformedToken): boolean => {
  return token.$type === 'duration'
}

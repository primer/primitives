import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token type is a number
 * @param token [StyleDictionary.TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isNumber = (token: TransformedToken): boolean => {
  return token.$type === 'number'
}

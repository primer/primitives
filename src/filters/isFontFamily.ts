import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `isFontFamily`
 * @param arguments [StyleDictionary.TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isFontFamily = (token: TransformedToken): boolean => {
  return token.$type === 'fontFamily'
}

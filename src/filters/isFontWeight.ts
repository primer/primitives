import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `fontWeight`
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isFontWeight = (token: TransformedToken): boolean => {
  return token.$type === 'fontWeight'
}

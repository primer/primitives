import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `dimension`
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isDimension = (token: TransformedToken): boolean => {
  return token.$type === 'dimension'
}

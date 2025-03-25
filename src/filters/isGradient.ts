import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `gradient`
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isGradient = (token: TransformedToken): boolean => {
  const typeValue = token.$type ?? token.type
  return typeValue === 'gradient'
}

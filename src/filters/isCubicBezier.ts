import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `cubicBezier`
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isCubicBezier = (token: TransformedToken): boolean => {
  const typeValue = token.$type ?? token.type
  return typeValue === 'cubicBezier'
}

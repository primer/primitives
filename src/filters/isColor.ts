import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `color`
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isColor = (token: TransformedToken): boolean => {
  const typeValue = token.$type ?? token.type
  return typeValue === 'color'
}

import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `border`
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isBorder = (token: TransformedToken): boolean => {
  return token.$type === 'border'
}

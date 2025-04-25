import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `transition`
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isTransition = (token: TransformedToken): boolean => {
  return token.$type === 'transition'
}

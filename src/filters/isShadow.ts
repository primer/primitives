import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `shadow`
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isShadow = (token: TransformedToken): boolean => {
  return token.$type === 'shadow'
}

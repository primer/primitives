import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is of $type `duration`
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isDuration = (token: TransformedToken): boolean => {
  return token.$type === 'duration'
}

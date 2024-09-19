import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token is source token
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isSource = (token: TransformedToken): boolean => {
  return token.isSource === true
}

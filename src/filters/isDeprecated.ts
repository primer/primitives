import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token has a valid `deprecated` property
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isDeprecated = (token: TransformedToken): boolean => {
  const deprecated = (token.original as Record<string, unknown>).$deprecated ?? token.$deprecated
  return deprecated === true || typeof deprecated === 'string'
}

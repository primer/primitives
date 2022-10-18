import StyleDictionary from 'style-dictionary'
import {isSource} from './isSource'

/**
 * @description Checks if token is source token AND has a `deprecated` property
 * @param arguments [StyleDictionary.TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isDeprecated = (token: StyleDictionary.TransformedToken): boolean => {
  return isSource(token) && token.deprecated !== undefined
}

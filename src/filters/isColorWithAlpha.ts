import type {TransformedToken} from 'style-dictionary/types'
import {isColor} from './isColor.js'

/**
 * @description Checks if token is color with an alpha value
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isColorWithAlpha = (token: TransformedToken): boolean => {
  return isColor(token) && token.alpha !== undefined && typeof token.alpha === 'number'
}

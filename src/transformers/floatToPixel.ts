import {isNumber} from '../filters/index.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'
/**
 * takes a value and returns it if its a px string if it is a float and the token has a fontSize value in extensions['org.primer.data']
 * @param value
 * @returns string
 */
export const convertFloatToPixel = (token: TransformedToken, unitless = false) => {
  // short circut if value is not a number
  if (
    typeof token.value !== 'number' ||
    !token.$extensions?.['org.primer.data']?.fontSize ||
    typeof token.$extensions?.['org.primer.data']?.fontSize !== 'number'
  ) {
    return token.value
  }
  // convert value
  const convertedValue = token.$extensions?.['org.primer.data']?.fontSize * token.value
  // return converted value
  return convertedValue === 0 ? 0 : unitless ? Math.round(convertedValue) : `${Math.round(convertedValue)}px`
}
/**
 * @description converts a float value to a pixel value based on the provided fontSize on the tokersn extension
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `isNumber`
 * @transformer returns a pixel string
 */
export const floatToPixel: Transform = {
  name: 'float/pixel',
  type: 'value',
  transitive: true,
  filter: isNumber,
  transform: (token: TransformedToken): string => convertFloatToPixel(token),
}

export const floatToPixelUnitless: Transform = {
  name: 'float/pixelUnitless',
  type: 'value',
  transitive: true,
  filter: isNumber,
  transform: (token: TransformedToken): string => convertFloatToPixel(token, true),
}

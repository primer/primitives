import {toHex} from 'color2k'
import {isColor} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import {rgbaFloatToHex} from './utilities/rgbaFloatToHex.js'
import mix from './utilities/mix.js'
import {hexToRgbaFloat} from './utilities/hexToRgbaFloat.js'
import {isRgbaFloat} from './utilities/isRgbaFloat.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'

const toRgbaFloat = (token: TransformedToken, alpha: undefined | number = undefined) => {
  let tokenValue = getTokenValue(token)
  let tokenMixColor = token.mix?.color
  // get hex value from color string
  if (isRgbaFloat(tokenValue)) {
    tokenValue = rgbaFloatToHex(tokenValue, false)
  }
  if (tokenMixColor && isRgbaFloat(tokenMixColor)) {
    tokenMixColor = rgbaFloatToHex(tokenMixColor, false)
  }
  let hex = toHex(tokenValue)
  // mix color with mix color and weight
  if (token.mix && token.mix.color && token.mix.weight) {
    hex = toHex(mix(tokenValue, tokenMixColor, token.mix.weight))
  }
  // return color as RgbaFloat
  return hexToRgbaFloat(hex, alpha)
}

/**
 * @description converts color tokens rgba float with values from 0 - 1
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color`
 * @transformer returns a `rgb` float object
 */
export const colorToRgbaFloat: Transform = {
  name: 'color/rgbaFloat',
  type: 'value',
  transitive: true,
  filter: isColor,
  transform: (token: TransformedToken) => {
    const value = getTokenValue(token)
    // skip if value is already rgb float
    if (isRgbaFloat(value) && !('mix' in token) && !('alpha' in token)) return value
    // convert hex or rgb values to rgba float
    return toRgbaFloat(token, token.alpha)
  },
}

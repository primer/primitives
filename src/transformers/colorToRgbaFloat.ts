import {toHex} from 'color2k'
import {isColor} from '../filters'
import type StyleDictionary from 'style-dictionary'
import {getTokenValue} from './utilities/getTokenValue'
import {rgbaFloatToHex} from './utilities/rgbaFloatToHex'
import mix from './utilities/mix'
import {hexToRgbaFloat} from './utilities/hexToRgbaFloat'
import {isRgbaFloat} from './utilities/isRgbaFloat'

const toRgbaFloat = (token: StyleDictionary.TransformedToken, alpha?: number) => {
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
export const colorToRgbaFloat: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isColor,
  transformer: (token: StyleDictionary.TransformedToken) => {
    // skip if value is already rgb float
    if (isRgbaFloat(token.value) && !('mix' in token) && !('alpha' in token)) return token.value
    // convert hex or rgb values to rgba float
    return toRgbaFloat(token, token.alpha)
  },
}

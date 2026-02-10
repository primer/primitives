import {toHex} from 'color2k'
import {isColor} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {alpha} from './utilities/alpha.js'
import {normalizeColorValue} from './utilities/normalizeColorValue.js'
/**
 * @description converts color tokens value to `hex6` or `hex8`
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color`
 * @transformer returns a `hex` string
 */
export const colorToHex: Transform = {
  name: 'color/hex',
  type: 'value',
  transitive: true,
  filter: isColor,
  transform: (token: TransformedToken, config: PlatformConfig) => {
    const rawValue = getTokenValue(token)
    const colorString = normalizeColorValue(rawValue)
    const alphaValue = token.alpha
    if (alphaValue === null || alphaValue === undefined || alphaValue === 1) {
      return toHex(colorString)
    }
    return toHex(alpha(colorString, alphaValue, token, config))
  },
}

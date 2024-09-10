import {toHex} from 'color2k'
import {isColor} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Transform, TransformedToken, PlatformConfig, Config} from 'style-dictionary/types'
import {alpha} from './utilities/alpha.js'
/**
 * @description converts color tokens value to `hex6` or `hex8`
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color`
 * @transformer returns a `hex` string
 */
export const colorToHex: Transform = {
  name: 'color/hex',
  type: `value`,
  transitive: true,
  filter: isColor,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    const alphaValue = token.alpha ?? token.$extensions?.alpha
    if (alphaValue === null || alphaValue === undefined) {
      return toHex(getTokenValue(token, undefined, options))
    }
    return toHex(alpha(getTokenValue(token, undefined, options), alphaValue, token))
  },
}

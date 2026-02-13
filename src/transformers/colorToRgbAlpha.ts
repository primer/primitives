import {isColorWithAlpha} from '../filters/index.js'
import {alpha} from './utilities/alpha.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import {normalizeColorValue} from './utilities/normalizeColorValue.js'
import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
/**
 * @description replaces tokens value with `rgba` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `rgba` string
 */
export const colorToRgbAlpha: Transform = {
  name: 'color/rgbAlpha',
  type: 'value',
  transitive: true,
  filter: isColorWithAlpha,
  transform: (token: TransformedToken, config: PlatformConfig) => {
    const rawValue = getTokenValue(token)
    const colorString = normalizeColorValue(rawValue)
    if (token.alpha === null) return colorString
    return alpha(colorString, token.alpha, token, config)
  },
}

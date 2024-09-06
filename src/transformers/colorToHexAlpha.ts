import {toHex} from 'color2k'
import {alpha} from './utilities/alpha.js'
import {isColorWithAlpha} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
/**
 * @description replaces tokens value with `hex8` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `hex8` string
 */
export const colorToHexAlpha: Transform = {
  name: 'color/hexAlpha',
  type: `value`,
  transitive: true,
  filter: isColorWithAlpha,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    // don't change if alpha is null
    if (token.alpha === null) {
      return toHex(getTokenValue(token, undefined, options))
    }
    return toHex(alpha(getTokenValue(token, undefined, options), token.alpha, token))
  },
}

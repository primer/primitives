import {toHex} from 'color2k'
import {isColorWithMix} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import mix from './utilities/mix.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
/**
 * @description replaces tokens value with `hex8` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `hex8` string
 */
export const colorToHexMix: Transform = {
  name: 'color/hexMix',
  type: `value`,
  transitive: true,
  filter: isColorWithMix,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    return toHex(
      mix(
        getTokenValue(token, undefined, options),
        token.mix?.color || getTokenValue(token, undefined, options),
        token.mix?.weight || 0,
      ),
    )
  },
}

import {toHex} from 'color2k'
import {isColorWithMix} from '../filters'
import type StyleDictionary from 'style-dictionary'
import {getTokenValue} from './utilities/getTokenValue'
import mix from './utilities/mix'
/**
 * @description replaces tokens value with `hex8` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `hex8` string
 */
export const colorToHexMix: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isColorWithMix,
  transformer: (token: StyleDictionary.TransformedToken) => {
    return toHex(mix(getTokenValue(token), token.mix?.color || getTokenValue(token), token.mix?.weight || 0))
  },
}

import {toHex} from 'color2k'
import {isColor} from '../filters'
import type StyleDictionary from 'style-dictionary'
import {getTokenValue} from './utilities/getTokenValue'
/**
 * @description converts color tokens value to `hex6` or `hex8`
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color`
 * @transformer returns a `hex` string
 */
export const colorToHex: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isColor,
  transformer: (token: StyleDictionary.TransformedToken) => toHex(getTokenValue(token)),
}

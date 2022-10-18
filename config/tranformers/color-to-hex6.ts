import StyleDictionary from 'style-dictionary'
import {toHex} from 'color2k'
/**
 * @description converts color tokens value with a `hex` representation of the color
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color`
 * @transformer returns a `hex` string
 */
export const colorToHex6: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color',
  transformer: (token: StyleDictionary.TransformedToken) => toHex(token.value)
}

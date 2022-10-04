import { toHex } from 'color2k'
import { alpha } from '../utilities/alpha'
import StyleDictionary from 'style-dictionary'

export const colorToHexAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha !== undefined,
  // color2k toHex does output hex8 if opacity is less than 1, it is jsut not documented. :(
  transformer: (token: StyleDictionary.TransformedToken) => toHex(alpha(token.value, token.alpha))
}
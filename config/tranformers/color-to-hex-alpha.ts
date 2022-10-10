import { toHex } from 'color2k'
import { alpha } from '../utilities/alpha'
import StyleDictionary from 'style-dictionary'

export const colorToHexAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha !== undefined,
  // color2k toHex does output hex8 if opacity is less than 1, it is just not documented. :(
  transformer: (token: StyleDictionary.TransformedToken) => {
    if (!token.value) throw new Error(`Missing value for token: ${token.path.join('.')} from file "${token.filePath}"`);

    return toHex(alpha(token.value, token.alpha))
  }
}
import { toHex, transparentize } from 'color2k'
import StyleDictionary from 'style-dictionary'

export const colorToHexAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha,
  // color2K transparentize needs a "value to reduce opacity by", normally we have a desired opacity value so we need to do 1 - alpha
  // color2k toHex does output hex8 if opacity is less than 1, it is jsut not documented. :(
  transformer: (token: StyleDictionary.TransformedToken) => toHex(transparentize(token.value, 1 - token.alpha))
}
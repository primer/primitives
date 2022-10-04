import StyleDictionary from 'style-dictionary'
import { alpha } from '../utilities/alpha'

export const colorToRgbAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha !== undefined,
  transformer: (token: StyleDictionary.TransformedToken) => alpha(token.value, token.alpha)
}

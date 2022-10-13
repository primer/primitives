import {toHex} from 'color2k'

import StyleDictionary from 'style-dictionary'

export const colorToHex6: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color',
  transformer: (token: StyleDictionary.TransformedToken) => toHex(token.value)
}

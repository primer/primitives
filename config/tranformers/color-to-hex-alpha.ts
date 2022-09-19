import { toHex } from 'color2k'
import StyleDictionary from 'style-dictionary'

export const colorToHexAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha,
  transformer: (token: StyleDictionary.TransformedToken) => toHex8(token.value, token.alpha)
}

/**
 * toHex8
 * @param color (3 or 6 charcaters)
 * @alpha number
 * @return hex8 string
 */
const toHex8 = (color: string, alpha: number) => `${toHex(color)}${hexFromPercent(alpha)}`

/**
 * hexFromPercent
 * @param alpha
 * @returns alpha as two character hex
 */
const hexFromPercent = (alpha: number): string => {
  if (alpha <= 1) {
    alpha = alpha * 100
  }
  var decimalValue = Math.round(alpha * 255 / 100);

  if (alpha < 7) {
    return "0" + decimalValue.toString(16).toUpperCase();
  }
  return decimalValue.toString(16).toUpperCase();
}
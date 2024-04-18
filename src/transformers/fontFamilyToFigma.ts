import type StyleDictionary from 'style-dictionary'
import {isFontFamily} from '../filters'
/**
 * takes a value and returns it if its a string or concats strings in an array quoting strings with spaces
 * @param value
 * @returns string
 */
export const parseFontFamily = (
  token: StyleDictionary.TransformedToken,
  fontFamilies: Record<string, string> = {},
): string => {
  // return value from fontFamilies
  if (token.name in fontFamilies) {
    return fontFamilies[token.name]
  }
  // return string
  if (typeof token.value === 'string') {
    return token.value
  }
  // invalid value
  throw new Error(`Invalid value ${token.value}, should be a string or array of strings`)
}
/**
 * @description converts fontFamily tokens value to string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `fontFamily`
 * @transformer returns a string
 */
export const fontFamilyToFigma: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isFontFamily,
  transformer: (token: StyleDictionary.TransformedToken, platform: StyleDictionary.Platform): string =>
    parseFontFamily(token, platform.options?.fontFamilies),
}

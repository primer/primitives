import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {isFontFamily} from '../filters/index.js'
import {hasSpaceInString} from './utilities/hasSpaceInString.js'
/**
 * takes a value and returns it if its a string or concats strings in an array quoting strings with spaces
 * @param value
 * @returns string
 */
export const parseFontFamily = (token: TransformedToken, fontFamilies: Record<string, string> = {}): string => {
  // return value from fontFamilies
  if (token.name in fontFamilies) {
    return fontFamilies[token.name]
  }
  // return string
  if (typeof token.value === 'string') {
    return token.value
  }
  // return stringified array
  if (Array.isArray(token.value)) {
    return token.value
      .map((string: string) => {
        if (typeof string !== 'string') {
          throw new Error(`Invalid value in array ${string}, must be a string`)
        }
        return hasSpaceInString(string) ? `'${string}'` : string
      })
      .join(', ')
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
export const fontFamilyToFigma: Transform = {
  name: 'fontFamily/figma',
  type: `value`,
  transitive: true,
  filter: isFontFamily,
  transform: (token: TransformedToken, platform: PlatformConfig): string =>
    parseFontFamily(token, platform.options?.fontFamilies),
}

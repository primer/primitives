import type StyleDictionary from 'style-dictionary'
import {isFontFamily} from '../filters'
import {getTokenValue} from './utilities/getTokenValue'
import {hasSpaceInString} from './utilities/hasSpaceInString'
/**
 * takes a value and returns it if its a string or concats strings in an array quoting strings with spaces
 * @param value
 * @returns string
 */
export const parseFontFamily = (value: unknown): string => {
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    return value
      .map((string: string) => {
        if (typeof string !== 'string') {
          throw new Error(`Invalid value in array ${string}, must be a string`)
        }
        return hasSpaceInString(string) ? `'${string}'` : string
      })
      .join(', ')
  }
  throw new Error(`Invalid value ${value}, should be a string or array of strings`)
}
/**
 * @description converts fontFamily tokens value to string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `fontFamily`
 * @transformer returns a string
 */
export const fontFamilyToCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isFontFamily,
  transformer: (token: StyleDictionary.TransformedToken): string => parseFontFamily(getTokenValue(token)),
}

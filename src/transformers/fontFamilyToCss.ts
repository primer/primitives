import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isFontFamily} from '../filters/index.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import {hasSpaceInString} from './utilities/hasSpaceInString.js'
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
export const fontFamilyToCss: Transform = {
  name: 'fontFamily/css',
  type: 'value',
  transitive: true,
  filter: isFontFamily,
  transform: (token: TransformedToken): string => parseFontFamily(getTokenValue(token)),
}

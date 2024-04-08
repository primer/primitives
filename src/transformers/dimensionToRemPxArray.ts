import {isDimension} from '~/src/filters'
import type StyleDictionary from 'style-dictionary'
import type {Platform} from 'style-dictionary'

type SizePx = '0' | `${number}px`
type SizeRem = '0' | `${number}rem`
type SizeEm = '0' | `${number}em`

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: Platform): number => (options && options.basePxFontSize) || 16

/**
 * @description checks if token value has a specific unit
 * @param value token value
 * @param unit unit string like px or value
 * @returns boolean
 */
const hasUnit = (value: string | number, unit: string): boolean => {
  if (typeof value === 'number') {
    return false
  }

  return value.indexOf(unit) > -1
}

/**
 * @description converts dimension tokens value to `rem`, ignores `em` as they are relative to the font size of the parent element
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns an array with the `rem` and `pixel` string
 */
export const dimensionToRemPxArray: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isDimension,
  transformer: (token: StyleDictionary.TransformedToken, options?: Platform): [SizeRem | SizeEm, SizePx] => {
    const baseFont = getBasePxFontSize(options)
    const floatVal = parseFloat(token.value)

    if (isNaN(floatVal)) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${token.value}' is not valid and cannot be transform to 'rem' \n`,
      )
    }

    if (floatVal === 0) {
      return ['0', '0']
    }

    if (hasUnit(token.value, 'rem') || hasUnit(token.value, 'em')) {
      return [token.value, `${floatVal * baseFont}px`]
    }

    return [`${floatVal / baseFont}rem`, `${floatVal}px`]
  },
}

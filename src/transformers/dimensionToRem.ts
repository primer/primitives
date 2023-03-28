import {isDimension} from '~/src/filters'
import type StyleDictionary from 'style-dictionary'
import type {Platform} from 'style-dictionary'

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: Platform): number => (options && options.basePxFontSize) || 16

/**
 * @description converts dimension tokens value to `rem`
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns a `rem` string
 */
export const dimensionToRem: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isDimension,
  transformer: (token: StyleDictionary.TransformedToken, options?: Platform) => {
    const baseFont = getBasePxFontSize(options)
    const floatVal = parseFloat(token.value)

    if (isNaN(floatVal)) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${token.value}' is not valid and cannot be transform to 'rem' \n`,
      )
    }
    if (floatVal === 0) {
      return '0'
    }

    return `${floatVal / baseFont}rem`
  },
}

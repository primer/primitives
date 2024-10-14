import {isDimension} from '../filters/index.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'

type SizePx = '0' | `${number}px`
type SizeRem = '0' | `${number}rem`
type SizeEm = '0' | `${number}em`

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: PlatformConfig): number => (options && options.basePxFontSize) || 16

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
export const dimensionToRemPxArray: Transform = {
  name: 'dimension/remPxArray',
  type: 'value',
  transitive: true,
  filter: isDimension,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config): [SizeRem | SizeEm, SizePx] => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const baseFont = getBasePxFontSize(config)
    const floatVal = parseFloat(token[valueProp])

    if (isNaN(floatVal)) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${token[valueProp]}' is not valid and cannot be transform to 'rem' \n`,
      )
    }

    if (floatVal === 0) {
      return ['0', '0']
    }

    if (hasUnit(token[valueProp], 'rem') || hasUnit(token[valueProp], 'em')) {
      return [token.value, `${floatVal * baseFont}px`]
    }

    return [`${floatVal / baseFont}rem`, `${floatVal}px`]
  },
}

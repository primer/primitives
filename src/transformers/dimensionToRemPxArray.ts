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
 * @description extracts numeric value and unit from dimension token value
 * @param value dimension token value (string or object format)
 * @returns object with value and unit, or original value for special cases
 */
const parseDimensionValue = (value: string | number | {value: number; unit: string}): {value: number; unit: string} | {original: any} => {
  // Handle invalid values
  if (value === null || value === undefined || value === '') {
    throw new Error(`Invalid dimension value: ${JSON.stringify(value)}`)
  }

  // Handle new object format
  if (typeof value === 'object' && value !== null && 'value' in value && 'unit' in value) {
    return {value: value.value, unit: value.unit}
  }

  // Handle legacy string/number format
  if (typeof value === 'number') {
    return {value, unit: 'px'}
  }

  if (value === '0') {
    return {value: 0, unit: 'px'}
  }

  if (typeof value === 'string') {
    // Handle pure number strings (for backward compatibility)
    if (/^-?[0-9]+\.?[0-9]*$/.test(value)) {
      return {value: parseFloat(value), unit: 'px'}
    }
    
    const match = value.match(/^(-?[0-9]+\.?[0-9]*)(px|rem|em)$/)
    if (match) {
      return {value: parseFloat(match[1]), unit: match[2]}
    }
  }

  // Invalid values like 'rem', 'px' without numbers
  throw new Error(`Invalid dimension value: ${JSON.stringify(value)}`)
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
    
    try {
      const parsed = parseDimensionValue(token[valueProp])
      
      if ('original' in parsed) {
        throw new Error(`Cannot parse dimension value`)
      }

      const {value, unit} = parsed

      if (value === 0) {
        return ['0', '0']
      }

      if (unit === 'rem' || unit === 'em') {
        return [`${value}${unit}`, `${value * baseFont}px`]
      }

      // Convert px to rem and keep px
      return [`${value / baseFont}rem`, `${value}px`]
    } catch (error) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' is not valid and cannot be transform to 'rem' \n`,
      )
    }
  },
}

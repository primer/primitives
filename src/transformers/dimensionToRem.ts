import {isDimension} from '../filters/index.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {parseDimension} from './utilities/parseDimension.js'

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: PlatformConfig): number => (options && options.basePxFontSize) || 16

/**
 * @description converts dimension tokens value to `rem`
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns a `rem` string
 * @note Expects W3C DTCG format { value: number, unit: "px" | "rem" }
 */
export const dimensionToRem: Transform = {
  name: 'dimension/rem',
  type: 'value',
  transitive: true,
  filter: isDimension,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const baseFont = getBasePxFontSize(config)

    try {
      const {value, unit} = parseDimension(token[valueProp])

      if (value === 0) {
        return '0'
      }

      // rem values pass through unchanged
      if (unit === 'rem') {
        return `${value}rem`
      }

      // em values pass through unchanged (relative to parent, cannot convert)
      if (unit === 'em') {
        return `${value}em`
      }

      // px values convert to rem
      return `${value / baseFont}rem`
    } catch (error) {
      const details =
        error instanceof Error && error.message ? ` - ${error.message}` : error ? ` - ${String(error)}` : ''
      throw new Error(
        `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' is not valid and cannot be transformed to 'rem'${details}\n`,
      )
    }
  },
}

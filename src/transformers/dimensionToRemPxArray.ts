import {isDimension} from '../filters/index.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {parseDimension} from './utilities/parseDimension.js'

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
 * @description converts dimension tokens value to an array with both `rem` and `px` values
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns an array with the `rem` and `pixel` string
 * @note Expects W3C DTCG format { value: number, unit: "px" | "rem" | "em" }
 */
export const dimensionToRemPxArray: Transform = {
  name: 'dimension/remPxArray',
  type: 'value',
  transitive: true,
  filter: isDimension,
  transform: (
    token: TransformedToken,
    config: PlatformConfig,
    options: Config,
  ): [SizeRem, SizePx] | [SizeEm, SizeEm] => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const baseFont = getBasePxFontSize(config)

    try {
      const {value, unit} = parseDimension(token[valueProp])

      if (value === 0) {
        return ['0', '0']
      }

      // em values pass through unchanged (relative to parent, cannot convert)
      if (unit === 'em') {
        return [`${value}em`, `${value}em`]
      }

      // rem values pass through, convert to px for second value
      if (unit === 'rem') {
        return [`${value}rem`, `${value * baseFont}px`]
      }

      // px values convert to rem for first value
      return [`${value / baseFont}rem`, `${value}px`]
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      throw new Error(
        `Invalid dimension token: '${token.name}: ${JSON.stringify(
          token[valueProp],
        )}' is not valid and cannot be transformed to 'rem' - ${errorMessage}\n`,
      )
    }
  },
}

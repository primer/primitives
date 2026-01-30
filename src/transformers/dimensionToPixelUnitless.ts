import {isDimension} from '../filters/index.js'
import type {PlatformConfig, Transform, TransformedToken, Config} from 'style-dictionary/types'
import {parseDimension} from './utilities/parseDimension.js'

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: PlatformConfig): number => (options && options.basePxFontSize) || 16

/**
 * @description converts dimension tokens value to pixel value without unit
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns a number for px/rem values, or a string with unit for em values (cannot convert to unitless)
 * @note Expects W3C DTCG format { value: number, unit: "px" | "rem" | "em" }
 */
export const dimensionToPixelUnitless: Transform = {
  name: 'dimension/pixelUnitless',
  type: 'value',
  transitive: true,
  filter: isDimension,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const baseFont = getBasePxFontSize(config)

    try {
      const {value, unit} = parseDimension(token[valueProp])

      if (value === 0) {
        return 0
      }

      // rem values convert to px
      if (unit === 'rem') {
        return value * baseFont
      }

      // em values pass through as string (relative to parent, cannot convert to unitless px)
      if (unit === 'em') {
        return `${value}em`
      }

      // px values return the number directly
      return value
    } catch (error) {
      const originalMessage = error instanceof Error ? error.message : String(error)
      throw new Error(
        `Invalid dimension token: '${token.path.join('.')}: ${JSON.stringify(token[valueProp])}' - ${originalMessage}\n`,
      )
    }
  },
}

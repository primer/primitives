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
 * @transformer returns a float number
 * @note Expects W3C DTCG format { value: number, unit: "px" | "rem" }
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
    } catch {
      throw new Error(
        `Invalid dimension token: '${token.path.join('.')}: ${JSON.stringify(token[valueProp])}' is not valid and cannot be transformed to 'float'\n`,
      )
    }
  },
}

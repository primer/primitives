import {isDimension} from '../filters/index.js'
import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'

/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options?: PlatformConfig): number => (options && options.basePxFontSize) || 16

/**
 * @description converts dimension tokens value to `px` string, ignores `em` as they are relative to the font size of the parent element
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns a `px` string
 */
export const dimensionToPixel: Transform = {
  name: 'dimension/pixel',
  type: 'value',
  transitive: true,
  filter: isDimension,
  transform: (token: TransformedToken, config: PlatformConfig, options: Config) => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const baseFont = getBasePxFontSize(config)
    const dimensionValue = token[valueProp] as {value: number; unit: string}

    if (typeof dimensionValue !== 'object' || !('value' in dimensionValue) || !('unit' in dimensionValue)) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' must be an object with value and unit properties \n`,
      )
    }

    const {value, unit} = dimensionValue

    if (value === 0) {
      return '0'
    }

    if (unit === 'px') {
      return `${value}px`
    }

    if (unit === 'rem') {
      // Convert rem to px
      return `${value * baseFont}px`
    }

    if (unit === 'em') {
      // Keep em as is since it's relative
      return `${value}em`
    }

    throw new Error(
      `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' has unsupported unit '${unit}' \n`,
    )
  },
}

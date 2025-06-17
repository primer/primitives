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
    const dimensionValue = token[valueProp] as {value: number; unit: string}

    if (typeof dimensionValue !== 'object' || !('value' in dimensionValue) || !('unit' in dimensionValue)) {
      throw new Error(
        `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' must be an object with value and unit properties \n`,
      )
    }

    const {value, unit} = dimensionValue

    if (value === 0) {
      return ['0', '0']
    }

    if (unit === 'rem') {
      return [`${value}rem`, `${value * baseFont}px`]
    }

    if (unit === 'em') {
      return [`${value}em`, `${value * baseFont}px`]
    }

    if (unit === 'px') {
      // Convert px to rem and keep px
      return [`${value / baseFont}rem`, `${value}px`]
    }

    throw new Error(
      `Invalid dimension token: '${token.name}: ${JSON.stringify(token[valueProp])}' has unsupported unit '${unit}' \n`,
    )
  },
}

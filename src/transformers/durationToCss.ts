import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {isDuration} from '../filters/index.js'

/**
 * W3C DTCG duration value format
 */
type DurationValue = {
  value: number
  unit: 'ms' | 's'
}

/**
 * @description converts duration tokens to css duration string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `duration`
 * @transformer returns a css duration
 * @note W3C DTCG format: { value: number, unit: "ms" | "s" }
 */
export const durationToCss: Transform = {
  name: 'duration/css',
  type: 'value',
  transitive: true,
  filter: isDuration,
  transform: (token: TransformedToken, _config: PlatformConfig, options: Config) => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    const tokenValue = token[valueProp]

    // Validate W3C DTCG object format: { value: number, unit: "ms" | "s" }
    if (typeof tokenValue !== 'object' || tokenValue === null || !('value' in tokenValue) || !('unit' in tokenValue)) {
      throw new Error(
        `duration token value must be an object with "value" and "unit" properties (W3C DTCG format). Invalid token: ${token.name} with value: ${JSON.stringify(tokenValue)}`,
      )
    }

    const {value, unit} = tokenValue as DurationValue

    // Validate unit
    if (unit !== ('ms' as DurationValue['unit']) && unit !== ('s' as DurationValue['unit'])) {
      throw new Error(`duration token unit must be "ms" or "s", invalid token: ${token.name} with unit: ${unit}`)
    }

    // Validate value is a finite, non-negative number
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
      throw new Error(
        `duration token value must be a finite, non-negative number, invalid token: ${token.name} with value: ${value}`,
      )
    }

    // Always output in ms, rounding to avoid floating-point noise (e.g. 0.0049s → 4.9ms not 4.8999…ms)
    if (unit === 's') {
      return `${parseFloat((value * 1000).toPrecision(12))}ms`
    }

    return `${value}ms`
  },
}

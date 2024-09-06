import type {Config, PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {isDuration} from '../filters/isDuration.js'

/**
 * @description converts duration tokens string value to number with `ms` unit
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `duration`
 * @transformer returns a css duration
 */
export const durationToCss: Transform = {
  name: 'duration/css',
  type: `value`,
  transitive: true,
  filter: isDuration,
  transform: (token: TransformedToken, _config: PlatformConfig, options: Config) => {
    const valueProp = options.usesDtcg ? '$value' : 'value'
    // throw an error if token value is not a string or does not end with `ms`
    if (typeof token[valueProp] !== `string` || !token[valueProp].endsWith(`ms`)) {
      throw new Error(`duration token value must be a string with an "ms" unit`)
    }
    // get value
    let value = parseInt(token[valueProp].replace('ms', ''))
    let unit = `ms`
    if (value >= 1000) {
      value = value / 1000
      unit = `s`
    }
    // return value
    return `${value}${unit}`
  },
}

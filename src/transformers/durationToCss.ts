import type StyleDictionary from 'style-dictionary'
import {isDuration} from '../filters/isDuration'

/**
 * @description converts duration tokens string value to number with `ms` unit
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `duration`
 * @transformer returns a css duration
 */
export const durationToCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isDuration,
  transformer: (token: StyleDictionary.TransformedToken, _options?: StyleDictionary.Platform) => {
    // throw an error if token value is not a string or does not end with `ms`
    if (typeof token.value !== `string` || !token.value.endsWith(`ms`)) {
      throw new Error(`duration token value must be a string with an "ms" unit`)
    }
    // get value
    let value = parseInt(token.value.replace('ms', ''))
    let unit = `ms`
    if (value >= 1000) {
      value = value / 1000
      unit = `s`
    }
    // return value
    return `${value}${unit}`
  },
}

import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {isCubicBezier} from '../filters/isCubicBezier.js'

/**
 * @description converts cubicBezeir tokens array value to a css cubic-bezier
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `duration`
 * @transformer returns a css cubic-bezier function
 */
export const cubicBezierToCss: Transform = {
  name: 'cubicBezeir/css',
  type: 'value',
  transitive: true,
  filter: isCubicBezier,
  transform: (token: TransformedToken, _config: PlatformConfig) => {
    const value = token.$value ?? token.value
    return cubicBezierArrayToCss(value, token.path)
  },
}

export const cubicBezierArrayToCss = (value: number[], path: string[]) => {
  // throw value of more or less than 4 items in array
  if (value.length !== 4 || value.some((item: unknown) => typeof item !== 'number')) {
    throw new Error(
      `Invalid cubicBezier token ${path.join('.')}, must be an array with 4 numbers, but got this instead: ${JSON.stringify(value)}`,
    )
  }
  // return value
  return `cubic-bezier(${value.join(',')})`
}

import {isTransition} from '../filters/index.js'
import {cubicBezierArrayToCss} from './cubicBezierToCss.js'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'

/**
 * @description converts transition tokens to CSS transition string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `transition`
 * @transformer returns css transition `string`
 */
export const transitionToCss: Transform = {
  name: 'transition/css',
  type: 'value',
  transitive: true,
  filter: isTransition,
  transform: (token: TransformedToken) => {
    // extract value
    const value = getTokenValue(token)

    // if value is a string, it's probably a reference, return as is
    if (typeof value === 'string') {
      return value
    }

    // check required properties
    checkRequiredTokenProperties(value, ['duration', 'timingFunction'])

    // timingFunction may already be a CSS string if resolved from a cubicBezier reference
    const timing =
      typeof value.timingFunction === 'string'
        ? value.timingFunction
        : cubicBezierArrayToCss(value.timingFunction, token.path)

    return `${value.duration} ${timing} ${value.delay ? value.delay : ''}`.trim()
  },
}

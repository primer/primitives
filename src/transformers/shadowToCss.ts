import {toHex} from 'color2k'
import {isShadow} from '../filters'
import {alpha} from './utilities/alpha'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties'
import type {ShadowTokenValue} from '../types/ShadowTokenValue'
import type StyleDictionary from 'style-dictionary'
import {getTokenValue} from './utilities/getTokenValue'

/**
 * @description converts w3c shadow tokens in css shadow string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `shadow`
 * @transformer returns css shadow `string`
 */
export const shadowToCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isShadow,
  transformer: (token: StyleDictionary.TransformedToken) => {
    // extract value
    const {value}: {value: ShadowTokenValue | ShadowTokenValue[]} = token
    // turn value into array
    const shadowValues = !Array.isArray(value) ? [value] : value

    return shadowValues
      .map((shadow: ShadowTokenValue) => {
        // if value === string it was probably already transformed
        if (typeof shadow === 'string') return shadow
        checkRequiredTokenProperties(shadow, ['color', 'offsetX', 'offsetY', 'blur', 'spread'])
        /*css box shadow:  inset? | offset-x | offset-y | blur-radius | spread-radius | color */
        return `${shadow.inset === true ? 'inset ' : ''}${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${
          shadow.spread
        } ${toHex(alpha(getTokenValue({...token, ...{value: shadow}}, 'color'), shadow.alpha || 1, token))}`
      })
      .join(', ')
  },
}

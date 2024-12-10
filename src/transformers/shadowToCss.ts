import {toHex} from 'color2k'
import {isShadow} from '../filters/index.js'
import {alpha} from './utilities/alpha.js'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties.js'
import type {ShadowTokenValue} from '../types/shadowTokenValue.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'
import {cssColorMix} from './colorAlphaToCss.js'

/**
 * @description converts w3c shadow tokens in css shadow string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `shadow`
 * @transformer returns css shadow `string`
 */
export const shadowToCss: Transform = {
  name: 'shadow/css',
  type: 'value',
  transitive: true,
  filter: isShadow,
  transform: (token: TransformedToken) => {
    // extract value
    const value: ShadowTokenValue | ShadowTokenValue[] = getTokenValue(token)
    const valueProp = token.$value ? '$value' : 'value'
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
        } ${cssColorMix(getTokenValue({...token, ...{[valueProp]: shadow}}, 'color'), 'transparent', shadow.alpha || 1)}`
      })
      .join(', ')
  },
}

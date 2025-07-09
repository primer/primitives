import {toHex} from 'color2k'
import {isShadow} from '../filters/index.js'
import {alpha} from './utilities/alpha.js'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties.js'
import {dimensionToString} from './utilities/dimensionToString.js'
import type {ShadowTokenValue} from '../types/shadowTokenValue.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'

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
  transform: (token: TransformedToken, config: PlatformConfig) => {
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
        return `${shadow.inset === true ? 'inset ' : ''}${dimensionToString(shadow.offsetX)} ${dimensionToString(
          shadow.offsetY,
        )} ${dimensionToString(shadow.blur)} ${dimensionToString(
          shadow.spread,
        )} ${toHex(alpha(getTokenValue({...token, ...{[valueProp]: shadow}}, 'color'), shadow.alpha || 1, token, config))}`
      })
      .join(', ')
  },
}

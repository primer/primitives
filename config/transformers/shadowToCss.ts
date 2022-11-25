import {toHex} from 'color2k'
import type StyleDictionary from 'style-dictionary'
import {isShadow} from '../filters/isShadow'
import {alpha, checkRequiredTokenProperties} from '../utilities'
import type {ShadowTokenValue} from '../../types/ShadowTokenValue'

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
  transformer: ({value}: {value: ShadowTokenValue | ShadowTokenValue[]}) => {
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
        } ${toHex(alpha(shadow.color, shadow.alpha || 1))}`
      })
      .join(', ')
  }
}

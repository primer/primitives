import {isShadow} from '../filters'
import type {ShadowTokenValue} from '~/src/types/ShadowTokenValue'
import type StyleDictionary from 'style-dictionary'

/**
 * @description converts w3c shadow tokens to figma variables
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `shadow`
 * @transformer returns figma shadow variables
 */
export const shadowToFigmaVariable: StyleDictionary.Transform = {
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
        return shadow.color
        // if value === string it was probably already transformed
        // if (typeof shadow === 'string') return shadow
        // checkRequiredTokenProperties(shadow, ['color', 'offsetX', 'offsetY', 'blur', 'spread'])
        // /*css box shadow:  inset? | offset-x | offset-y | blur-radius | spread-radius | color */
        // return `${shadow.inset === true ? 'inset ' : ''}${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${
        //   shadow.spread
        // } ${toHex(alpha(getTokenValue({...token, ...{value: shadow}}, 'color'), shadow.alpha || 1, token))}`
      })
      .join(', ')
  },
}

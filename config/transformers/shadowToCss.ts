import {toHex} from 'color2k'
import StyleDictionary from 'style-dictionary'
import {ShadowTokenValue} from '../../types/ShadowTokenValue'
import {isShadow} from '../filters/isShadow'
import {alpha} from '../utilities'

/**
 * checks if all required properties exist on shadow token
 * @param object - ShadowTokenValue
 * @returns void or throws error
 */
const checkForShadowTokenProperties = (shadow: ShadowTokenValue) => {
  const requiredProperties = ['color', 'offsetX', 'offsetY', 'blur', 'spread']
  for (const prop of requiredProperties) {
    if (prop in shadow === false) {
      throw new Error(`Missing propery: ${prop} on shadow token ${JSON.stringify(shadow)}`)
    }
  }
}
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
        checkForShadowTokenProperties(shadow)
        /*css box shadow:  inset? | offset-x | offset-y | blur-radius | spread-radius | color */
        return `${shadow.inset === true ? 'inset ' : ''}${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${
          shadow.spread
        } ${toHex(alpha(shadow.color, shadow.alpha || 1))}`
      })
      .join(', ')
  }
}

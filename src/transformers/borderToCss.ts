import {isBorder} from '../filters/isBorder'
import type StyleDictionary from 'style-dictionary'
import type {BorderTokenValue} from '../types/BorderTokenValue'

/**
 * checks if all required properties exist on shadow token
 * @param object - BorderTokenValue
 * @returns void or throws error
 */
const checkForBorderTokenProperties = (border: BorderTokenValue) => {
  const requiredProperties = ['color', 'width', 'style']
  for (const prop of requiredProperties) {
    if (prop in border === false) {
      throw new Error(`Missing propery: ${prop} on border token ${JSON.stringify(border)}`)
    }
  }
}
/**
 * @description converts w3c border tokens in css border string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `border`
 * @transformer returns css border `string`
 */
export const borderToCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isBorder,
  transformer: ({value}: {value: BorderTokenValue}) => {
    //
    checkForBorderTokenProperties(value)
    // if value === string it was probably already transformed
    if (typeof value === 'string') {
      return value
    }
    /* color | style | width */
    return `${value.color} ${value.style} ${value.width}`
  },
}

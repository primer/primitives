import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isBorder} from '../filters/isBorder.js'
import type {BorderTokenValue} from '../types/BorderTokenValue.js'

/**
 * checks if all required properties exist on shadow token
 * @param object - BorderTokenValue
 * @returns void or throws error
 */
const checkForBorderTokenProperties = (border: Record<string, unknown>): border is BorderTokenValue => {
  if ('color' in border && 'width' in border && 'style' in border) {
    return true
  }
  return false
}
/**
 * @description converts w3c border tokens in css border string
 * @type valueTransformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `border`
 * @transformer returns css border `string`
 */
export const borderToCss: Transform = {
  name: 'border/css',
  type: `value`,
  transitive: true,
  filter: isBorder,
  transform: (token: TransformedToken) => {
    const value = token.value
    // if value === string it was probably already transformed
    if (typeof value === 'string') {
      return value
    }
    //
    if (!checkForBorderTokenProperties(value)) {
      throw new Error(
        `Invalid border token property ${JSON.stringify(value)}. Must be an object with color, width and style properties.`,
      )
    }
    /* color | style | width */
    return `${value.color} ${value.style} ${value.width}`
  },
}

import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isBorder} from '../filters/isBorder.js'
import type {BorderTokenValue} from '../types/borderTokenValue.js'
import type {DimensionTokenValue} from '../types/dimensionTokenValue.js'
import {parseDimension} from './utilities/parseDimension.js'
import {normalizeColorValue} from './utilities/normalizeColorValue.js'

/**
 * @description Converts a W3C dimension object to CSS string, preserving the original unit
 * @param dim - The dimension value in W3C object format or a string
 * @returns CSS dimension string (e.g., "2px", "0.125rem", "1em", "0")
 */
const dimensionToCss = (dim: DimensionTokenValue | string): string => {
  if (typeof dim === 'string') {
    return dim
  }

  const {value, unit} = parseDimension(dim)

  if (value === 0) {
    return '0'
  }

  return `${value}${unit}`
}

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
  type: 'value',
  transitive: true,
  filter: isBorder,
  transform: (token: TransformedToken) => {
    const value = token.$value ?? token.value
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
    /* width | style | color */
    const color = typeof value.color === 'object' ? normalizeColorValue(value.color) : value.color
    return `${dimensionToCss(value.width)} ${value.style} ${color}`
  },
}

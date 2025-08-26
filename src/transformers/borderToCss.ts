import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isBorder} from '../filters/isBorder.js'
import type {BorderTokenValue} from '../types/borderTokenValue.js'
import {dimensionToString} from './utilities/dimensionToString.js'

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
 * Converts width value to string, handling different formats
 * @param width - The width value (string, dimension object, or array from dimension/remPxArray)
 * @returns CSS width string
 */
const getWidthString = (width: unknown): string => {
  // If it's already a string, return as is
  if (typeof width === 'string') {
    return width
  }

  // If it's an array from dimension/remPxArray transformer, use the px value (second element)
  if (Array.isArray(width) && width.length === 2) {
    return width[1] // Return the px value for styleLint compatibility
  }

  // If it's a dimension object, convert to string
  if (typeof width === 'object' && width !== null && 'value' in width && 'unit' in width) {
    return dimensionToString(width as {value: number; unit: string})
  }

  throw new Error(`Invalid width value: ${JSON.stringify(width)}`)
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

    const widthString = getWidthString(value.width)

    /* width | style | color */
    return `${widthString} ${value.style} ${value.color}`
  },
}

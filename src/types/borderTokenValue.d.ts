import type {DimensionTokenValue} from './dimensionTokenValue.js'
import type {ColorW3cValue} from '../schemas/colorW3cValue.js'

/**
 * Type definition for w3c border composite token value
 * @link https://design-tokens.github.io/community-group/format/#border
 */
export type StrokeStyleString = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'outset' | 'inset'
export type BorderTokenValue = {
  color: string | ColorW3cValue
  width: string | DimensionTokenValue
  style: StrokeStyleString
}

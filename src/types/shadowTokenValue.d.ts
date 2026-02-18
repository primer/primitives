import type {DimensionTokenValue} from './dimensionTokenValue.js'
import type {ColorW3cValue} from '../schemas/colorW3cValue.js'

/**
 * Type definition for w3c shadow composite token value
 * @link https://design-tokens.github.io/community-group/format/#shadow
 */
export type ShadowTokenValue = {
  color: string | ColorW3cValue
  offsetX: DimensionTokenValue
  offsetY: DimensionTokenValue
  blur: DimensionTokenValue
  spread: DimensionTokenValue
  // custom non w3c values
  inset?: boolean
  alpha?: number
}

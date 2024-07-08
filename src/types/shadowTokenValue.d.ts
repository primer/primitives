/**
 * Type definition for w3c shadow composite token value
 * @link https://design-tokens.github.io/community-group/format/#shadow
 */
export type ShadowTokenValue = {
  color: string
  offsetX: string
  offsetY: string
  blur: string
  spread: string
  // custom non w3c values
  inset?: boolean
  alpha?: number
}

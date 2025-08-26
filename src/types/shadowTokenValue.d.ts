/**
 * Type definition for w3c shadow composite token value
 * @link https://design-tokens.github.io/community-group/format/#shadow
 */
export type ShadowTokenValue = {
  color: string
  offsetX: string | {value: number; unit: string}
  offsetY: string | {value: number; unit: string}
  blur: string | {value: number; unit: string}
  spread: string | {value: number; unit: string}
  // custom non w3c values
  inset?: boolean
  alpha?: number
}

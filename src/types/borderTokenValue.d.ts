/**
 * Type definition for w3c border composite token value
 * @link https://design-tokens.github.io/community-group/format/#border
 */
export type StrokeStyleString = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'outset' | 'inset'
export type BorderTokenValue = {
  color: string
  width: string | {value: number; unit: string} | [string, string] // Support string, dimension object, or array from transformers
  style: StrokeStyleString
}

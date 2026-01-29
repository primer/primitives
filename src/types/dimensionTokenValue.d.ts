/**
 * W3C DTCG dimension token value format
 * @link https://www.designtokens.org/tr/drafts/format/#dimension
 */
export type DimensionTokenValue = {
  value: number
  unit: 'px' | 'rem'
}

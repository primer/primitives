/**
 * W3C DTCG dimension token value format
 * @link https://www.designtokens.org/tr/drafts/format/#dimension
 * @note `em` is not in the W3C spec but is supported for practical use
 */
export type DimensionTokenValue = {
  value: number
  unit: 'px' | 'rem' | 'em'
}

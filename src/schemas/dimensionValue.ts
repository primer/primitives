import {z} from 'zod'

/**
 * W3C DTCG dimension value format
 * @link https://www.designtokens.org/tr/drafts/format/#dimension
 */
export const dimensionValue = z
  .object({
    value: z.number(),
    unit: z.enum(['px', 'rem', 'em']),
  })
  .strict()

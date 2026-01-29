import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

/**
 * W3C DTCG dimension value format
 * @link https://www.designtokens.org/tr/drafts/format/#dimension
 */
export const dimensionValueObject = z
  .object({
    value: z.number(),
    unit: z.enum(['px', 'rem']),
  })
  .strict()

/**
 * Legacy dimension value format (string with unit)
 * @deprecated Use W3C DTCG object format instead
 */
export const dimensionValueLegacy = z.union([
  z.string().superRefine((dim, ctx) => {
    if (!/(^-?[0-9]+\.?[0-9]*(px|rem)$|^-?[0-9]+\.?[0-9]*em$)/.test(dim)) {
      ctx.addIssue({
        code: 'custom',
        message: schemaErrorMessage(
          `Invalid dimension: "${dim}"`,
          `Dimension must be a string with a unit (px, rem or em) or 0`,
        ),
      })
    }
  }),
  z.literal('0'),
  z.literal(0),
])

/**
 * Dimension value - supports both W3C DTCG object format and legacy string format
 */
export const dimensionValue = z.union([dimensionValueObject, dimensionValueLegacy])

import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

export const dimensionValue = z.union([
  z.string().superRefine((dim, ctx) => {
    if (!/(^-?[0-9]+(px|rem)$|^-?[0-9]+\.?[0-9]*em$)/.test(dim)) {
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

import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

/**
 * W3C DTCG duration value format
 * @see https://www.designtokens.org/tr/2025.10/format/#duration
 */
export const durationValue = z
  .object({
    value: z.number(),
    unit: z.enum(['ms', 's']),
  })
  .strict()
  .superRefine((duration, ctx) => {
    if (typeof duration.value !== 'number') {
      ctx.addIssue({
        code: 'custom',
        message: schemaErrorMessage(`Invalid duration value: "${duration.value}"`, `Duration value must be a number`),
      })
    }
  })

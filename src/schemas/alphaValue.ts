import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

export const alphaValue = z.any().superRefine((value, ctx) => {
  if (!(typeof value === 'number' && value >= 0 && value <= 1)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: schemaErrorMessage(
        `Invalid alpha value: "${value}" (${typeof value})`,
        'Alpha value must be a number between 0 and 1.',
      ),
    })
  }
})

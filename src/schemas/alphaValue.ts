import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export const alphaValue = z.any().refine(
  value => typeof value === 'number' && value >= 0 && value <= 1,
  value => ({
    message: schemaErrorMessage(
      `Invalid alpha value: "${value}" (${typeof value})`,
      'Alpha value must be a number between 0 and 1.',
    ),
  }),
)

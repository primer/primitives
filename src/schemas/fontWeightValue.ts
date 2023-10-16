import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

const allowed = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export const fontWeightValue = z.number().refine(
  value => allowed.includes(value),
  value => ({
    message: schemaErrorMessage(
      `Invalid font weight value: "${value}"`,
      `Font weight must be one of ${allowed.join(', ')}`,
    ),
  }),
)

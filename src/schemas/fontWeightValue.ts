import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

const allowed = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export const fontWeightValue = z.number().superRefine((value, ctx) => {
  if (!allowed.includes(value)) {
    ctx.addIssue({
      code: 'custom',
      message: schemaErrorMessage(
        `Invalid font weight value: "${value}"`,
        `Font weight must be one of ${allowed.join(', ')}`,
      ),
    })
  }
})

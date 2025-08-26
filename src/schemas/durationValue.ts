import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

export const durationValue = z.string().superRefine((duration, ctx) => {
  if (!/^[0-9]+ms$/.test(duration)) {
    ctx.addIssue({
      code: 'custom',
      message: schemaErrorMessage(`Invalid duration: "${duration}"`, `A duration must be a string with an "ms"`),
    })
  }
})

import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export const durationValue = z.string().refine(
  duration => /(^[0-9]+ms$)/.test(duration),
  val => ({
    message: schemaErrorMessage(`Invalid duration: "${val}"`, `A duration must be a string with an "ms"`),
  }),
)

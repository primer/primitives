import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export const referenceValue = z.string().refine(
  ref => /^{\w+(\.\w+)*(\.\w+|\.@)}$/.test(ref),
  ref => ({
    message: schemaErrorMessage(
      `Invalid reference: "${ref}"`,
      'Reference must be a string in the format "{path.to.token}".',
    ),
  }),
)

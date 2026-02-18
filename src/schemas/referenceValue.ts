import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

export const referenceValue = z.string().superRefine((value, ctx) => {
  if (!/^{[\w-]+(\.[\w-]+)*(\.[\w-]+|\.@)}$/.test(value)) {
    ctx.addIssue({
      code: 'custom',
      message: schemaErrorMessage(
        `Invalid reference: "${value}"`,
        'Reference must be a string in the format "{path.to.token}".',
      ),
    })
  }
})

import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

export const tokenName = z.string().superRefine((name, ctx) => {
  if (!/(^[a-z0-9][A-Za-z0-9-]*$|^@$)/.test(name)) {
    ctx.addIssue({
      code: 'custom',
      message: schemaErrorMessage(
        `Invalid token name: "${name}"`,
        'Token name must be kebab-case or camelCase, and start with a lowercase letter or number and consist only of letters, numbers, and hyphens.',
      ),
    })
  }
})

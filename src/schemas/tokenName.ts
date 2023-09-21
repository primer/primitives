import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export const tokenName = z.string().refine(
  name => /(^[a-z0-9][A-Za-z0-9-]*$|^@$)/.test(name),
  name => ({
    message: schemaErrorMessage(
      `Invalid token name: "${name}"`,
      'Token name must be kebab-case or camelCase, and start with a lowercase letter or number and consist only of letters, numbers, and hyphens.',
    ),
  }),
)

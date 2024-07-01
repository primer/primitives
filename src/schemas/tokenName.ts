import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export const tokenName = z
  .string()
  .refine(
    name => /(^[a-z0-9][A-Za-z0-9-]*$|^@$)/.test(name),
    name => ({
      message: schemaErrorMessage(
        `Invalid token name: "${name}"`,
        'Token name must be kebab-case or camelCase, and start with a lowercase letter or number and consist only of letters, numbers, and hyphens.',
      ),
    }),
  )
  .superRefine((val, ctx) => {
    // validate base tokens
    const name = ctx.path.join('-')
    if (ctx.path[0] === 'base' && /(^base-[text|color|size]-[A-Za-z0-9-]*$)/.test(name)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_string,
        validation: 'regex',
        message: schemaErrorMessage(
          `Invalid base token name: "${name}"`,
          'Base token names must be kebab-case or camelCase, and start with a lowercase letter or number and consist only of letters, numbers, and hyphens.',
        ),
      })
    }
  })

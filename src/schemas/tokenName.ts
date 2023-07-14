import {z} from 'zod'

export const tokenName = z.string().regex(/^[a-z0-9][A-Za-z0-9-]*$/, {
  message:
    'Invalid token name: Token name must be kebab-case or camelCase, and start with a lowercase letter or number and consist only of letters, numbers, and hyphens.',
})

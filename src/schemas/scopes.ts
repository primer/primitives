import {z} from 'zod'
import {joinFriendly, schemaErrorMessage} from '../utilities/index.js'

const validScopes = [
  'all',
  'bgColor',
  'fgColor',
  'borderColor',
  'borderWidth',
  'size',
  'gap',
  'radius',
  'effectColor',
  'effectFloat',
  'opacity',
  'fontFamily',
  'fontStyle',
  'fontWeight',
  'fontSize',
  'lineHeight',
  'letterSpacing',
  'paragraphSpacing',
  'paragraphIndent',
] as const

export type ValidScope = (typeof validScopes)[number]

export const scopes = (scopeSubset?: ValidScope[]) => {
  const scopeArray = scopeSubset ?? validScopes
  return z.array(z.string()).superRefine((value, ctx) => {
    if (!value.every(item => scopeArray.includes(item as ValidScope))) {
      ctx.addIssue({
        code: 'custom',
        message: schemaErrorMessage(
          `Invalid scope: "${value}"`,
          `Valid scopes are: ${joinFriendly(scopeArray as string[])}`,
        ),
      })
    }
  })
}

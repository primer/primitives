import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

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
  return z.array(z.string()).refine(
    value => value.every(item => scopeArray.includes(item as ValidScope)),
    value => ({
      message: schemaErrorMessage(
        `Invalid scope: "${value}"`,
        `Valid scopes are: ${joinFriendly(scopeArray as string[])}`,
      ),
    }),
  )
}

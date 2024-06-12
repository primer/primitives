import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

export type ValidScope =
  | 'all'
  | 'bgColor'
  | 'fgColor'
  | 'borderColor'
  | 'size'
  | 'gap'
  | 'radius'
  | 'effectColor'
  | 'opacity'
  | 'fontFamily'
  | 'fontStyle'
  | 'fontWeight'
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'paragraphSpacing'
  | 'paragraphIndent'
const validScopes: ValidScope[] = [
  'all',
  'bgColor',
  'fgColor',
  'borderColor',
  'size',
  'gap',
  'radius',
  'effectColor',
  'opacity',
  'fontFamily',
  'fontStyle',
  'fontWeight',
  'fontSize',
  'lineHeight',
  'letterSpacing',
  'paragraphSpacing',
  'paragraphIndent',
]

export const scopes = (scopeSubset?: ValidScope[]) => {
  const scopeArray = scopeSubset ?? validScopes
  return z.array(z.string()).refine(
    value => value.every(item => scopeArray.includes(item as ValidScope)),
    value => ({
      message: schemaErrorMessage(`Invalid scope: "${value}"`, `Valid scopes are: ${joinFriendly(scopeArray)}`),
    }),
  )
}

import type {TransformedToken} from 'style-dictionary/types'
import {invalidTokenValueError, invalidTokenValuePropertyError} from './invalidTokenError.js'

export const getTokenValue = (token: TransformedToken, property?: string) => {
  const value = token.$value ?? token.value

  if (value === undefined) {
    throw new invalidTokenValueError(token)
  }
  // for composite token if subproperty is needed
  if (typeof property === 'string' && value[property] === undefined) {
    throw new invalidTokenValuePropertyError(token, property)
  }

  if (typeof property === 'string') {
    return value[property]
  }

  return value
}

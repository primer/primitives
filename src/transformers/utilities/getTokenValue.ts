import type {TransformedToken} from 'style-dictionary/types'
import {invalidTokenValueError, invalidTokenValuePropertyError} from './invalidTokenError.js'

export const getTokenValue = (token: TransformedToken, property?: string) => {
  if (token.value === undefined) {
    throw new invalidTokenValueError(token)
  }
  // for composite token if subproperty is needed
  if (typeof property === 'string' && token.value[property] === undefined) {
    throw new invalidTokenValuePropertyError(token, property)
  }

  if (typeof property === 'string') {
    return token.value[property]
  }

  return token.value
}

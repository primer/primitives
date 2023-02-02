import type StyleDictionary from 'style-dictionary'
import {invalidTokenError} from './invalidTokenError'

export const getTokenValue = (token: StyleDictionary.TransformedToken) => {
  if (token.value === undefined) {
    throw new invalidTokenError(token)
  }

  return token.value
}

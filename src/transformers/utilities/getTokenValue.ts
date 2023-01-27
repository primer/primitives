import type StyleDictionary from 'style-dictionary'
import {namePathToDotNotation} from '../namePathToDotNotation'

export const getTokenValue = (token: StyleDictionary.TransformedToken) => {
  if (token.value === undefined) {
    throw new Error(
      `Undefined value for token: "${namePathToDotNotation.transformer(token)}" in file "${token.filePath}". ${
        token.original.value ? `The original token value is: "${token.original.value}" ` : ''
      }This may be due to referencing a token that does not exists.`,
    )
  }

  return token.value
}

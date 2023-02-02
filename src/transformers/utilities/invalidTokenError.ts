import type {TransformedToken} from 'style-dictionary'
import {namePathToDotNotation} from '../namePathToDotNotation'

const composeErrorMessage = (token: TransformedToken) => {
  // eslint-disable-next-line i18n-text/no-en
  return `Invalid token "${namePathToDotNotation.transformer(token)}" in file "${
    token.filePath
  }". Transformed value: "${token.value}". ${
    token.original.value ? `Original value: "${token.original.value}" ` : ''
  }This may be due to referencing a token that does not exists.`
}

export class invalidTokenError extends Error {
  constructor(token: TransformedToken) {
    super(composeErrorMessage(token))
    Error.captureStackTrace(this, invalidTokenError)
  }
}

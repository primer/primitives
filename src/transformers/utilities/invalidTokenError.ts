import type {TransformedToken} from 'style-dictionary/types'
import {namePathToDotNotation} from '../namePathToDotNotation.js'

const composeValueErrorMessage = (token: TransformedToken) => {
  const originalValue = token.original.$value ?? token.original.value
  const value = token.$value ?? token.value

  return `Invalid token "${namePathToDotNotation.transform(token, {}, {})}" in file "${
    token.filePath
  }". Transformed value: "${JSON.stringify(value)}". ${
    originalValue ? `Original value: "${JSON.stringify(originalValue)}" ` : ''
  }This may be due to referencing a token that does not exists.`
}

const composeValuePropertyErrorMessage = (token: TransformedToken, property: string) => {
  const originalValue = token.original.$value ?? token.original.value
  const value = token.$value ?? token.value

  return `Invalid property "${property}" of token "${namePathToDotNotation.transform(token, {}, {})}" in file "${
    token.filePath
  }". Transformed property value: "${value[property]}". ${
    originalValue ? `Original value: "${originalValue[property]}" ` : ''
  }This may be due to referencing a token that does not exists.`
}

export class invalidTokenValueError extends Error {
  constructor(token: TransformedToken) {
    super(composeValueErrorMessage(token))
    Error.captureStackTrace(this, invalidTokenValueError)
  }
}

export class invalidTokenValuePropertyError extends Error {
  constructor(token: TransformedToken, property: string) {
    super(composeValuePropertyErrorMessage(token, property))
    Error.captureStackTrace(this, invalidTokenValuePropertyError)
  }
}

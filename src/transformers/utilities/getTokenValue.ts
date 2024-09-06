import type {Config, TransformedToken} from 'style-dictionary/types'
import {invalidTokenValueError, invalidTokenValuePropertyError} from './invalidTokenError.js'

export const getTokenValue = (token: TransformedToken, property?: string, config: Config = {}) => {
  const {usesDtcg} = config
  const valueProp = usesDtcg ? '$value' : 'value'

  if (token[valueProp] === undefined) {
    throw new invalidTokenValueError(token, usesDtcg)
  }
  // for composite token if subproperty is needed
  if (typeof property === 'string' && token[valueProp][property] === undefined) {
    throw new invalidTokenValuePropertyError(token, property)
  }

  if (typeof property === 'string') {
    return token[valueProp][property]
  }

  return token[valueProp]
}

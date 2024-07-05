import type {TransformedToken} from 'style-dictionary/types'
/**
 * jsonToFlat
 * @description creates a one dimensional json structure with either a single value or an token object as the value
 * @param token StyleDictionary.DesignToken
 * @param returnObject - boolean
 * @returns flat json three
 */
export const jsonToFlat = (tokens: TransformedToken[], returnObject = false) =>
  Object.fromEntries(tokens.map(token => [token.name, returnObject ? token : token.$value]))

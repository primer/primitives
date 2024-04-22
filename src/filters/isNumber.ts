import type StyleDictionary from 'style-dictionary'

/**
 * @description Checks if token type is a number
 * @param token [StyleDictionary.TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const isNumber = (token: StyleDictionary.TransformedToken): boolean => token.$type === 'number'

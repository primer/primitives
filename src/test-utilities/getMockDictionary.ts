import {getMockToken} from './getMockToken.js'
import type {Dictionary, TransformedToken, TransformedTokens} from 'style-dictionary/types'

const flattenTokens = (tokenTree: TransformedTokens): TransformedToken[] => {
  const output: TransformedToken[] = []

  const getToken = (tokens: TransformedTokens, flatTokens: TransformedToken[]) => {
    for (const token of Object.values(tokens)) {
      if (Object.prototype.hasOwnProperty.call(token, 'name')) {
        flatTokens.push(token as TransformedToken)
        continue
      }
      getToken(token, flatTokens)
    }
  }

  getToken(tokenTree, output)

  return output
}

const mockDictionaryDefault = {
  tokens: {
    subgroup: {
      red: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
      }),
    },
  },
}

export const getMockDictionary = (tokens?: TransformedTokens): Dictionary => ({
  allTokens: flattenTokens(tokens || mockDictionaryDefault),
  tokens: tokens || mockDictionaryDefault,
})

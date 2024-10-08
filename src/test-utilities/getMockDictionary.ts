import type StyleDictionary from 'style-dictionary'
import {getMockToken} from './getMockToken.js'

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

export const getMockDictionary = (tokens?: StyleDictionary.TransformedTokens): StyleDictionary.Dictionary => ({
  allTokens: Object.values((tokens || mockDictionaryDefault).tokens.subgroup),
  tokens: tokens || mockDictionaryDefault,
  allProperties: Object.values((tokens || mockDictionaryDefault).tokens.subgroup),
  properties: tokens || mockDictionaryDefault,
  usesReference: _value => false,
  getReferences: _value => [],
})

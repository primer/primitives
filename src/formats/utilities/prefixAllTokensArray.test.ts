import {getMockToken} from '../../test-utilities'
import {prefixAllTokensArray} from './prefixAllTokensArray'

describe('Utilities: prefixAllTokensArray', () => {
  const tokens = [
    getMockToken({
      name: 'token',
      value: 'value',
      path: ['colors', 'token'],
    }),
  ]

  it('it adds prefix to token array', () => {
    const platform = {
      prefix: 'pumpkin',
    }
    const expectedOutput = [{...tokens[0], path: [platform.prefix, ...tokens[0].path]}]

    expect(prefixAllTokensArray(tokens, platform)).toStrictEqual(expectedOutput)
  })

  it('it returns original token array if prefix is undefined', () => {
    const platform = {
      prefix: undefined,
    }
    const expectedOutput = tokens

    expect(prefixAllTokensArray(tokens, platform)).toStrictEqual(expectedOutput)
  })

  it('it returns original token array if platform is undefined', () => {
    const platform = undefined
    const expectedOutput = tokens

    expect(prefixAllTokensArray(tokens, platform)).toStrictEqual(expectedOutput)
  })
})

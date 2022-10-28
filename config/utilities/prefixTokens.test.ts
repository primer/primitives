import {getMockToken} from '../../src/test-utilities/getMockToken'
import {prefixTokens} from './prefixTokens'

describe('Utilities: prefixTokens', () => {
  const tokens = {
    colors: getMockToken({
      name: 'token',
      value: 'value'
    })
  }

  it('it adds prefix to token array', () => {
    const platform = {
      prefix: 'pumpkin'
    }
    const expectedOutput = {
      [platform.prefix]: tokens
    }

    expect(prefixTokens(tokens, platform)).toStrictEqual(expectedOutput)
  })

  it('it returns original token array if prefix is undefined', () => {
    const platform = {
      prefix: undefined
    }
    const expectedOutput = tokens

    expect(prefixTokens(tokens, platform)).toStrictEqual(expectedOutput)
  })

  it('it returns original token array if platform is undefined', () => {
    const platform = undefined
    const expectedOutput = tokens

    expect(prefixTokens(tokens, platform)).toStrictEqual(expectedOutput)
  })
})

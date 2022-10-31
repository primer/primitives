import {getMockToken} from '~test-utilities/getMockToken'
import {jsonDeprecated} from './json-deprecated'

describe('Transformer: jsonDeprecated', () => {
  it('Replaces token value with `null` if deprecated is set to `true`', () => {
    const input = getMockToken({
      value: 'tokenName',
      deprecated: true
    })
    const expectedOutput = null
    expect(jsonDeprecated.transformer(input)).toStrictEqual(expectedOutput)
  })

  it('Replaces token value with deprecated value if deprecated is a `string`', () => {
    const input = getMockToken({
      value: 'tokenName',
      deprecated: `token.pumpkin`
    })
    const expectedOutput = 'token.pumpkin'
    expect(jsonDeprecated.transformer(input)).toStrictEqual(expectedOutput)
  })

  it('Replaces token value with deprecated value if deprecated is a `string` and removes {}', () => {
    const input = getMockToken({
      value: 'tokenName',
      deprecated: `{token.pumpkin}`
    })
    const expectedOutput = 'token.pumpkin'
    expect(jsonDeprecated.transformer(input)).toStrictEqual(expectedOutput)
  })
})

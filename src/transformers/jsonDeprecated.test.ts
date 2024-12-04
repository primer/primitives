import {getMockToken} from '../test-utilities/index.js'
import {jsonDeprecated} from './jsonDeprecated.js'

describe('Transformer: jsonDeprecated', () => {
  it('Replaces token value with `null` if deprecated is set to `true`', () => {
    const item = getMockToken({
      value: 'tokenName',
      $deprecated: true,
    })
    const expectedOutput = null
    expect(jsonDeprecated.transform(item, {}, {})).toStrictEqual(expectedOutput)
  })

  it('Replaces token value with deprecated value if deprecated is a `string`', () => {
    const item = getMockToken({
      value: 'tokenName',
      $deprecated: `token.pumpkin`,
    })
    const expectedOutput = 'token.pumpkin'
    expect(jsonDeprecated.transform(item, {}, {})).toStrictEqual(expectedOutput)
  })

  it('Replaces token value with deprecated value if deprecated is a `string` and removes {}', () => {
    const item = getMockToken({
      value: 'tokenName',
      $deprecated: `{token.pumpkin}`,
    })
    const expectedOutput = 'token.pumpkin'
    expect(jsonDeprecated.transform(item, {}, {})).toStrictEqual(expectedOutput)
  })
})

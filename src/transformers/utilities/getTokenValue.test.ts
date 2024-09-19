import {getMockToken} from '../../test-utilities/index.js'
import {getTokenValue} from './getTokenValue.js'

describe('Utilities: getTokenValue', () => {
  it('it retrieves the token value if usesDtcg is false', () => {
    const token = getMockToken({
      $value: undefined, // needs to reset because of defaults from getMockToken
      value: '#223344',
    })
    expect(getTokenValue(token)).toStrictEqual('#223344')
  })

  it('it retrieves the token $value if usesDtcg is true', () => {
    const token = getMockToken({
      $value: '#223344',
    })
    expect(getTokenValue(token, undefined)).toStrictEqual('#223344')
  })
  it('it throws a typeError if invalid input is used', () => {
    expect(() => {
      // @ts-expect-error due to testing wrong input
      getTokenValue('invalid')
    }).toThrow(TypeError)
  })
})

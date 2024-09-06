import {getMockToken} from '../../test-utilities/index.js'
import {getTokenValue} from './getTokenValue.js'

describe('Utilities: getTokenValue', () => {
  it('it retrieves the token value if usesDtcg is false', () => {
    const token = getMockToken({
      value: '#223344',
    })
    expect(getTokenValue(token, undefined, {usesDtcg: false})).toStrictEqual('#223344')
  })

  it('it retrieves the token $value if usesDtcg is true', () => {
    const token = getMockToken({
      $value: '#223344',
    })
    expect(getTokenValue(token, undefined, {usesDtcg: true})).toStrictEqual('#223344')
  })
  it('it throws a typeError if invalid input is used', () => {
    expect(() => {
      // @ts-expect-error due to testing wrong input
      getTokenValue('invalid')
    }).toThrow(TypeError)
  })
})

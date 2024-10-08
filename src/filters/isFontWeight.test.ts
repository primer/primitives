import {getMockToken} from '../test-utilities/index.js'
import {isFontWeight} from './isFontWeight.js'

describe('Filter: isFontWeight', () => {
  it('returns true if $type property is `fontWeight`', () => {
    expect(isFontWeight(getMockToken({$type: 'fontWeight'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `fontWeight`', () => {
    expect(isFontWeight(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is missing', () => {
    expect(isFontWeight(getMockToken({alpha: 0.4}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isFontWeight(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isFontWeight(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isFontWeight(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

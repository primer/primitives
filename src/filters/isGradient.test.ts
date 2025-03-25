import {getMockToken} from '../test-utilities/index.js'
import {isGradient} from './isGradient.js'

describe('Filter: isGradient', () => {
  it('returns true if $type property is `color`', () => {
    expect(isGradient(getMockToken({$type: 'gradient'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `color`', () => {
    expect(isGradient(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is missing', () => {
    expect(isGradient(getMockToken({alpha: 0.4}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isGradient(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isGradient(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isGradient(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

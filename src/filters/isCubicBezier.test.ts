import {getMockToken} from '../test-utilities/index.js'
import {isCubicBezier} from './isCubicBezier.js'

describe('Filter: isCubicBezier', () => {
  it('returns true if $type property is `cubicBezier`', () => {
    expect(isCubicBezier(getMockToken({$type: 'cubicBezier'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `cubicBezier`', () => {
    expect(isCubicBezier(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is missing', () => {
    expect(isCubicBezier(getMockToken({alpha: 0.4}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isCubicBezier(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isCubicBezier(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isCubicBezier(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

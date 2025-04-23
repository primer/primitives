import {getMockToken} from '../test-utilities/index.js'
import {isTransition} from './isTransition.js'

describe('Filter: isTransition', () => {
  it('returns true if $type property is `transition`', () => {
    expect(isTransition(getMockToken({$type: 'transition'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `transition`', () => {
    expect(isTransition(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is missing', () => {
    expect(isTransition(getMockToken({alpha: 0.4}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isTransition(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isTransition(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isTransition(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

import {getMockToken} from '../test-utilities/index.js'
import {isNumber} from './isNumber.js'

describe('Filter: isNumber', () => {
  it('returns true if $type property is `number`', () => {
    expect(isNumber(getMockToken({$type: 'number'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `number`', () => {
    expect(isNumber(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isNumber(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isNumber(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isNumber(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

import {getMockToken} from '../test-utilities/index.js'
import {isTypography} from './isTypography.js'

describe('Filter: isTypography', () => {
  it('returns true if $type property is `typography`', () => {
    expect(isTypography(getMockToken({$type: 'typography'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `typography`', () => {
    expect(isTypography(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isTypography(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isTypography(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isTypography(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

import {getMockToken} from '~/src/test-utilities'
import {isDuration} from './isDuration'

describe('Filter: isDuration', () => {
  it('returns true if $type property is `duration`', () => {
    expect(isDuration(getMockToken({$type: 'duration'}))).toStrictEqual(true)
  })

  it('returns false if $type property is not `duration`', () => {
    expect(isDuration(getMockToken({$type: 'pumpkin'}))).toStrictEqual(false)
  })

  it('returns false if $type property is missing', () => {
    expect(isDuration(getMockToken({value: '1000ms'}))).toStrictEqual(false)
  })

  it('returns false if $type property is falsy', () => {
    expect(isDuration(getMockToken({$type: false}))).toStrictEqual(false)
    expect(isDuration(getMockToken({$type: undefined}))).toStrictEqual(false)
    expect(isDuration(getMockToken({$type: null}))).toStrictEqual(false)
  })
})

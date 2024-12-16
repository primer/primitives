import {asArray} from './asArray.js'

describe('Utilities: asArray', () => {
  it('returns an array from a single item', () => {
    expect(asArray('string')).toStrictEqual(['string'])
  })

  it('returns an array from an array of items', () => {
    expect(asArray(['string', 'string2'])).toStrictEqual(['string', 'string2'])
  })

  it('returns an empty array from undefined', () => {
    expect(asArray(undefined)).toStrictEqual([])
    expect(asArray([undefined])).toStrictEqual([])
  })
})

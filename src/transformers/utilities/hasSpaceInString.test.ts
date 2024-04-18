import {hasSpaceInString} from './hasSpaceInString'

describe('Utilities: hasSpaceInString', () => {
  it('returns true if string has space', () => {
    expect(hasSpaceInString('string with space')).toBe(true)
  })

  it('returns false if string has no space', () => {
    expect(hasSpaceInString('string-without-space')).toBe(false)
  })

  it('throws a typeError if invalid input is used', () => {
    expect(() => {
      // @ts-expect-error due to testing wrong input
      hasSpaceInString(100)
    }).toThrow(TypeError)

    expect(() => {
      // @ts-expect-error due to testing wrong input
      hasSpaceInString(['string'])
    }).toThrow(TypeError)

    expect(() => {
      // @ts-expect-error due to testing wrong input
      hasSpaceInString({value: 'string'})
    }).toThrow(TypeError)
  })
})

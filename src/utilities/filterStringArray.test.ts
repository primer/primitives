import {filterStringArray} from './filterStringArray.js'

describe('Utilities: filterStringArray', () => {
  it('keeps words', () => {
    expect(filterStringArray(['primer', 'test'])).toStrictEqual(['primer', 'test'])
  })

  it('it filters out undefined, etc.', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(filterStringArray(['primer', false, null, undefined, ''])).toStrictEqual(['primer'])
  })

  it('remove special chars', () => {
    expect(filterStringArray(['primer@test', 'Y_e-s', 'with space'])).toStrictEqual([
      'primer',
      'test',
      'Y',
      'e',
      's',
      'with',
      'space',
    ])
  })
})

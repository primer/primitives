const pathToKebabCase = require('../build.js').pathToKebabCase

describe('Token formatters: kebab-case', () => {
  it('returns a valid token name in kebab-case', () => {
    expect(pathToKebabCase({path: ['red']})).toBe('red')
    expect(pathToKebabCase({path: ['color', 'red']})).toBe('color-red')
    expect(pathToKebabCase({path: ['color', 'functional', 'danger']})).toBe('color-functional-danger')
  })

  it('works as expected with empty token path', () => {
    expect(pathToKebabCase({path: []})).toBe('')
    expect(() => pathToKebabCase({path: null})).toThrowError()
    expect(() => pathToKebabCase([])).toThrowError()
  })
})
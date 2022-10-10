const pathToDotNotation = require('../build').pathToDotNotation

// eslint-disable-next-line i18n-text/no-en
describe('Token formatters: dot.notation', () => {
  it('returns a valid token name in dot.notation', () => {
    expect(pathToDotNotation({path: ['red']})).toBe('red')
    expect(pathToDotNotation({path: ['color', 'red']})).toBe('color.red')
    expect(pathToDotNotation({path: ['color', 'functional', 'danger']})).toBe('color.functional.danger')
  })

  it('works as expected with empty token path', () => {
    expect(pathToDotNotation({path: []})).toBe('')
    expect(() => pathToDotNotation({path: null})).toThrowError()
    expect(() => pathToDotNotation([])).toThrowError()
  })
})

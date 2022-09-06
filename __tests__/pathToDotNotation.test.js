const pathToDotNotation = require('../build.js').pathToDotNotation

describe('Token formatters: PascalCase', () => {
  it('returns a valid token name in PascalCase', () => {
  expect(pathToDotNotation({path: ['red']})).toBe('red')
  expect(pathToDotNotation({path: ['color', 'red']})).toBe('color.red')
  expect(pathToDotNotation({path: ['color', 'functional', 'danger']})).toBe('color.functional.danger')
})

test('empty token path', () => {
  expect(pathToDotNotation({path: []})).toBe('')
  expect(() => pathToDotNotation({path: null})).toThrowError()
  expect(() => pathToDotNotation([])).toThrowError()
})

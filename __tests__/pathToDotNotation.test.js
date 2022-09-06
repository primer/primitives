const pathToDotNotation = require('../build.js').pathToDotNotation

test('valid token', () => {
  expect(pathToDotNotation({path: ['red']})).toBe('red')
  expect(pathToDotNotation({path: ['color', 'red']})).toBe('color.red')
  expect(pathToDotNotation({path: ['color', 'functional', 'danger']})).toBe('color.functional.danger')
})

test('empty token path', () => {
  expect(pathToDotNotation({path: []})).toBe('')
  expect(() => pathToDotNotation({path: null})).toThrowError()
  expect(() => pathToDotNotation([])).toThrowError()
})

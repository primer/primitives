const pathToKebabCase = require('../build.js').pathToKebabCase

test('valid token', () => {
  expect(pathToKebabCase({path: ['red']})).toBe('red')
  expect(pathToKebabCase({path: ['color', 'red']})).toBe('color-red')
  expect(pathToKebabCase({path: ['color', 'functional', 'danger']})).toBe('color-functional-danger')
})

test('empty token path', () => {
  expect(pathToKebabCase({path: []})).toBe('')
  expect(() => pathToKebabCase({path: null})).toThrowError()
  expect(() => pathToKebabCase([])).toThrowError()
})
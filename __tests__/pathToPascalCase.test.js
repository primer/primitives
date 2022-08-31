const pathToPascalCase = require('../build.js').pathToPascalCase

test('valid token', () => {
  expect(pathToPascalCase({path: ['red']})).toBe('Red')
  expect(pathToPascalCase({path: ['color', 'red']})).toBe('ColorRed')
  expect(pathToPascalCase({path: ['color', 'functional', 'danger']})).toBe('ColorFunctionalDanger')
})

test('empty token path', () => {
  expect(pathToPascalCase({path: []})).toBe('')
  expect(() => pathToPascalCase({path: null})).toThrowError()
  expect(() => pathToPascalCase([])).toThrowError()
})
/** @type {import('ts-jest').JestConfigWithTsJest} */
const {pathsToModuleNameMapper} = require('ts-jest')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // this is no html literal
  // eslint-disable-next-line github/unescaped-html-literal
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
  // eslint-disable-next-line github/unescaped-html-literal
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
}

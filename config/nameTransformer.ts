import { Token } from '../src/@types/token'

const pathToKebabCase = (token: Token) => token.path.join('-')

const pathToDotNotation = (token: Token) => token.path.join('.')

const capitalize = (string: string) => string[0].toUpperCase() + string.slice(1)

const pathToPascalCase = (token: Token) => token.path.map(tokenPathItems => capitalize(tokenPathItems)).join('')

export {
  pathToKebabCase,
  pathToDotNotation,
  capitalize,
  pathToPascalCase
}
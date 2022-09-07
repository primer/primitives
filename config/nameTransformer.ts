import { TransformedToken } from 'style-dictionary'

const pathToKebabCase = (token: TransformedToken) => token.path.join('-')

const pathToDotNotation = (token: TransformedToken) => token.path.join('.')

const capitalize = (string: string) => string[0].toUpperCase() + string.slice(1)

const pathToPascalCase = (token: TransformedToken) => token.path.map(tokenPathItems => capitalize(tokenPathItems)).join('')

export {
  pathToKebabCase,
  pathToDotNotation,
  capitalize,
  pathToPascalCase
}
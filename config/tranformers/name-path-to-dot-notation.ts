import StyleDictionary from 'style-dictionary'

/**
 * upperCaseFirstCharacter
 * @scope custom implementation should only be used within `name path to dot notation` transformer
 * @description changes first letter to uppercase but keeps the rest of the word as is
 * @param string
 * @returns string
 */
const upperCaseFirstCharacter = ([firstLetter, ...restOfWord]: string): string => {
  return firstLetter.toUpperCase() + restOfWord.join('')
}
/**
 * camelCase
 * @scope custom camelCase implementation should only be used within `name path to dot notation` transformer
 * @description replaces space ` `, dash `-`, underscore `_` and plus `+` by camelCasing e.g. `camel-case` -> `camelCase`
 * @param string
 * @returns string
 */
const camelCase = (string: string): string => {
  return string
    .split(/[\s-_+]+/g)
    .map((stringPart: string, index: number) => (index === 0 ? stringPart : upperCaseFirstCharacter(stringPart)))
    .join('')
}

export const namePathToDotNotation: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken) => token.path.map(part => camelCase(part)).join('.')
}

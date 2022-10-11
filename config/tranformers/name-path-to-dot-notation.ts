import StyleDictionary from 'style-dictionary'

/**
 * capitalize
 * @description capitalizes bur keeps the rest of the word as is
 * @todo: replace with _.capitalize once we don't use camelCase in token names anymore
 * @param param0
 * @returns
 */
const capitalize = ([firstLetter, ...restOfWord]: string): string => {
  return firstLetter.toUpperCase() + restOfWord.join('')
}

const camelCase = (string: string): string => {
  return string
    .split(/[\s-_+]+/g)
    .map((stringPart: string, index: number) => (index === 0 ? stringPart : capitalize(stringPart)))
    .join('')
}

export const namePathToDotNotation: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken) => token.path.map(part => camelCase(part)).join('.')
}

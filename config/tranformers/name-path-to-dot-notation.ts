import StyleDictionary from 'style-dictionary'

const capitalize = ([firstLetter, ...restOfWord]: string): string => {
  return firstLetter.toUpperCase() + restOfWord.join("")
}

const camelCase = (string: string): string => {
  return string
    .split(/[\s-_\+]+/g)
    .map((string: string, index: number) => index === 0 ? string : capitalize(string))
    .join("")
}

export const namePathToDotNotation: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken) => token.path.map(part => camelCase(part)).join('.')
}
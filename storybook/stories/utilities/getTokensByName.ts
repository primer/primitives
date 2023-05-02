// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import StyleDictionary from 'style-dictionary'

export const getTokensByName = (
  tokens: Record<string, StyleDictionary.TransformedToken>,
  name: string,
): StyleDictionary.TransformedToken[] => {
  const separator = '-'
  const separatorRegex = new RegExp(`${separator}$`, 'i')
  // regex to match strings starting with name
  const regex = new RegExp(`^${name.replace(separatorRegex, '')}(${separator}|$)`, 'i')
  // filter to only include objects starting with name
  return Object.values(tokens).filter(token => regex.test(`${token.name}`))
}

import StyleDictionary from 'style-dictionary'

export const jsonDeprecated: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.deprecated !== undefined,
  transformer: (token: StyleDictionary.TransformedToken) => token.deprecated.replace(/[{}]/g, '')
}
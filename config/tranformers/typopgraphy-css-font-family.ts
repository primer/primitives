import StyleDictionary from 'style-dictionary'

const hasSpaceInName = (string: string) => /\s/g.test(string)
/**
 * typopgraphyCssFontFamily
 * @description if fontFamily is an array, join it with commas and wrap font names with spaces in quotes
 */
export const typopgraphyCssFontFamily: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'fontFamily' && Array.isArray(token.value),
  transformer: (token: StyleDictionary.TransformedToken) => token.value.map((string: string) => hasSpaceInName(string) ? `'${string}'` : string).join(", ")
}
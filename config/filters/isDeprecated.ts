import StyleDictionary from 'style-dictionary';

export const isDeprecated = (token: StyleDictionary.TransformedToken) => {
  return token?.deprecated !== undefined;
}
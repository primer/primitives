import StyleDictionary from 'style-dictionary';

export const isSource = (token: StyleDictionary.TransformedToken) => {
  return token?.isSource === true;
}
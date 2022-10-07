import StyleDictionary from 'style-dictionary';
import { isSource } from './isSource';

export const isDeprecated = (token: StyleDictionary.TransformedToken) => {
  return isSource(token) && (token?.deprecated !== undefined);
}
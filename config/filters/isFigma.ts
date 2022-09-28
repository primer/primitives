import StyleDictionary from 'style-dictionary';
import { isSource } from './isSource';

export const isFigma = (token: StyleDictionary.TransformedToken) => {
  return isSource(token) && (token.$type === 'color' || token.figmaToken !== undefined)
}
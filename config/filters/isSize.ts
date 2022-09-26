import StyleDictionary from 'style-dictionary';
import { isSource } from './isSource';

export const isSize = (token: StyleDictionary.TransformedToken) => {
  return isSource(token) && token.$type === 'size'
}
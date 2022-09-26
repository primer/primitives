import StyleDictionary from 'style-dictionary';
import { isSource } from './isSource';

export const isColor = (token: StyleDictionary.TransformedToken) => {
  return isSource(token) && token.$type === 'color'
}
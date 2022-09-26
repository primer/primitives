import StyleDictionary from 'style-dictionary';
import { isSource } from './isSource';

export const isDimension = (token: StyleDictionary.TransformedToken) => {
  return isSource(token) && token.$type === 'dimension'
}
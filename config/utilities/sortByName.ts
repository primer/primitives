import StyleDictionary from 'style-dictionary'
/**
 * A sorting function to be used when iterating over `dictionary.allTokens` in
 * a format.
 * @param {*} a - first element for comparison
 * @param {*} b - second element for comparison
 * @returns {Integer} -1 or 1 depending on which element should come first based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */


export const sortByName = (a: StyleDictionary.TransformedToken, b: StyleDictionary.TransformedToken): -1 | 1 => {
  if (b.name > a.name) {
    return -1
  }
  return 1
}
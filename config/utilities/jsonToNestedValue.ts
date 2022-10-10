import StyleDictionary from 'style-dictionary'
/**
 * jsonToNestedValue
 * @description creates a nested json three where every final value is the `.value` prop
 * @param token StyleDictionary.DesignToken
 * @returns nested json three
 */
export const jsonToNestedValue = (token: StyleDictionary.DesignToken | Record<string, unknown>) => {
  // is design token
  if ('value' in token) return token.value
  // is non-object value
  if (typeof token !== 'object') return token
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
    // @ts-expect-error: can't predict type
    nextObj[prop] = jsonToNestedValue(value)
  }
  return nextObj
}
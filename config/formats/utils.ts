import StyleDictionary from 'style-dictionary'

export const toValue = (token: StyleDictionary.DesignToken | {}) => {
  // is design token
  if ('value' in token) return token.value
  // is non-object value
  if (typeof token !== 'object') return token
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
    // @ts-ignore
    nextObj[prop] = toValue(value)
  }
  return nextObj
}
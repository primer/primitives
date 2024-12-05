import type {DesignToken} from 'style-dictionary/types'
/**
 * jsonToNestedValue
 * @description creates a nested json tree where every final value is the `.value` prop
 * @param token StyleDictionary.DesignToken
 * @returns nested json three
 */
export const transformTokens = (
  token: DesignToken | Record<string, unknown>,
  transform: (token: DesignToken) => DesignToken,
) => {
  // is non-object value
  if (typeof token !== 'object') return token
  // is design token
  if ('$value' in token || 'value' in token) {
    return transform(token as DesignToken)
  }
  // is obj
  const nextObj = {}
  for (const [prop, value] of Object.entries(token)) {
    // @ts-expect-error: can't predict type
    nextObj[prop] = transformTokens(value, transform)
  }
  return nextObj
}

type NestedObject = {
  [key: string]: string | NestedObject
}

/**
 * flattenObject
 * @description turns a nested object into a one-dimensional object and joins names
 * @param obj - the object to flatten
 * @param prefix - applied to the key name
 * @param separator - defaults to '.'
 * @returns flattened objects
 */
export const flattenObject = (obj: NestedObject, prefix = '', separator = '.') =>
  Object.keys(obj).reduce<Record<string, string>>((acc, k) => {
    const pre = prefix.length ? `${prefix}${separator}` : ''
    if (typeof obj[k] === 'object') {
      // purposely mutating acc
      Object.assign(acc, flattenObject(obj[k] as NestedObject, pre + k, separator))
    } else if (typeof obj[k] === 'string') {
      acc[pre + k] = obj[k] as string
    }
    return acc
  }, {})

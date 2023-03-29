export type NestedObject = {
  [key: string]: string | number | boolean | NestedObject
}

/**
 * flattenObject
 * @description turns a nested object into a one-dimensional object and joins names
 * @param obj - the object to flatten
 * @param prefix - applied to the key name
 * @param separator - defaults to '.'
 * @returns flattened objects
 */
export const flattenObject = (
  obj: NestedObject,
  prefix = '',
  separator = '.',
  isLastLevel?: (object: Record<string, unknown>) => boolean,
) =>
  Object.keys(obj).reduce<Record<string, string | number | boolean | NestedObject>>((acc, k) => {
    const pre = prefix.length ? `${prefix}${separator}` : ''
    if (typeof obj[k] === 'object' && (isLastLevel === undefined || !isLastLevel(obj[k] as Record<string, unknown>))) {
      // purposely mutating acc
      Object.assign(acc, flattenObject(obj[k] as NestedObject, pre + k, separator, isLastLevel))
    } else {
      acc[pre + k] = obj[k]
    }
    return acc
  }, {})

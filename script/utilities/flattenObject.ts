/**
 * flattenObject
 * @description turns a nested object into a one-dimensional object and joins names with dots
 * @param obj
 * @param prefix
 * @returns flattend objects
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flattenObject = (obj: any, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : ''
    if (typeof obj[k] === 'object') {
      // purposly mutating acc
      Object.assign(acc, flattenObject(obj[k], pre + k))
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: implicit any
      acc[pre + k] = obj[k]
    }
    return acc
  }, {})

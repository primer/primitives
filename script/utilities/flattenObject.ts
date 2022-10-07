/**
 * flattenObject
 * @description turns a nested object into a one-dimensional object and joins names with dots
 * @param obj 
 * @param prefix 
 * @returns flattend objects
 */
export const flattenObject = (obj: any, prefix: string = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') {
      // purposly mutating acc
      Object.assign(acc, flattenObject(obj[k], pre + k));
    }
    else {
      // @ts-ignore: implicit any
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {})
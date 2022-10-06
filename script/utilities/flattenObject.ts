export const flattenObject = (obj: any, prefix: string = "") =>
  // @ts-ignore
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    // @ts-ignore
    else acc[pre + k] = obj[k];
    return acc;
  }, {})
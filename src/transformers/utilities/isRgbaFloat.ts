export type RgbaFloat = {
  r: number
  g: number
  b: number
  a?: number
}

// sum up the values of all values in an array
const sum = (array: unknown[]): number => array.reduce((acc: number, v: unknown) => acc + parseInt(`${v}`), 0)
// check if a value is an rgba float object
export const isRgbaFloat = (value: unknown): value is RgbaFloat => {
  if (
    value &&
    typeof value === `object` &&
    'r' in value &&
    'g' in value &&
    'b' in value &&
    sum([value.r, value.g, value.b]) < 5
  ) {
    return true
  }
  return false
}

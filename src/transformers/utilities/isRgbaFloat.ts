export type RgbaFloat = {
  r: number
  g: number
  b: number
  a?: number
}

// check if a value is an rgba float object
export const isRgbaFloat = (value: unknown): value is RgbaFloat => {
  if (
    value &&
    typeof value === `object` &&
    'r' in value &&
    typeof value.r === `number` &&
    'g' in value &&
    typeof value.g === `number` &&
    'b' in value &&
    typeof value.b === `number` &&
    value.r >= 0 &&
    value.r <= 1 &&
    value.g >= 0 &&
    value.g <= 1 &&
    value.b >= 0 &&
    value.b <= 1
  ) {
    return true
  }
  return false
}

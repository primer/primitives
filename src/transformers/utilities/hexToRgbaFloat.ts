import type {RgbaFloat} from './isRgbaFloat'

export const hexToRgbaFloat = (hex: string, alpha?: number): RgbaFloat => {
  // retrieve spots from hex value (hex 3, hex 4, hex 6 or hex 8)
  let result
  if (hex.length > 5) {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
  } else {
    result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})?$/i.exec(hex)
  }

  if (result === null) {
    throw new Error('Invalid hex value in "hexToRgbaFloat". Please provide a valid hex3, hex4, hex6 or hex8 value.')
  }
  // doule characters if hex 3 or hex 4
  if (hex.length < 6) {
    result[1] = `${result[1]}${result[1]}` // double the character
    result[2] = `${result[2]}${result[2]}` // double the character
    result[3] = `${result[3]}${result[3]}` // double the character
    if (result[4]) {
      result[4] = `${result[4]}${result[4]}` // double the character
    }
  }
  // return parsed rgba float object using alpha value from token, from hex code or defaults to 1
  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
    a: alpha !== undefined ? alpha : result[4] ? parseInt(result[4], 16) / 255 : 1,
  }
}

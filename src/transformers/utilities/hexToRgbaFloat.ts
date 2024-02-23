type RgbaFloat = {
  r: number
  g: number
  b: number
  a?: number
}

export const hexToRgbaFloat = (hex: string, alpha?: number): RgbaFloat => {
  // retrieve spots from hex value (hex 3, hex 6 or hex 8)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex) ?? ['00', '00', '00']
  // return parsed rgba float object using alpha value from token, from hex code or defaults to 1
  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
    a: alpha !== undefined ? alpha : result[4] ? parseInt(result[4], 16) / 255 : 1,
  }
}

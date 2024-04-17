export const rgbaFloatToHex = ({r, g, b, a}: {r: number; g: number; b: number; a?: number}, alpha = true): string => {
  const values = [r, g, b, alpha === true && a && a < 1 ? a : undefined].filter(item => item !== undefined) as number[]

  if (r > 1 || r < 0 || g > 1 || g < 0 || b > 1 || b < 0) {
    throw new Error('Invalid RgbaFloat value. R, G and B values must be between 0 and 1.')
  }

  return `#${values
    .map(v =>
      Number(parseInt(`${v * 255}`, 10))
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}`
}

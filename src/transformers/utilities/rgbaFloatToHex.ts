export const rgbaFloatToHex = ({r, g, b, a}: {r: number; g: number; b: number; a?: number}, alpha = true): string => {
  const values = [r, g, b, alpha === true && a && a < 1 ? a : undefined].filter(item => item !== undefined) as number[]

  return `#${values.map(v => `${(v * 255).toString(16)}`.padStart(2, '0')).join('')}`
}

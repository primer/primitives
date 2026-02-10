import type {ColorW3cValue} from '../../schemas/colorW3cValue.js'

export type ColorValue = string | ColorW3cValue

/**
 * Type guard to check if value is W3C color object
 */
export function isW3cColorValue(value: unknown): value is ColorW3cValue {
  return typeof value === 'object' && value !== null && 'colorSpace' in value && 'components' in value
}

/**
 * Normalizes W3C color object or hex string to hex string
 * @param value - hex string or W3C color object
 * @returns hex string
 */
export function normalizeColorValue(value: ColorValue): string {
  // Already a string (hex/rgb) - return as-is
  if (typeof value === 'string') {
    return value
  }

  // W3C object with hex property - use it
  if (value.hex) {
    return value.hex
  }

  // W3C object without hex - convert components to hex
  const [r, g, b] = value.components
  const toHex = (n: number) =>
    Math.round(n * 255)
      .toString(16)
      .padStart(2, '0')
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`

  // Add alpha if not 1
  if (value.alpha !== undefined && value.alpha < 1) {
    return hex + toHex(value.alpha)
  }

  return hex
}

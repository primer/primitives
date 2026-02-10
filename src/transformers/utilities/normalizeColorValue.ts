import Color from 'colorjs.io'
import type {ColorW3cValue} from '../../schemas/colorW3cValue.js'

export type ColorValue = string | ColorW3cValue

/**
 * Type guard to check if value is W3C color object
 */
export function isW3cColorValue(value: unknown): value is ColorW3cValue {
  return typeof value === 'object' && value !== null && 'colorSpace' in value && 'components' in value
}

/**
 * Maps W3C DTCG color space names to colorjs.io space identifiers
 */
const getColorSpace = (colorSpace: string): string => {
  switch (colorSpace) {
    case 'display-p3':
      return 'p3'
    case 'a98-rgb':
      return 'a98rgb'
    case 'prophoto-rgb':
      return 'prophoto'
    default:
      return colorSpace
  }
}

/**
 * Converts a W3C DTCG color object to a colorjs.io Color instance.
 * The 'none' keyword is replaced with 0 per CSS Color 4 rules for color computation.
 */
export function w3cToColor(value: ColorW3cValue): Color {
  const coords = value.components.map(c => (c === 'none' ? 0 : c)) as [number, number, number]
  return new Color({
    space: getColorSpace(value.colorSpace),
    coords,
    alpha: value.alpha ?? 1,
  })
}

/**
 * Normalizes a color value for use in transformers.
 * String values (hex, rgb, rgba, references) are returned as-is.
 * W3C DTCG color objects are converted to hex via colorjs.io,
 * correctly handling all color spaces (sRGB, display-p3, lab, etc.).
 * @param value - color string or W3C color object
 * @returns color string usable by downstream transformers
 */
export function normalizeColorValue(value: ColorValue): string {
  // String value (hex, rgb, rgba, reference, etc.) - return as-is
  if (typeof value === 'string') {
    return value
  }

  // W3C object with hex property and sRGB color space - use hex directly
  if (value.hex && value.colorSpace === 'srgb') {
    return value.hex
  }

  // Convert via colorjs.io for correct color space handling
  const color = w3cToColor(value)
  const rgb = color.toGamut('srgb').to('srgb')
  const [r, g, b] = rgb.coords.map(x => Math.round(Math.max(0, Math.min(1, x ?? 0)) * 255))
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

  if (rgb.alpha < 1) {
    const a = Math.round(rgb.alpha * 255)
    return hex + a.toString(16).padStart(2, '0')
  }

  return hex
}

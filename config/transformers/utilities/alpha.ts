import {rgba, parseToRgba} from 'color2k'
/**
 * alpha
 * @description takes a colors string like hex or rgba and returns an rgba color with the specified alpha value
 * @param color color string like a `#334455` or `rgb(255,200,100)`
 * @param desiredAlpha number
 * @returns rgba value
 */
export const alpha = (color: string, desiredAlpha: number): string => {
  const [r, g, b] = parseToRgba(color)
  return rgba(r, g, b, desiredAlpha)
}

import {rgba, parseToRgba} from 'color2k'
import type {PlatformConfig, TransformedToken} from 'style-dictionary/types'
import {log} from '../../utilities/log.js'
/**
 * alpha
 * @description takes a colors string like hex or rgba and returns an rgba color with the specified alpha value
 * @param color color string like a `#334455` or `rgb(255,200,100)`
 * @param desiredAlpha number
 * @returns rgba value
 */
export const alpha = (
  color: string,
  desiredAlpha: number,
  token?: TransformedToken,
  config?: PlatformConfig,
): string => {
  const [r, g, b, a] = parseToRgba(color)

  if (a < 1 && desiredAlpha < 1) {
    log.info(
      `🚨 You are setting an alpha value of "${desiredAlpha}" for a color with an alpha value (${color}). The previous alpha value will be disregarded as if the color would have been 100% opaque.${
        token !== undefined ? `\n ↳ Token: "${token.name}" in file: "${token.filePath}"` : ''
      }`,
      config,
    )
  }

  return rgba(r, g, b, desiredAlpha)
}

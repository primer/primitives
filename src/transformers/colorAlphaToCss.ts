import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isColorWithAlpha} from '../filters/isColorWithAlpha.js'
import {getTokenValue} from './utilities/getTokenValue.js'

export const cssColorMix = (colorA: string, colorB: string, colorBPercent: number) => {
  if (colorBPercent < 0 || colorBPercent > 1) {
    throw new Error(
      `Invalid argument for "cssColorMix", colorBPercent must be between 0 and 1, ${colorBPercent} provided.`,
    )
  }
  if (colorBPercent === 0) return colorA
  if (colorBPercent === 1) return colorB

  return `color-mix(in srgb, ${colorA}, ${colorB} ${colorBPercent * 100}%)`
}

export const colorAlphaToCss: Transform = {
  name: 'colorAlpha/css',
  type: 'value',
  transitive: true,
  filter: isColorWithAlpha,
  transform: (token: TransformedToken) => {
    if (!token.alpha || token.alpha === null) return getTokenValue(token)
    return cssColorMix(getTokenValue(token), 'transparent', 1 - token.alpha)
  },
}

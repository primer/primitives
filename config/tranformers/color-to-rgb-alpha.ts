import { transparentize } from 'color2k'
import StyleDictionary from 'style-dictionary'

export const colorToRgbAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha,
  transformer: (token: StyleDictionary.TransformedToken) => transparentize(token.value, token.alpha)
}

// /**
//  * toRgba
//  * @param hex (3 or 6 charcaters)
//  * @alpha number
//  * @return rgba string
//  */
// const toRgba = (hex: string, alpha: number) => {
//   if (alpha > 1) {
//     alpha = alpha / 100
//   }
//   const [red, green, blue] = hexToRgb(hex)
//   //
//   return `rgba(${red}, ${green}, ${blue}, ${alpha})`
// }

// /**
//  * hexToRgb
//  * @source https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
//  * @param hex (3 or 6 charcaters)
//  * @returns [R, G, B]
//  */
// const hexToRgb = (hex: string): [string, string, string] => {
//   if (hex.length !== 4 && hex.length !== 7) {
//     throw new Error("Invalid hex value provided to hexToRgb function.");
//   }
//   // @ts-ignore
//   return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
//     , (m, r, g, b) => '#' + r + r + g + g + b + b)
//     .substring(1).match(/.{2}/g)
//     .map(x => parseInt(x, 16))
// }




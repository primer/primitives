import StyleDictionary from 'style-dictionary'

export const colorHexAlpha = {
  type: `value`,
  transitive: true,
  name: `color/hexAlpha`,
  matcher: (token: StyleDictionary.DesignToken) => token.$type === 'color' && token.alpha,
  transformer: (token: StyleDictionary.DesignToken) => toRgba(token.value, token.alpha)
}

/**
 * toRgba
 * @param hex (3 or 6 charcaters)
 * @alpha number
 * @return rgba string
 */
const toRgba = (hex: string, alpha: number) => {
  const [red, green, blue] = hexToRgb(hex)
  //
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

/**
 * hexToRgb
 * @sourcen https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param hex (3 or 6 charcaters)
 * @returns [R, G, B]
 */
const hexToRgb = (hex: string): [string, string, string] => {
  if (hex.length !== 4 && hex.length !== 7) {
    throw new Error("Invalid hex value provided to hexToRgb function.");
  }
  // @ts-ignore
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

// const hexFromPercent = (percent: number): string => {
//   if (percent <= 1) {
//     percent = percent * 10
//   }
//   var decimalValue = Math.round(percent * 255 / 100);

//   if (percent < 7) {
//     return "0" + decimalValue.toString(16).toUpperCase();
//   }
//   return decimalValue.toString(16).toUpperCase();
// }
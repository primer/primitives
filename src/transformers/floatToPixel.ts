import type StyleDictionary from 'style-dictionary'
import {isNumber} from '../filters'
/**
 * takes a value and returns it if its a string or concats strings in an array quoting strings with spaces
 * @param value
 * @returns string
 */
export const convertFloatToPixel = (token: StyleDictionary.TransformedToken, unitless?: boolean) => {
  // short circut if value is not a number
  if (
    typeof token.value !== 'number' ||
    !token.$extensions?.['org.primer.data']?.fontSize ||
    typeof token.$extensions?.['org.primer.data']?.fontSize !== 'number'
  ) {
    return token.value
  }
  // convert value
  const convertedValue = token.$extensions?.['org.primer.data']?.fontSize * token.value
  // return converted value
  return unitless ? convertedValue : `${convertedValue}px`
}
/**
 * @description converts fontFamily tokens value to string
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `fontFamily`
 * @transformer returns a string
 */
export const floatToPixel: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isNumber,
  transformer: (token: StyleDictionary.TransformedToken, platform: StyleDictionary.Platform): string =>
    convertFloatToPixel(token, platform.options?.unitless ?? false),
}

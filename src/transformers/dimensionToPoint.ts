import type StyleDictionary from 'style-dictionary'
import type {Platform, TransformedToken} from 'style-dictionary'
import {isDimension} from '../filters'
import {getTokenValue} from './utilities/getTokenValue'

function getBasePxFontSize(options?: Platform) {
  return (options && options.basePxFontSize) || 16
}

const getIntValue = (dimension: string, token: TransformedToken, options?: Platform) => {
  if (dimension.slice(-3) === 'rem') {
    const remFloat = parseFloat(dimension.slice(0, -3))
    const baseFont = getBasePxFontSize(options)
    // check if valid number
    if (isNaN(remFloat)) throw new Error(`Invalid dimension provided: "${dimension}" in token: "${token.name}"`)
    // return
    return (remFloat * baseFont).toFixed(0)
  } else if (dimension.slice(-2) === 'px') {
    const int = parseInt(dimension.slice(0, -2))
    // check if valid number
    if (isNaN(int)) throw new Error(`Invalid dimension provided: "${dimension}" in token: "${token.name}"`)
    return int
  }
  throw new Error(`Invalid dimension provided: "${dimension}" in token: "${token.name}" from "${token.filePath}"`)
}

const isPxOrRem = (token: TransformedToken): boolean =>
  typeof token.value === 'string' && (token.value.slice(-3) === 'rem' || token.value.slice(-2) === 'px')

/**
 * @description converts dimenion tokens value form pixel or rem to point
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns an `integer`
 */
export const dimensionToPoint: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: token => isDimension(token) && isPxOrRem(token),
  transformer: (token: StyleDictionary.TransformedToken, options?: Platform) =>
    getIntValue(getTokenValue(token), token, options),
}

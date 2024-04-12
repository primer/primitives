import type StyleDictionary from 'style-dictionary'
import {isTypography} from '../filters'
import type {TypographyTokenValue} from '../types/TypographyTokenValue'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties'
import {parseFontFamily} from './fontFamilyToCss'
import {parseFontWeight} from './fontWeightToNumber'
import {getTokenValue} from './utilities/getTokenValue'

/**
 * @description converts typograhy token value to css font shorthand
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `typography`
 * @transformer returns a css font string
 */
export const typographyToCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isTypography,
  transformer: (token: StyleDictionary.TransformedToken) => {
    // extract value
    const value: TypographyTokenValue = getTokenValue(token)
    // validate token properties
    checkRequiredTokenProperties(value, ['fontWeight', 'fontSize', 'fontFamily'])
    // format output
    return `${value.fontStyle || ''} ${parseFontWeight(getTokenValue(token, 'fontWeight'))} ${value.fontSize}${
      value.lineHeight ? `/${value.lineHeight}` : ''
    } ${parseFontFamily(getTokenValue(token, 'fontFamily'))}`
      .trim()
      .replace(/\s\s+/g, ' ')
  },
}

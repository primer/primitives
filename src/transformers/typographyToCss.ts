import {isTypography} from '../filters/index.js'
import type {TypographyTokenValue} from '../types/TypographyTokenValue.js'
import {checkRequiredTokenProperties} from './utilities/checkRequiredTokenProperties.js'
import {parseFontFamily} from './fontFamilyToCss.js'
import {parseFontWeight} from './fontWeightToNumber.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'

/**
 * @description converts typograhy token value to css font shorthand
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `typography`
 * @transformer returns a css font string
 */
export const typographyToCss: Transform = {
  name: 'typography/css',
  type: `value`,
  transitive: true,
  filter: isTypography,
  transform: (token: TransformedToken) => {
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

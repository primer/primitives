import StyleDictionary from 'style-dictionary'
import { TokenTypography } from '../../@types/TokenTypography'

export const typopgraphyCssShorthand: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'typography',
  transformer: ({value}: {value: TokenTypography}) => {
    // font: font-style font-variant font-weight font-size/line-height font-family;
    return `${value.fontStyle || ''} ${value.fontWeight || ''} ${value.fontSize}${value.lineHeight ? '/'+value.lineHeight : ''} ${value.fontFamily}`.trim().replace(/\s\s+/g, ' ')
  }
}
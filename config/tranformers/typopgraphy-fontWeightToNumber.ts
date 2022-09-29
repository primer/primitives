
import StyleDictionary from 'style-dictionary'
import { tokenToString } from 'typescript'
import { TokenTypography } from '../../@types/TokenTypography'

const fontWeights: {[key: string]: number} = {
  thin: 100,
  hairline: 100,
  "extra-light": 200,
  "ultra-light": 200,
  extralight: 200,
  ultralight: 200,
  light: 300,
  normal: 400,
  regular: 400,
  book: 400,
  medium: 500,
  "semi-bold": 600,
  "demi-bold": 600,
  semibold: 600,
  demibold: 600,
  bold: 700,
  "extra-bold": 800,
  "ultra-bold": 800,
  extrabold: 800,
  ultrabold: 800,
  black: 900, 
  heavy: 900,
  "extra-black": 950,
  "ultra-black": 950,
  extrablack: 950,
  ultrablack: 950
}

export const typographyFontWeightToNumber: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'fontWeight' && typeof token.value === 'string',
  transformer: ({ value }: { value: string }) => fontWeights[value.toLowerCase()] ?? value
}
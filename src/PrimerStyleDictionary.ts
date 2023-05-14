import StyleDictionary from 'style-dictionary'
import {w3cJsonParser} from './parsers'
import {
  borderToCss,
  colorToHexAlpha,
  colorToRgbAlpha,
  colorToHex,
  fontFamilyToCss,
  fontWeightToNumber,
  jsonDeprecated,
  namePathToDotNotation,
  namePathToCamelCase,
  namePathToKebabCase,
  shadowToCss,
  typographyToCss,
  colorToHexMix,
  dimensionToRem,
} from './transformers'
import {
  scssMixinCssVariables,
  javascriptCommonJs,
  javascriptEsm,
  typescriptExportDefinition,
  jsonNestedPrefixed,
  cssThemed,
  cssCustomMedia,
  jsonOneDimensional,
  jsonPostCssFallback,
  cssWrapMediaQuery,
  cssVariables,
} from './formats'

/**
 * Parsers
 *
 */
StyleDictionary.registerParser(w3cJsonParser)

/**
 * Formats
 *
 */
StyleDictionary.registerFormat({
  name: 'css/themed',
  formatter: cssThemed,
})

StyleDictionary.registerFormat({
  name: 'css/customMedia',
  formatter: cssCustomMedia,
})

StyleDictionary.registerFormat({
  name: 'css/wrapMediaQuery',
  formatter: cssWrapMediaQuery,
})

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: cssVariables,
})

StyleDictionary.registerFormat({
  name: 'scss/mixin-css-variables',
  formatter: scssMixinCssVariables,
})

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  formatter: javascriptEsm,
})

StyleDictionary.registerFormat({
  name: 'javascript/commonJs',
  formatter: javascriptCommonJs,
})

StyleDictionary.registerFormat({
  name: 'typescript/export-definition',
  formatter: typescriptExportDefinition,
})

StyleDictionary.registerFormat({
  name: 'json/nested-prefixed',
  formatter: jsonNestedPrefixed,
})

StyleDictionary.registerFormat({
  name: 'json/one-dimensional',
  formatter: jsonOneDimensional,
})

StyleDictionary.registerFormat({
  name: 'json/postCss-fallback',
  formatter: jsonPostCssFallback,
})

/**
 * Transformers
 *
 */
StyleDictionary.registerTransform({
  name: 'color/rgbAlpha',
  ...colorToRgbAlpha,
})

StyleDictionary.registerTransform({
  name: 'color/hexAlpha',
  ...colorToHexAlpha,
})

StyleDictionary.registerTransform({
  name: 'color/hexMix',
  ...colorToHexMix,
})

StyleDictionary.registerTransform({
  name: 'color/hex',
  ...colorToHex,
})

StyleDictionary.registerTransform({
  name: 'dimension/rem',
  ...dimensionToRem,
})

StyleDictionary.registerTransform({
  name: 'json/deprecated',
  ...jsonDeprecated,
})

StyleDictionary.registerTransform({
  name: 'name/pathToDotNotation',
  ...namePathToDotNotation,
})

StyleDictionary.registerTransform({
  name: 'name/pathToCamelCase',
  ...namePathToCamelCase,
})

StyleDictionary.registerTransform({
  name: 'name/pathToKebabCase',
  ...namePathToKebabCase,
})

StyleDictionary.registerTransform({
  name: 'shadow/css',
  ...shadowToCss,
})

StyleDictionary.registerTransform({
  name: 'border/css',
  ...borderToCss,
})

StyleDictionary.registerTransform({
  name: 'typography/css',
  ...typographyToCss,
})

StyleDictionary.registerTransform({
  name: 'fontWeight/number',
  ...fontWeightToNumber,
})

StyleDictionary.registerTransform({
  name: 'fontFamily/css',
  ...fontFamilyToCss,
})

/**
 * @name {@link PrimerStyleDictionary}
 * @description Returns style dictionary object with primer preset that includes parsers, formats and transformers
 * @parsers [w3cJsonParser](https://github.com/primer/primitives/blob/main/config//parsers/w3c-json-parser.ts)
 * @formats [scss/mixin-css-variables](https://github.com/primer/primitives/blob/main/config/formats/scss-mixin-css-variables.ts), [javascript/esm](https://github.com/primer/primitives/blob/main/config/formats/javascript-esm.ts), [javascript/commonJs](https://github.com/primer/primitives/blob/main/config/formats/javascript-commonJs.ts), [typescript/export-definition](https://github.com/primer/primitives/blob/main/config/formats/typescript-export-defition.ts)
 * @transformers [color/rgbAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-rgb-alpha.ts), [color/hexAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex-alpha.ts), [color/hex](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex6.ts), [json/deprecated](https://github.com/primer/primitives/blob/main/config/tranformers/json-deprecated.ts), [name/pathToDotNotation](https://github.com/primer/primitives/blob/main/config/tranformers/name-path-to-dot-notation.ts)
 */
export const PrimerStyleDictionary: StyleDictionary.Core = StyleDictionary

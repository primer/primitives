import StyleDictionary from 'style-dictionary'
import {w3cJsonParser} from './parsers/index.js'
import {
  borderToCss,
  colorToHexAlpha,
  colorToRgbAlpha,
  colorToHex,
  colorToHexMix,
  colorToRgbaFloat,
  dimensionToRem,
  dimensionToPixelUnitless,
  durationToCss,
  figmaAttributes,
  fontFamilyToCss,
  fontFamilyToFigma,
  fontWeightToNumber,
  jsonDeprecated,
  namePathToDotNotation,
  namePathToCamelCase,
  namePathToPascalCase,
  namePathToKebabCase,
  namePathToSlashNotation,
  namePathToFigma,
  shadowToCss,
  typographyToCss,
  dimensionToRemPxArray,
  floatToPixel,
  floatToPixelUnitless,
} from './transformers/index.js'
import {
  javascriptCommonJs,
  javascriptEsm,
  typescriptExportDefinition,
  jsonNestedPrefixed,
  cssCustomMedia,
  jsonOneDimensional,
  jsonPostCssFallback,
  cssAdvanced,
  jsonFigma,
} from './formats/index.js'

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
  name: 'css/advanced',
  format: cssAdvanced,
})

StyleDictionary.registerFormat({
  name: 'css/customMedia',
  format: cssCustomMedia,
})

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  format: javascriptEsm,
})

StyleDictionary.registerFormat({
  name: 'javascript/commonJs',
  format: javascriptCommonJs,
})

StyleDictionary.registerFormat({
  name: 'typescript/export-definition',
  format: typescriptExportDefinition,
})

StyleDictionary.registerFormat({
  name: 'json/nested-prefixed',
  format: jsonNestedPrefixed,
})

StyleDictionary.registerFormat({
  name: 'json/one-dimensional',
  format: jsonOneDimensional,
})

StyleDictionary.registerFormat({
  name: 'json/postCss-fallback',
  format: jsonPostCssFallback,
})

StyleDictionary.registerFormat({
  name: 'json/figma',
  format: jsonFigma,
})

/**
 * Transformers
 *
 */
StyleDictionary.registerTransform({
  ...colorToRgbAlpha,
})

StyleDictionary.registerTransform({
  ...colorToRgbaFloat,
})

StyleDictionary.registerTransform({
  ...colorToHexAlpha,
})

StyleDictionary.registerTransform({
  ...colorToHexMix,
})

StyleDictionary.registerTransform({
  ...colorToHex,
})

StyleDictionary.registerTransform({
  ...floatToPixel,
})

StyleDictionary.registerTransform({
  ...floatToPixelUnitless,
})

StyleDictionary.registerTransform({
  ...dimensionToRem,
})

StyleDictionary.registerTransform({
  ...dimensionToRemPxArray,
})

StyleDictionary.registerTransform({
  ...dimensionToPixelUnitless,
})

StyleDictionary.registerTransform({
  ...durationToCss,
})

StyleDictionary.registerTransform({
  ...figmaAttributes,
})

StyleDictionary.registerTransform({
  ...jsonDeprecated,
})

StyleDictionary.registerTransform({
  ...namePathToCamelCase,
})
StyleDictionary.registerTransform({
  ...namePathToPascalCase,
})

StyleDictionary.registerTransform({
  ...namePathToDotNotation,
})

StyleDictionary.registerTransform({
  ...namePathToFigma,
})

StyleDictionary.registerTransform({
  ...namePathToCamelCase,
})

StyleDictionary.registerTransform({
  ...namePathToKebabCase,
})

StyleDictionary.registerTransform({
  ...namePathToSlashNotation,
})

StyleDictionary.registerTransform({
  ...shadowToCss,
})

StyleDictionary.registerTransform({
  ...borderToCss,
})

StyleDictionary.registerTransform({
  ...typographyToCss,
})

StyleDictionary.registerTransform({
  ...fontWeightToNumber,
})

StyleDictionary.registerTransform({
  ...fontFamilyToCss,
})

StyleDictionary.registerTransform({
  ...fontFamilyToFigma,
})

/**
 * @name {@link PrimerStyleDictionary}
 * @description Returns style dictionary object with primer preset that includes parsers, formats and transformers
 * @parsers [w3cJsonParser](https://github.com/primer/primitives/blob/main/config//parsers/w3c-json-parser.ts)
 * @formats [javascript/esm](https://github.com/primer/primitives/blob/main/config/formats/javascript-esm.ts), [javascript/commonJs](https://github.com/primer/primitives/blob/main/config/formats/javascript-commonJs.ts), [typescript/export-definition](https://github.com/primer/primitives/blob/main/config/formats/typescript-export-defition.ts)
 * @transformers [color/rgbAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-rgb-alpha.ts), [color/hexAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex-alpha.ts), [color/hex](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex6.ts), [json/deprecated](https://github.com/primer/primitives/blob/main/config/tranformers/json-deprecated.ts), [name/pathToDotNotation](https://github.com/primer/primitives/blob/main/config/tranformers/name-path-to-dot-notation.ts)
 */

export const PrimerStyleDictionary: StyleDictionary = new StyleDictionary()

import StyleDictionary from 'style-dictionary'
import {
  borderToCss,
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
 * @name {@link PrimerStyleDictionary}
 * @description Returns style dictionary object with primer preset that includes parsers, formats and transformers
 * @formats [javascript/esm](https://github.com/primer/primitives/blob/main/config/formats/javascript-esm.ts), [javascript/commonJs](https://github.com/primer/primitives/blob/main/config/formats/javascript-commonJs.ts), [typescript/export-definition](https://github.com/primer/primitives/blob/main/config/formats/typescript-export-defition.ts)
 * @transformers [color/rgbAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-rgb-alpha.ts), [color/hexAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex-alpha.ts), [color/hex](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex6.ts), [json/deprecated](https://github.com/primer/primitives/blob/main/config/tranformers/json-deprecated.ts), [name/pathToDotNotation](https://github.com/primer/primitives/blob/main/config/tranformers/name-path-to-dot-notation.ts)
 */
export const PrimerStyleDictionary: StyleDictionary = new StyleDictionary()

/**
 * Formats
 *
 */
PrimerStyleDictionary.registerFormat({
  name: 'css/advanced',
  format: cssAdvanced,
})

PrimerStyleDictionary.registerFormat({
  name: 'css/customMedia',
  format: cssCustomMedia,
})

PrimerStyleDictionary.registerFormat({
  name: 'javascript/esm',
  format: javascriptEsm,
})

PrimerStyleDictionary.registerFormat({
  name: 'javascript/commonJs',
  format: javascriptCommonJs,
})

PrimerStyleDictionary.registerFormat({
  name: 'typescript/export-definition',
  format: typescriptExportDefinition,
})

PrimerStyleDictionary.registerFormat({
  name: 'json/nested-prefixed',
  format: jsonNestedPrefixed,
})

PrimerStyleDictionary.registerFormat({
  name: 'json/one-dimensional',
  format: jsonOneDimensional,
})

PrimerStyleDictionary.registerFormat({
  name: 'json/postCss-fallback',
  format: jsonPostCssFallback,
})

PrimerStyleDictionary.registerFormat({
  name: 'json/figma',
  format: jsonFigma,
})

/**
 * Transformers
 *
 */
PrimerStyleDictionary.registerTransform({
  ...colorToRgbAlpha,
})

PrimerStyleDictionary.registerTransform({
  ...colorToRgbaFloat,
})

PrimerStyleDictionary.registerTransform({
  ...colorToHexMix,
})

PrimerStyleDictionary.registerTransform({
  ...colorToHex,
})

PrimerStyleDictionary.registerTransform({
  ...floatToPixel,
})

PrimerStyleDictionary.registerTransform({
  ...floatToPixelUnitless,
})

PrimerStyleDictionary.registerTransform({
  ...dimensionToRem,
})

PrimerStyleDictionary.registerTransform({
  ...dimensionToRemPxArray,
})

PrimerStyleDictionary.registerTransform({
  ...dimensionToPixelUnitless,
})

PrimerStyleDictionary.registerTransform({
  ...durationToCss,
})

PrimerStyleDictionary.registerTransform({
  ...figmaAttributes,
})

PrimerStyleDictionary.registerTransform({
  ...jsonDeprecated,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToCamelCase,
})
PrimerStyleDictionary.registerTransform({
  ...namePathToPascalCase,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToDotNotation,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToFigma,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToCamelCase,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToKebabCase,
})

PrimerStyleDictionary.registerTransform({
  ...namePathToSlashNotation,
})

PrimerStyleDictionary.registerTransform({
  ...shadowToCss,
})

PrimerStyleDictionary.registerTransform({
  ...borderToCss,
})

PrimerStyleDictionary.registerTransform({
  ...typographyToCss,
})

PrimerStyleDictionary.registerTransform({
  ...fontWeightToNumber,
})

PrimerStyleDictionary.registerTransform({
  ...fontFamilyToCss,
})

PrimerStyleDictionary.registerTransform({
  ...fontFamilyToFigma,
})

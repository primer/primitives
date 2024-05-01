import StyleDictionary from 'style-dictionary'
import {w3cJsonParser} from './parsers'
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
  namePathToKebabCase,
  namePathToSlashNotation,
  namePathToFigma,
  shadowToCss,
  typographyToCss,
  dimensionToRemPxArray,
  floatToPixel,
  floatToPixelUnitless,
} from './transformers'
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
  name: 'css/advanced',
  formatter: cssAdvanced,
})

StyleDictionary.registerFormat({
  name: 'css/customMedia',
  formatter: cssCustomMedia,
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

StyleDictionary.registerFormat({
  name: 'json/figma',
  formatter: jsonFigma,
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
  name: 'color/rgbaFloat',
  ...colorToRgbaFloat,
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
  name: 'float/pixel',
  ...floatToPixel,
})

StyleDictionary.registerTransform({
  name: 'float/pixelUnitless',
  ...floatToPixelUnitless,
})

StyleDictionary.registerTransform({
  name: 'dimension/rem',
  ...dimensionToRem,
})

StyleDictionary.registerTransform({
  name: 'dimension/remPxArray',
  ...dimensionToRemPxArray,
})

StyleDictionary.registerTransform({
  name: 'dimension/pixelUnitless',
  ...dimensionToPixelUnitless,
})

StyleDictionary.registerTransform({
  name: 'duration/css',
  ...durationToCss,
})

StyleDictionary.registerTransform({
  name: 'figma/attributes',
  ...figmaAttributes,
})

StyleDictionary.registerTransform({
  name: 'json/deprecated',
  ...jsonDeprecated,
})

StyleDictionary.registerTransform({
  name: 'name/pathToCamelCase',
  ...namePathToCamelCase,
})

StyleDictionary.registerTransform({
  name: 'name/pathToDotNotation',
  ...namePathToDotNotation,
})

StyleDictionary.registerTransform({
  name: 'name/pathToFigma',
  ...namePathToFigma,
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
  name: 'name/pathToSlashNotation',
  ...namePathToSlashNotation,
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

StyleDictionary.registerTransform({
  name: 'fontFamily/figma',
  ...fontFamilyToFigma,
})

/**
 * @name {@link PrimerStyleDictionary}
 * @description Returns style dictionary object with primer preset that includes parsers, formats and transformers
 * @parsers [w3cJsonParser](https://github.com/primer/primitives/blob/main/config//parsers/w3c-json-parser.ts)
 * @formats [javascript/esm](https://github.com/primer/primitives/blob/main/config/formats/javascript-esm.ts), [javascript/commonJs](https://github.com/primer/primitives/blob/main/config/formats/javascript-commonJs.ts), [typescript/export-definition](https://github.com/primer/primitives/blob/main/config/formats/typescript-export-defition.ts)
 * @transformers [color/rgbAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-rgb-alpha.ts), [color/hexAlpha](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex-alpha.ts), [color/hex](https://github.com/primer/primitives/blob/main/config/tranformers/color-to-hex6.ts), [json/deprecated](https://github.com/primer/primitives/blob/main/config/tranformers/json-deprecated.ts), [name/pathToDotNotation](https://github.com/primer/primitives/blob/main/config/tranformers/name-path-to-dot-notation.ts)
 */
export const PrimerStyleDictionary: StyleDictionary.Core = StyleDictionary

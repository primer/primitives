// @ts-nocheck
import StyleDictionary from 'style-dictionary';
import { copyFilesAndFolders } from './config/utilities/copyFilesAndFolders';
import { w3cJsonParser } from './config/parsers/w3c-json-parser'
import { platformCss } from './config/platforms/css';
import { platformDocJson } from './config/platforms/docJson';
import { platformScss } from './config/platforms/scss';
import { platformJs } from './config/platforms/javascript';
import { platformTs } from './config/platforms/typescript';
import { platformDeprecatedJson } from './config/platforms/deprecatedJson';
import { platformFigmaJson } from './config/platforms/figmaJson';
import { colorToHexAlpha } from './config/tranformers/color-to-hex-alpha';
import { colorToRgbAlpha } from "./config/tranformers/color-to-rgb-alpha";
import { colorToHex6 } from "./config/tranformers/color-to-hex6";
import { jsonDeprecated } from './config/tranformers/json-deprecated';
import { scssMixinCssVariables } from './config/formats/scss-mixin-css-variables';
import { scssMixinScssVariables } from './config/formats/scss-mixin-scss-variables';
import { javascriptCommonJs } from './config/formats/javascript-commonJs';
import { javascriptExport } from './config/formats/javascript-export';
import { typescriptExportDefinition } from './config/formats/typescript-export-defition';
import { jsonFigma } from './config/formats/json-figma';
import { getInputFiles } from './config/utilities/getInputFiles';
import { typopgraphyCssFontFamily } from './config/tranformers/typopgraphy-css-font-family';
import { typopgraphyCssShorthand } from './config/tranformers/typopgraphy-css-shorthand';
import { platformJson } from './config/platforms/json';
import { typographyFontWeightToNumber } from './config/tranformers/typopgraphy-fontWeightToNumber';
import { dimensionPixelToRem } from './config/tranformers/dimension-pixel-to-rem';

const buildPath = 'tokens-v2-private'
const inputPath = 'tokens'
const prefix = 'primer'

const themes = [
  ['light', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`]],
  ['light-colorblind', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind_extends-light.json`]],
  ['dark', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`]],
  ['dark-dimmed', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]]
]

const filesAndFoldersToCopy: [filesOrFolders: string[], source: string, destination: string][] = [
  [[`removed`], `tokens`, buildPath]
]

const getStyleDictionaryConfig = (outputName, source, include): StyleDictionary.Config => ({
  source: source, // build the special formats
  include: include,
  parsers: [w3cJsonParser],
  // formats need to be defined here but are used in platforms
  format: {
    'scss/mixin-css-variables': scssMixinCssVariables,
    'scss/mixin-scss-variables': scssMixinScssVariables,
    'javascript/export': javascriptExport,
    'javascript/commonJs': javascriptCommonJs,
    'typescript/export-definition': typescriptExportDefinition
  },
  // transforms need to be defined here but are used in platforms
  transform: {
    'color/rgbAlpha': colorToRgbAlpha,
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6,
    'css/fontFamily': typopgraphyCssFontFamily,
    'css/fontShorthand': typopgraphyCssShorthand,
    'fontWeight/toNumber': typographyFontWeightToNumber,
    'dimension/pixelToRem': dimensionPixelToRem
  },
  platforms: {
    css: platformCss(`${outputName}.css`, prefix, buildPath),
    // docJson: platformDocJson(`${outputName}.json`, prefix, buildPath),
    // scss: platformScss(`${outputName}.scss`, prefix, buildPath),
    // ts: platformTs(`${outputName}.ts`, undefined, buildPath),
    // js: platformJs(`${outputName}.js`, undefined, buildPath),
    // json: platformJson(`${outputName}.json`, undefined, buildPath),
  }
})

/**
 * Copy removed & deprecated files
 */
copyFilesAndFolders(filesAndFoldersToCopy)

/**
 * convert colors
 */
for (const [theme, source, include] of themes) {
  StyleDictionary
    .extend(getStyleDictionaryConfig(`color/${theme}`, source, include))
    .buildAllPlatforms()
}
/**
 * convert typography and size
 */
const ignoreDirs = ['color', 'removed', 'deprecated']
const baseDir = 'base'
const functionalDir = 'functional'

getInputFiles(inputPath, ignoreDirs, {baseDir, functionalDir}).then(inputFiles => {
  for (const {basename, dir, path} of inputFiles[functionalDir]) {
    StyleDictionary
      .extend(getStyleDictionaryConfig(`${dir}/${basename}`, [path], [`${inputPath}/${baseDir}/${dir}/*.json`, `${inputPath}/${functionalDir}/${dir}/*.json`]))
      .buildAllPlatforms()
  }
})
/**
 * build deprecated.json
 */
// get config
const deprecatedConfig = {
  source: [
    `${inputPath}/${functionalDir}/typography/*.json`, 
    `${inputPath}/${functionalDir}/size/*.json`, 
    `${inputPath}/${functionalDir}/color/primitives-light.json`
  ],
  include: [
    `${inputPath}/${baseDir}/typography/*.json`, 
    `${inputPath}/${baseDir}/size/*.json`, 
    `${inputPath}/${baseDir}/color/light.json`
  ],
  parsers: [w3cJsonParser],
  transform: {
    'json/deprecated': jsonDeprecated
  },
  platforms: { 
    deprecated: platformDeprecatedJson('deprecated.json', prefix, buildPath)
  }
}
//
StyleDictionary
  .extend(deprecatedConfig)
  .buildAllPlatforms()

/**
 * build figma.json
 */
// get config
const figmaConfig = (outputName, source, include, buildPath) => ({
  source,
  include,
  parsers: [w3cJsonParser],
  transform: {
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6,
  },
  format: {
    'json/figma': jsonFigma 
  },
  platforms: { 
    figma: platformFigmaJson(`${outputName}.json`, undefined, buildPath),
  }
})

const figmaBuilds = [
  ...themes,
  ['size', [`${inputPath}/${functionalDir}/size/*.json`], [`${inputPath}/${baseDir}/size/*.json`]],
  ['typography', [`${inputPath}/${functionalDir}/typography/*.json`], [`${inputPath}/${baseDir}/typography/*.json`]],
]
for (const [name, source, include] of figmaBuilds) {
  //
  StyleDictionary
  .extend(figmaConfig(name, source, include, buildPath))
  .buildAllPlatforms()
}
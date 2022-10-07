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
import { namePathToDotNotation } from './config/tranformers/name-path-to-dot-notation';
import { shadowCss } from './config/tranformers/shadow-css';

const buildPath = 'tokens-v2-private'
const inputPath = 'tokens'
const prefix = 'primer'

const functionalColorFiles = {
  light: [
    `tokens/functional/color/primitives-light.json`,
    `tokens/functional/color/components-light.json`,
    `tokens/functional/color/marketing-light.json`,
    `tokens/functional/color/misc-light.json`,
    `tokens/functional/color/syntax-light.json`,
    `tokens/functional/color/diff-light.json`,
    `tokens/functional/color/checks-light.json`,
    `tokens/functional/color/ansi-light.json`,
    `tokens/functional/color/scales.json`,
  ],
  dark: [
    `tokens/functional/color/primitives-dark.json`,
    `tokens/functional/color/components-dark.json`,
    `tokens/functional/color/marketing-dark.json`,
    `tokens/functional/color/misc-dark.json`,
    `tokens/functional/color/syntax-dark.json`,
    `tokens/functional/color/diff-dark.json`,
    `tokens/functional/color/checks-dark.json`,
    `tokens/functional/color/ansi-dark.json`,
    `tokens/functional/color/scales.json`,
  ]
}

const themes = [
  ['light', [...functionalColorFiles.light], [`tokens/base/color/light.json`]],
  ['light-tritanopia', [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-tritanopia.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-tritanopia.json`]],
  ['light-colorblind', [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-colorblind.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind.json`]],
  ['light-high-contrast', [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-high-contrast.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-high-contrast.json`]],
  ['dark', [...functionalColorFiles.dark], [`tokens/base/color/dark.json`]],
  ['dark-dimmed', [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-dimmed.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]],
  ['dark-tritanopia', [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-tritanopia.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-tritanopia.json`]],
  ['dark-colorblind', [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-colorblind.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-colorblind.json`]],
  ['dark-high-contrast', [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-high-contrast.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-high-contrast.json`]],
]

const getStyleDictionaryConfig = (outputName, source, include, options?: any = {}): StyleDictionary.Config => ({
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
    'css/fontFamily': typopgraphyCssFontFamily,// invert names to fontFamily/css
    'css/fontShorthand': typopgraphyCssShorthand, // invert
    'fontWeight/toNumber': typographyFontWeightToNumber,
    'dimension/pixelToRem': dimensionPixelToRem,
    'shadow/css': shadowCss
  },
  platforms: {
    css: platformCss(`${outputName}.css`, undefined, buildPath, options),
    scss: platformScss(`${outputName}.scss`, undefined, buildPath),
    js: platformJs(`${outputName}.js`, undefined, buildPath),
    ts: platformTs(`${outputName}.ts`, undefined, buildPath),
    json: platformJson(`${outputName}.json`, undefined, buildPath),
    docJson: platformDocJson(`${outputName}.json`, prefix, buildPath),
  }
})

/**
 * Copy `removed` files
 */
copyFilesAndFolders([`removed`], `tokens`, buildPath)

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
const ignoreDirs = ['color', 'shadow', 'removed', 'deprecated']
const baseDir = 'base'
const functionalDir = 'functional'

getInputFiles(inputPath, ignoreDirs, {baseDir, functionalDir}).then(inputFiles => {
  for (const {basename, dir, path} of inputFiles[functionalDir]) {
    StyleDictionary
      .extend(getStyleDictionaryConfig(`${dir}/${basename}`, [path], [`${inputPath}/${baseDir}/${dir}/*.json`, `${inputPath}/${functionalDir}/${dir}/*.json`]))
      .buildAllPlatforms()
  }
})
//  convert shadows
console.log("⚠️ Shadows are not implemented in tokens correctly")
StyleDictionary
.extend(getStyleDictionaryConfig(`shadow/shadow`, [`${inputPath}/${baseDir}/shadow/shadow.json`, `${inputPath}/${functionalDir}/shadow/shadow.json`], [`${inputPath}/${baseDir}/shadow/shadow.json`, `${inputPath}/${baseDir}/color/light.json`, `${inputPath}/${functionalDir}/color/primitives-light.json`], {outputReferences: true}))
.buildAllPlatforms()

/**
 * build deprecated.json
 */
 const deprecatedBuilds = [
   ['color', themes[0][1], themes[0][2]], // light mode
  ['size', [`${inputPath}/${functionalDir}/size/*.json`], [`${inputPath}/${baseDir}/size/*.json`]],
  ['typography', [`${inputPath}/${functionalDir}/typography/*.json`], [`${inputPath}/${baseDir}/typography/*.json`]],
]
// get config
const deprecatedConfig = (outputName, source, include, buildPath) => ({
  source,
  include,
  parsers: [w3cJsonParser],
  transform: {
    'json/deprecated': jsonDeprecated,
    'name/pathToDotNotation': namePathToDotNotation
  },
  platforms: { 
    deprecated: platformDeprecatedJson(`${outputName}.json`, prefix, buildPath)
  }
})
//
for (const [name, source, include] of deprecatedBuilds) {
  //
  StyleDictionary
  .extend(deprecatedConfig(name, source, include, buildPath))
  .buildAllPlatforms()
}

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
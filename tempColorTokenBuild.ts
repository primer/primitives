// @ts-nocheck
import StyleDictionary from 'style-dictionary';
import { copyFilesAndFolders } from './config/utilities/copyFilesAndFolders';
import { w3cJsonParser } from './config/parsers/w3c-json-parser'
import { platformCss } from './config/platforms/css';
import { platformDocJson } from './config/platforms/docJson';
import { platformScss } from './config/platforms/scss';
import { platformJs } from './config/platforms/javascript';
import { platformTs } from './config/platforms/typescript';
import { colorToHexAlpha } from './config/tranformers/color-to-hex-alpha';
import { colorToRgbAlpha } from "./config/tranformers/color-to-rgb-alpha";
import { colorToHex6 } from "./config/tranformers/color-to-hex6";
import { scssMixinCssVariables } from './config/formats/scss-mixin-css-variables';
import { scssMixinScssVariables } from './config/formats/scss-mixin-scss-variables';
import { javascriptCommonJs } from './config/formats/javascript-commonJs';
import { javascriptExport } from './config/formats/javascript-export';
import { typescriptExportDefinition } from './config/formats/typescript-export-defition';
import { isSource } from './config/filters/isSource';
import { isDimension } from './config/filters/isDimension';
import { isColor } from './config/filters/isColor';
import { getInputFiles } from './config/utilities/getInputFiles';
import { typopgraphyCssFontFamily } from './config/tranformers/typopgraphy-css-font-family';
import { typopgraphyCssShorthand } from './config/tranformers/typopgraphy-css-shorthand';

const buildPaths = 'tokens-v2-private'
const inputPath = 'tokens'
const prefix = 'primer'

const themes = [
  ['light', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`]],
  ['light-colorblind', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind_extends-light.json`]],
  ['dark', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`]],
  ['dark-dimmed', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]]
]

const filesAndFoldersToCopy: [filesOrFolders: string[], source: string, destination: string][] = [
  [[`deprecated`, `removed`], `tokens`, buildPaths]
]

const getStyleDictionaryConfig = (outputName, source, include): StyleDictionary.Config => ({
  source: source, // build the special formats
  include: include,
  parsers: [w3cJsonParser],
  filter: {
    'isSource': isSource,
    'isDimension': isDimension,
    'isColor': isColor
  },
  format: {
    'scss/mixin-css-variables': scssMixinCssVariables,
    'scss/mixin-scss-variables': scssMixinScssVariables,
    'javascript/export': javascriptExport,
    'javascript/commonJs': javascriptCommonJs,
    'typescript/export-definition': typescriptExportDefinition
  },
  // register custom transformers
  transform: {
    'color/rgbAlpha': colorToRgbAlpha,
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6,
    'css/fontFamily': typopgraphyCssFontFamily,
    'css/fontShorthand': typopgraphyCssShorthand 
  },
  transformGroup: {
    'primer/css': ['name/cti/kebab', 'color/hex', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand'],
    'primer/json': ['color/hex6', 'color/hexAlpha'],
    'primer/scss': ['name/cti/kebab', 'color/hex6', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand'],
    'primer/ts': ['name/cti/camel', 'color/hex6', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand'],
    'primer/js': ['name/cti/camel', 'color/hex6', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand'],

  },
  platforms: {
    css: platformCss(`${outputName}.css`, prefix, buildPaths),
    docJson: platformDocJson(`${outputName}.json`, prefix, buildPaths),
    scss: platformScss(`${outputName}.scss`, prefix, buildPaths),
    ts: platformTs(`${outputName}.ts`, undefined, buildPaths),
    js: platformJs(`${outputName}.js`, undefined, buildPaths),
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


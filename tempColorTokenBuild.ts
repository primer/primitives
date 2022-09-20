// @ts-nocheck
import StyleDictionary from 'style-dictionary';
import fse = require('fs-extra');
import { w3cJsonParser } from './config/parsers/w3c-json-parser'
import { platformCss } from './config/platforms/css';
import { platformDocJson } from './config/platforms/docJson';
import { platformScss } from './config/platforms/scss';
import { colorToHexAlpha } from './config/tranformers/color-to-hex-alpha';
import { colorToRgbAlpha } from "./config/tranformers/color-to-rgb-alpha";
import { colorToHex6 } from "./config/tranformers/color-to-hex6";
import { scssMixinCssVariables } from './config/formats/scss-mixin-css-variables';
import { scssMixinScssVariables } from './config/formats/scss-mixin-scss-variables';
import { platformTs } from './config/platforms/typescript';
import { javascriptExport } from './config/formats/javascript-export';
import { isSource } from './config/filters/isSource';
import { typescriptExportDefinition } from './config/formats/typescript-export-defition';

const BUILD_PATH = 'tempNewTokens'
const PREFIX = 'primer'
const themes = [
  ['light', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`]],
  ['light-colorblind', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind_extends-light.json`]],
  ['dark', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`]],
  ['dark-dimmed', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]]
]
const copyFilesAndFolders: [filesOrFolders: string[], source: string, destination: string][] = [
  [[`deprecated`, `removed`], `tokens`, `${BUILD_PATH}`]
]

const getStyleDictionaryConfig = (theme, source, include): StyleDictionary.Config => ({
  source: source, // build the special formats
  include: include,
  parsers: [w3cJsonParser],
  filter: {
    'isSource': isSource
  },
  format: {
    'scss/mixin-css-variables': scssMixinCssVariables,
    'scss/mixin-scss-variables': scssMixinScssVariables,
    'javascript/export': javascriptExport,
    'typescript/export-definition': typescriptExportDefinition
  },
  // register custom transformers
  transform: {
    'color/rgbAlpha': colorToRgbAlpha,
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6
  },
  transformGroup: {
    'primer/css': ['name/cti/kebab', 'color/hex', 'color/hexAlpha'],
    'primer/json': ['color/hex6', 'color/hexAlpha'],
    'primer/scss': ['name/cti/kebab', 'color/hex6', 'color/hexAlpha'],
    'primer/ts': ['color/hex6', 'color/hexAlpha'],
  },
  platforms: {
    css: platformCss(`${theme}.css`, PREFIX, BUILD_PATH),
    docJson: platformDocJson(`${theme}.json`, PREFIX, BUILD_PATH),
    scss: platformScss(`${theme}.scss`, PREFIX, BUILD_PATH),
    ts: platformTs(`${theme}.ts`, undefined, BUILD_PATH),
  }
})

/**
 * Copies file from copyFilesAndFolders array
 * this is used to copy deprecated and removed values
 */
Promise.all(copyFilesAndFolders.map(([filesAndFolders, source, dest]) => {
  return filesAndFolders.map(
    fileOrFolder => fse.copy(`${source}/${fileOrFolder}`, `${dest}/${fileOrFolder}`,
      err => {
        if (err) return console.error(err)
      }
    )
  )
}))


for (const [theme, source, include] of themes) {
  StyleDictionary
    .extend(getStyleDictionaryConfig(theme, source, include))
    .buildAllPlatforms()
}

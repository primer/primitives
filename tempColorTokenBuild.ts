import StyleDictionary from 'style-dictionary'
import {copyFilesAndFolders} from './config/utilities/copyFilesAndFolders'
import {w3cJsonParser} from './config/parsers/w3c-json-parser'
import {platformCss} from './config/platforms/css'
import {platformDocJson} from './config/platforms/docJson'
import {platformScss} from './config/platforms/scss'
import {platformJs} from './config/platforms/javascript'
import {platformTs} from './config/platforms/typescript'
import {platformTypeDefinitions} from './config/platforms/typesDefinitions'
import {platformDeprecatedJson} from './config/platforms/deprecatedJson'
import {colorToHexAlpha} from './config/tranformers/color-to-hex-alpha'
import {colorToRgbAlpha} from './config/tranformers/color-to-rgb-alpha'
import {colorToHex6} from './config/tranformers/color-to-hex6'
import {jsonDeprecated} from './config/tranformers/json-deprecated'
import {scssMixinCssVariables} from './config/formats/scss-mixin-css-variables'
import {javascriptCommonJs} from './config/formats/javascript-commonJs'
import {javascriptEsm} from './config/formats/javascript-esm'
import {typescriptExportDefinition} from './config/formats/typescript-export-defition'
import {platformJson} from './config/platforms/json'
import {namePathToDotNotation} from './config/tranformers/name-path-to-dot-notation'
import {StyleDictionaryConfigGenerator} from './@types/StyleDictionaryConfigGenerator'

const BUILD_PATH = 'tokens-v2-private'
const PREFIX = 'primer'

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
    `tokens/functional/color/scales.json`
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
    `tokens/functional/color/scales.json`
  ]
}

const themes: [string, string[], string[]][] = [
  ['light', [...functionalColorFiles.light], [`tokens/base/color/light.json`]],
  [
    'light-tritanopia',
    [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-tritanopia.json`],
    [`tokens/base/color/light.json`, `tokens/base/color/light-tritanopia.json`]
  ],
  [
    'light-colorblind',
    [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-colorblind.json`],
    [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind.json`]
  ],
  [
    'light-high-contrast',
    [...functionalColorFiles.light, `tokens/functional/color/exceptions-light-high-contrast.json`],
    [`tokens/base/color/light.json`, `tokens/base/color/light-high-contrast.json`]
  ],
  ['dark', [...functionalColorFiles.dark], [`tokens/base/color/dark.json`]],
  [
    'dark-dimmed',
    [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-dimmed.json`],
    [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]
  ],
  [
    'dark-tritanopia',
    [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-tritanopia.json`],
    [`tokens/base/color/dark.json`, `tokens/base/color/dark-tritanopia.json`]
  ],
  [
    'dark-colorblind',
    [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-colorblind.json`],
    [`tokens/base/color/dark.json`, `tokens/base/color/dark-colorblind.json`]
  ],
  [
    'dark-high-contrast',
    [...functionalColorFiles.dark, `tokens/functional/color/exceptions-dark-high-contrast.json`],
    [`tokens/base/color/dark.json`, `tokens/base/color/dark-high-contrast.json`]
  ]
]

const getStyleDictionaryConfig: StyleDictionaryConfigGenerator = (
  outputName,
  source,
  include,
  options = {}
): StyleDictionary.Config => ({
  source, // build the special formats
  include,
  parsers: [w3cJsonParser],
  // formats need to be defined here but are used in platforms
  format: {
    'scss/mixin-css-variables': scssMixinCssVariables,
    'javascript/esm': javascriptEsm,
    'javascript/commonJs': javascriptCommonJs,
    'typescript/export-definition': typescriptExportDefinition
  },
  // transforms need to be defined here but are used in platforms
  transform: {
    'color/rgbAlpha': colorToRgbAlpha,
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6
  },
  platforms: {
    css: platformCss(`${outputName}.css`, undefined, BUILD_PATH, options),
    scss: platformScss(`${outputName}.scss`, undefined, BUILD_PATH),
    js: platformJs(`${outputName}.js`, undefined, BUILD_PATH),
    ts: platformTs(`${outputName}.ts`, undefined, BUILD_PATH),
    json: platformJson(`${outputName}.json`, undefined, BUILD_PATH),
    docJson: platformDocJson(`${outputName}.json`, PREFIX, BUILD_PATH)
  }
})

/**
 * Copy `removed` files
 */
copyFilesAndFolders([`removed`], `tokens`, BUILD_PATH)

/**
 * convert colors
 */
for (const [theme, source, include] of themes) {
  StyleDictionary.extend(getStyleDictionaryConfig(`color/${theme}`, source, include)).buildAllPlatforms()
}
// TODO: Remove once shadows that used to be in colors are implemented
// eslint-disable-next-line no-console
console.log('⚠️ Shadows are not implemented in tokens correctly')
/**
 * build deprecated.json
 */
const deprecatedBuilds: [string, string[], string[]][] = [
  ['color', themes[0][1], themes[0][2]] // light mode
]
// get config
const deprecatedConfig: StyleDictionaryConfigGenerator = (outputName, source, include) => ({
  source,
  include,
  parsers: [w3cJsonParser],
  format: {
    'typescript/export-definition': typescriptExportDefinition
  },
  transform: {
    'color/hexAlpha': colorToHexAlpha,
    'color/hex6': colorToHex6,
    'json/deprecated': jsonDeprecated,
    'name/pathToDotNotation': namePathToDotNotation
  },
  platforms: {
    deprecated: platformDeprecatedJson(`${outputName}.json`, PREFIX, BUILD_PATH),
    types: platformTypeDefinitions(`${outputName}`, undefined, BUILD_PATH)
  }
})
//
for (const [name, source, include] of deprecatedBuilds) {
  //
  StyleDictionary.extend(deprecatedConfig(name, source, include)).buildAllPlatforms()
}

// @ts-nocheck
const StyleDictionary = require('style-dictionary')

import { w3cJsonParser } from './config/parsers/w3c-json-parser'
import { colorHexAlpha } from "./config/tranformers/color-hex-alpha";

const BUILD_PATH = 'tempNewTokens'
const PREFIX = 'primer'
const themes = [
  ['light', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`]],
  ['light-colorblind', [`tokens/functional/color/primitives-light.json`], [`tokens/base/color/light.json`, `tokens/base/color/light-colorblind_extends-light.json`]],
  ['dark', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`]],
  ['dark-dimmed', [`tokens/functional/color/primitives-dark.json`], [`tokens/base/color/dark.json`, `tokens/base/color/dark-dimmed.json`]]
]

const getStyleDictionaryConfig = (theme, source, include) => ({
  source: source, // build the special formats
  include: include,
  parsers: [w3cJsonParser],
  // register custom transformers
  transform: {
    'color/hexAlpha': colorHexAlpha
  },
  transformGroup: {
    // create custom transform group that includes default css transforms
    'primer/css':
      ['color/hexAlpha']
        // add default css transforms
        .concat(StyleDictionary.transformGroup.css)
  },
  platforms: {
    css: {
      prefix: PREFIX,
      buildPath: `${BUILD_PATH}/css/`,
      transformGroup: 'primer/css',
      files: [
        {
          destination: `${theme}.css`,
          format: `css/variables`,
          options: {
            outputReferences: true,
          }
        }
      ]
    }
  }
})

for (const [theme, source, include] of themes) {

  StyleDictionary
    .extend(getStyleDictionaryConfig(theme, source, include))
    .buildAllPlatforms()
}



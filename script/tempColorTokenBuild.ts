import type StyleDictionary from 'style-dictionary'
import {PrimerStyleDictionary} from '../config/primer-style-dictionary'
import {copyFilesAndFolders} from '../config/utilities/copyFilesAndFolders'
import {platformTypeDefinitions} from '../config/platforms/typesDefinitions'
import {platformDeprecatedJson} from '../config/platforms/deprecatedJson'
import {platformCss} from '../config/platforms/css'
import {platformDocJson} from '../config/platforms/docJson'
import {platformScss} from '../config/platforms/scss'
import {platformJs} from '../config/platforms/javascript'
import {platformTs} from '../config/platforms/typescript'
import {platformJson} from '../config/platforms/json'
import {ConfigGeneratorOptions, StyleDictionaryConfigGenerator} from '../types/StyleDictionaryConfigGenerator'
import {TokenBuildInputArray} from '../types/TokenBuildInputArray'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  const themes: TokenBuildInputArray = [
    {
      outputName: 'light',
      source: [`tokens/functional/color/light/*.json5`],
      include: [`tokens/base/color/light/light.json5`]
    },
    {
      outputName: 'light-tritanopia',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/exceptions/exceptions.tritanopia.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/extension.tritanopia.json5`]
    },
    {
      outputName: 'light-colorblind',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/exceptions/exceptions.protanopia-deuteranopia.json5`
      ],
      include: [
        `tokens/base/color/light/light.json5`,
        `tokens/base/color/light/extension.protanopia-deuteranopia.json5`
      ]
    },
    {
      outputName: 'light-high-contrast',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/exceptions/exceptions.high-contrast.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/extension.high-contrast.json5`]
    },
    {
      outputName: 'dark',
      source: [`tokens/functional/color/dark/*.json5`],
      include: [`tokens/base/color/dark/dark.json5`]
    },
    {
      outputName: 'dark-dimmed',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/exceptions/exceptions.dimmed.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/extension.dimmed.json5`]
    },
    {
      outputName: 'dark-tritanopia',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/exceptions/exceptions.tritanopia.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/extension.tritanopia.json5`]
    },
    {
      outputName: 'dark-colorblind',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/exceptions/exceptions.protanopia-deuteranopia.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/extension.protanopia-deuteranopia.json5`]
    },
    {
      outputName: 'dark-high-contrast',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/exceptions/exceptions.high-contrast.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/extension.high-contrast.json5`]
    }
  ]

  const getStyleDictionaryConfig: StyleDictionaryConfigGenerator = (
    outputName,
    source,
    include,
    options
  ): StyleDictionary.Config => ({
    source, // build the special formats
    include,
    platforms: {
      css: platformCss(`${outputName}.css`, options.prefix, options.buildPath),
      scss: platformScss(`${outputName}.scss`, options.prefix, options.buildPath),
      js: platformJs(`${outputName}.js`, options.prefix, options.buildPath),
      ts: platformTs(`${outputName}.ts`, options.prefix, options.buildPath),
      json: platformJson(`${outputName}.json`, options.prefix, options.buildPath),
      docJson: platformDocJson(`${outputName}.json`, options.prefix, options.buildPath)
    }
  })

  /**
   * Copy `removed` files
   */
  copyFilesAndFolders([`removed`], `tokens`, buildOptions.buildPath)

  /**
   * convert colors
   */
  for (const {outputName, source, include} of themes) {
    // build functional scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`functional/color/${outputName}`, source, include, buildOptions)
    ).buildAllPlatforms()
    // build base scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/color/${outputName}`, include, [], {
        buildPath: buildOptions.buildPath,
        prefix: undefined
      })
    ).buildAllPlatforms()
  }
  // TODO: Remove once shadows that used to be in colors are implemented
  // eslint-disable-next-line no-console
  console.log('⚠️ Shadows are not implemented in tokens correctly')

  /**
   * build deprecated.json
   */
  const deprecatedBuilds: TokenBuildInputArray = [
    {
      // light mode
      outputName: 'color',
      source: [...themes[0].source, ...themes[0].include],
      include: themes[0].include
    }
  ]
  //
  for (const {outputName, source, include} of deprecatedBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        deprecated: platformDeprecatedJson(`${outputName}.json`, buildOptions.prefix, buildOptions.buildPath)
      }
    }).buildAllPlatforms()
  }
  /**
   * build type definitions
   */
  // TODO: The tuple structure gets to complex this should be refactored to be easier to read
  const typeBuilds: TokenBuildInputArray = [
    {
      // light mode
      outputName: 'color',
      source: themes[0].source,
      include: themes[0].include
    }
  ]
  //
  for (const {outputName, source, include} of typeBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        types: platformTypeDefinitions(`${outputName}`, buildOptions.prefix, buildOptions.buildPath)
      }
    }).buildAllPlatforms()
  }

  // build types for base scale
  PrimerStyleDictionary.extend({
    include: themes[0].include,
    platforms: {
      types: platformTypeDefinitions(`baseColor`, undefined, buildOptions.buildPath)
    }
  }).buildAllPlatforms()
}

buildDesignTokens({
  buildPath: 'tokens-v2-private',
  prefix: 'product'
})

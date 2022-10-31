import type StyleDictionary from 'style-dictionary'
import {PrimerStyleDictionary} from '../config/PrimerStyleDictionary'
import {copyFilesAndFolders} from '../config/utilities/copyFilesAndFolders'
import {typeDefinitions, deprecatedJson, css, docJson, scss, javascript, typescript, json} from '../config/platforms'
import {ConfigGeneratorOptions, StyleDictionaryConfigGenerator} from '../types/StyleDictionaryConfigGenerator'
import {TokenBuildInput} from '../types/TokenBuildInput'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  const themes: TokenBuildInput[] = [
    {
      filename: 'light',
      source: [`tokens/functional/color/light/*.json5`, `tokens/functional/shadow/light.json5`],
      include: [`tokens/base/color/light/light.json5`]
    },
    {
      filename: 'light-tritanopia',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.tritanopia.json5`,
        `tokens/functional/shadow/light.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.tritanopia.json5`]
    },
    {
      filename: 'light-colorblind',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.protanopia-deuteranopia.json5`,
        `tokens/functional/shadow/light.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.protanopia-deuteranopia.json5`]
    },
    {
      filename: 'light-high-contrast',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.high-contrast.json5`,
        `tokens/functional/shadow/light.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.high-contrast.json5`]
    },
    {
      filename: 'dark',
      source: [`tokens/functional/color/dark/*.json5`, `tokens/functional/shadow/dark.json5`],
      include: [`tokens/base/color/dark/dark.json5`]
    },
    {
      filename: 'dark-dimmed',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.dimmed.json5`,
        `tokens/functional/shadow/dark.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.dimmed.json5`]
    },
    {
      filename: 'dark-tritanopia',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.tritanopia.json5`,
        `tokens/functional/shadow/dark.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.tritanopia.json5`]
    },
    {
      filename: 'dark-colorblind',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.protanopia-deuteranopia.json5`,
        `tokens/functional/shadow/dark.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.protanopia-deuteranopia.json5`]
    },
    {
      filename: 'dark-high-contrast',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.high-contrast.json5`,
        `tokens/functional/shadow/dark.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.high-contrast.json5`]
    }
  ]

  const getStyleDictionaryConfig: StyleDictionaryConfigGenerator = (
    filename,
    source,
    include,
    options
  ): StyleDictionary.Config => ({
    source, // build the special formats
    include,
    platforms: {
      css: css(`css/${filename}.css`, options.prefix, options.buildPath),
      scss: scss(`scss/${filename}.scss`, options.prefix, options.buildPath),
      js: javascript(`js/${filename}.js`, options.prefix, options.buildPath),
      ts: typescript(`ts/${filename}.ts`, options.prefix, options.buildPath),
      json: json(`json/${filename}.json`, options.prefix, options.buildPath),
      docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath)
    }
  })

  /**
   * Copy `removed` files
   */
  copyFilesAndFolders([`removed`], `tokens`, buildOptions.buildPath)

  /**
   * convert colors
   */
  for (const {filename, source, include} of themes) {
    // build functional scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`functional/themes/${filename}`, source, include, buildOptions)
    ).buildAllPlatforms()
    // build base scales
    PrimerStyleDictionary.extend(
      // using includes as source
      getStyleDictionaryConfig(`base/color/${filename}`, [`tokens/functional/color/scales.json5`], include, {
        buildPath: buildOptions.buildPath,
        prefix: 'base'
      })
    ).buildAllPlatforms()
  }

  /**
   * build deprecated.json
   */
  const deprecatedBuilds: TokenBuildInput[] = [
    {
      // light mode
      filename: 'theme',
      source: [...themes[0].source, ...themes[0].include],
      include: themes[0].include
    }
  ]
  //
  for (const {filename, source, include} of deprecatedBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        deprecated: deprecatedJson(`deprecated/${filename}.json`, buildOptions.prefix, buildOptions.buildPath)
      }
    }).buildAllPlatforms()
  }
  /**
   * build type definitions
   */
  // TODO: The tuple structure gets to complex this should be refactored to be easier to read
  const typeBuilds: TokenBuildInput[] = [
    {
      // light mode
      filename: 'theme',
      source: themes[0].source,
      include: themes[0].include
    }
  ]
  //
  for (const {filename, source, include} of typeBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        types: typeDefinitions(filename, buildOptions.prefix, `${buildOptions.buildPath}/ts/types/`)
      }
    }).buildAllPlatforms()
  }

  // build types for base scale
  PrimerStyleDictionary.extend({
    source: [`tokens/functional/color/scales.json5`],
    include: themes[0].include,
    platforms: {
      types: typeDefinitions(`baseColor`, undefined, `${buildOptions.buildPath}/ts/types/`)
    }
  }).buildAllPlatforms()
}

buildDesignTokens({
  buildPath: 'tokens-v2-private/',
  prefix: 'product'
})

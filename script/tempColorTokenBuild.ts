import type StyleDictionary from 'style-dictionary'
import {PrimerStyleDictionary} from '~/config/primer-style-dictionary'
import {copyFilesAndFolders} from '~/config/utilities/copyFilesAndFolders'
import {platformTypeDefinitions} from '~/config/platforms/typesDefinitions'
import {platformDeprecatedJson} from '~/config/platforms/deprecatedJson'
import {platformCss} from '~/config/platforms/css'
import {platformDocJson} from '~/config/platforms/docJson'
import {platformScss} from '~/config/platforms/scss'
import {platformJs} from '~/config/platforms/javascript'
import {platformTs} from '~/config/platforms/typescript'
import {platformJson} from '~/config/platforms/json'
import {ConfigGeneratorOptions, StyleDictionaryConfigGenerator} from '~/types/StyleDictionaryConfigGenerator'
import {TokenBuildInput} from '~/types/TokenBuildInput'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  const themes: TokenBuildInput[] = [
    {
      filename: 'light',
      source: [`tokens/functional/color/light/*.json5`],
      include: [`tokens/base/color/light/light.json5`]
    },
    {
      filename: 'light-tritanopia',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.tritanopia.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.tritanopia.json5`]
    },
    {
      filename: 'light-colorblind',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.protanopia-deuteranopia.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.protanopia-deuteranopia.json5`]
    },
    {
      filename: 'light-high-contrast',
      source: [
        `tokens/functional/color/light/*.json5`,
        `tokens/functional/color/light/overrides/light.high-contrast.json5`
      ],
      include: [`tokens/base/color/light/light.json5`, `tokens/base/color/light/light.high-contrast.json5`]
    },
    {
      filename: 'dark',
      source: [`tokens/functional/color/dark/*.json5`],
      include: [`tokens/base/color/dark/dark.json5`]
    },
    {
      filename: 'dark-dimmed',
      source: [`tokens/functional/color/dark/*.json5`, `tokens/functional/color/dark/overrides/dark.dimmed.json5`],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.dimmed.json5`]
    },
    {
      filename: 'dark-tritanopia',
      source: [`tokens/functional/color/dark/*.json5`, `tokens/functional/color/dark/overrides/dark.tritanopia.json5`],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.tritanopia.json5`]
    },
    {
      filename: 'dark-colorblind',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.protanopia-deuteranopia.json5`
      ],
      include: [`tokens/base/color/dark/dark.json5`, `tokens/base/color/dark/dark.protanopia-deuteranopia.json5`]
    },
    {
      filename: 'dark-high-contrast',
      source: [
        `tokens/functional/color/dark/*.json5`,
        `tokens/functional/color/dark/overrides/dark.high-contrast.json5`
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
      css: platformCss(`css/${filename}.css`, options.prefix, options.buildPath),
      scss: platformScss(`scss/${filename}.scss`, options.prefix, options.buildPath),
      js: platformJs(`js/${filename}.js`, options.prefix, options.buildPath),
      ts: platformTs(`ts/${filename}.ts`, options.prefix, options.buildPath),
      json: platformJson(`json/${filename}.json`, options.prefix, options.buildPath),
      docJson: platformDocJson(`docs/${filename}.json`, options.prefix, options.buildPath)
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
      getStyleDictionaryConfig(`functional/color/${filename}`, source, include, buildOptions)
    ).buildAllPlatforms()
    // build base scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/color/${filename}`, include, [], {
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
  const deprecatedBuilds: TokenBuildInput[] = [
    {
      // light mode
      filename: 'color',
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
        deprecated: platformDeprecatedJson(`deprecated/${filename}.json`, buildOptions.prefix, buildOptions.buildPath)
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
      filename: 'color',
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
        types: platformTypeDefinitions(filename, buildOptions.prefix, `${buildOptions.buildPath}/ts/types/`)
      }
    }).buildAllPlatforms()
  }

  // build types for base scale
  PrimerStyleDictionary.extend({
    source: themes[0].include,
    platforms: {
      types: platformTypeDefinitions(`baseColor`, undefined, `${buildOptions.buildPath}/ts/types/`)
    }
  }).buildAllPlatforms()
}

buildDesignTokens({
  buildPath: 'tokens-v2-private/',
  prefix: 'product'
})

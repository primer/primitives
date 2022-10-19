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
import {ConfigGeneratorOptions, StyleDictionaryConfigGenerator} from '../@types/StyleDictionaryConfigGenerator'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
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
  for (const [theme, source, include] of themes) {
    // build functional scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`functional/color/${theme}`, source, include, buildOptions)
    ).buildAllPlatforms()
    // build base scales
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/color/${theme}`, include, [], {
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
  const deprecatedBuilds: [string, string[], string[]][] = [
    ['color', [...themes[0][1], ...themes[0][2]], themes[0][2]] // light mode
    // TODO: missing type definition and deprecated for base colors
  ]
  //
  for (const [name, source, include] of deprecatedBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        deprecated: platformDeprecatedJson(`${name}.json`, buildOptions.prefix, buildOptions.buildPath)
      }
    }).buildAllPlatforms()
  }
  /**
   * build type definitions
   */
  // TODO: The tuple structure gets to complex this should be refactored to be easier to read
  const typeBuilds: [string, string[], string[], string?][] = [
    ['color', themes[0][1], themes[0][2], buildOptions.prefix], // light mode
    ['baseColor', [...themes[0][2]], []]
  ]
  //
  for (const [name, source, include, prefix] of typeBuilds) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        types: platformTypeDefinitions(`${name}`, prefix, buildOptions.buildPath)
      }
    }).buildAllPlatforms()
  }
}

buildDesignTokens({
  buildPath: 'tokens-v2-private',
  prefix: 'product'
})

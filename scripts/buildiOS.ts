import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
import {swift} from '~/src/platforms'
import glob from 'fast-glob'
import type {ConfigGeneratorOptions} from '~/src/types/StyleDictionaryConfigGenerator'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  const tokens = [
    {
      colormode: 'light',
      highContrast: false,
      source: [
        `src/tokens/functional/color/light/*.json5`,
        `src/tokens/functional/shadow/light.json5`,
        `src/tokens/functional/border/light.json5`,
      ],
      include: [`src/tokens/base/color/light/light.json5`],
    },
    {
      colormode: 'light',
      highContrast: true,
      source: [
        `src/tokens/functional/color/light/*.json5`,
        `src/tokens/functional/color/light/overrides/light.high-contrast.json5`,
        `src/tokens/functional/shadow/light.json5`,
        `src/tokens/functional/border/light.json5`,
      ],
      include: [`src/tokens/base/color/light/light.json5`, `src/tokens/base/color/light/light.high-contrast.json5`],
    },
    {
      colormode: 'dark',
      highContrast: false,
      source: [
        `src/tokens/functional/color/dark/*.json5`,
        `src/tokens/functional/shadow/dark.json5`,
        `src/tokens/functional/border/dark.json5`,
      ],
      include: [`src/tokens/base/color/dark/dark.json5`],
    },
    {
      colormode: 'dark',
      highContrast: true,
      source: [
        `src/tokens/functional/color/dark/*.json5`,
        `src/tokens/functional/color/dark/overrides/dark.high-contrast.json5`,
        `src/tokens/functional/shadow/dark.json5`,
        `src/tokens/functional/border/dark.json5`,
      ],
      include: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/dark.high-contrast.json5`],
    },
  ]

  for (const {colormode, highContrast, source, include} of tokens) {
    // build functional scales
    PrimerStyleDictionary.extend({
      source, // build the special formats
      include,
      platforms: {
        swift: swift(`swift/${colormode}.swift`, buildOptions.prefix, buildOptions.buildPath, {
          colormode,
          highContrast,
        }),
      },
    }).buildAllPlatforms()
    // build base scales
  }

  /** -----------------------------------
   * Size tokens
   * ----------------------------------- */
  // const sizeFiles = glob.sync('src/tokens/functional/size/*')
  //
  // for (const file of sizeFiles) {
  //   PrimerStyleDictionary.extend(
  //     getStyleDictionaryConfig(
  //       `functional/size/${file.replace('src/tokens/functional/size/', '').replace('.json', '')}`,
  //       [file],
  //       ['src/tokens/base/size/size.json', ...sizeFiles],
  //       buildOptions,
  //     ),
  //   ).buildAllPlatforms()
  // }

  PrimerStyleDictionary.extend({
    source: ['src/tokens/base/size/size.json'], // build the special formats
    platforms: {
      swift: swift(`swift/size/base.swift`, buildOptions.prefix, buildOptions.buildPath),
    },
  }).buildAllPlatforms()
  // close buildDesignTokens
}
/** -----------------------------------
 * Run build script
 * ----------------------------------- */
buildDesignTokens({
  buildPath: 'tokens-v3-private/',
})

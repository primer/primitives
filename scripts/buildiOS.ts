import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
import {swift} from '~/src/platforms'
import type {ConfigGeneratorOptions} from '~/src/types/StyleDictionaryConfigGenerator'

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  const themes = [
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

  for (const {colormode, highContrast, source, include} of themes) {
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
}

/** -----------------------------------
 * Run build script
 * ----------------------------------- */
buildDesignTokens({
  buildPath: 'tokens-v3-private/',
  prefix: 'ui',
})

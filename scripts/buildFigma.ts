import fs from 'fs'
import {PrimerStyleDictionary} from '../src/primerStyleDictionary.js'
import {themes} from './themes.config.js'
import {figma} from '../src/platforms/index.js'
import type {ConfigGeneratorOptions} from '../src/types/styleDictionaryConfigGenerator.js'
import {getFallbackTheme} from './utilities/getFallbackTheme.js'

const buildFigma = async (buildOptions: ConfigGeneratorOptions): Promise<void> => {
  /** -----------------------------------
   * Colors
   * ----------------------------------- */
  // base colors
  const baseScales = [
    {
      name: 'light',
      theme: 'light',
      source: [`src/tokens/base/color/light/light.json5`, `src/tokens/base/color/light/display-light.json5`],
    },
    {
      name: 'light-high-constrast',
      theme: 'light-high-constrast',
      source: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/base/color/light/light.high-contrast.json5`,
      ],
    },
    {
      name: 'dark',
      theme: 'dark',
      source: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/display-dark.json5`],
    },
    {
      theme: 'dark-high-constrast',
      name: 'dark-high-constrast',
      source: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/base/color/dark/dark.high-contrast.json5`,
      ],
    },
    {
      theme: 'dark-dimmed',
      name: 'dark-dimmed',
      source: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/base/color/dark/dark.dimmed.json5`,
      ],
    },
  ]

  for (const {name, source} of baseScales) {
    const extended = await PrimerStyleDictionary.extend({
      source,
      platforms: {
        figma: figma(`figma/scales/${name}.json`, buildOptions.prefix, buildOptions.buildPath),
      },
    })
    // build
    await extended.buildAllPlatforms()
  }
  //
  for (const {filename, source, include, theme} of themes) {
    // build functional scales
    const extended = await PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        figma: figma(`figma/themes/${filename}.json`, buildOptions.prefix, buildOptions.buildPath, {
          theme: [theme, getFallbackTheme(theme)],
        }),
      },
    })

    await extended.buildAllPlatforms()
  }
  /** -----------------------------------
   * Size tokens
   * ----------------------------------- */
  const sizeFiles = [
    'src/tokens/base/size/size.json5',
    'src/tokens/functional/size/breakpoints.json5',
    'src/tokens/functional/size/size.json5',
    'src/tokens/functional/size/border.json5',
  ]
  //
  const sizeExtended = await PrimerStyleDictionary.extend({
    source: sizeFiles,
    include: sizeFiles,
    platforms: {
      figma: figma(`figma/dimension/dimension.json`, buildOptions.prefix, buildOptions.buildPath),
    },
  })

  await sizeExtended.buildAllPlatforms()

  /** -----------------------------------
   * Typography
   * ----------------------------------- */
  //
  const typeExtended = await PrimerStyleDictionary.extend({
    source: ['src/tokens/base/typography/typography.json5', 'src/tokens/functional/typography/typography.json5'],
    include: [],
    platforms: {
      figma: figma(`figma/typography/typography.json`, buildOptions.prefix, buildOptions.buildPath),
    },
  })

  await typeExtended.buildAllPlatforms()

  /** -----------------------------------
   * Shadow tokens
   * ----------------------------------- */
  const shadowFiles = [
    {
      name: 'light',
      source: [`src/tokens/functional/shadow/light.json5`],
      include: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/functional/color/light/primitives-light.json5`,
        `src/tokens/functional/color/light/patterns-light.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'light',
    },
    {
      name: 'light-high-contrast',
      source: [`src/tokens/functional/shadow/light.json5`],
      include: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/light.high-contrast.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/functional/color/light/primitives-light.json5`,
        `src/tokens/functional/color/light/patterns-light.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'light-high-contrast',
    },
    {
      name: 'light-colorblind',
      source: [`src/tokens/functional/shadow/light.json5`],
      include: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/light.protanopia-deuteranopia.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/functional/color/light/primitives-light.json5`,
        `src/tokens/functional/color/light/patterns-light.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'light-protanopia-deuteranopia',
    },
    {
      name: 'light-tritanopia',
      source: [`src/tokens/functional/shadow/light.json5`],
      include: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/light.tritanopia.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/functional/color/light/primitives-light.json5`,
        `src/tokens/functional/color/light/patterns-light.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'light-tritanopia',
    },
    {
      name: 'dark',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/functional/color/dark/primitives-dark.json5`,
        `src/tokens/functional/color/dark/patterns-dark.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'dark',
    },
    {
      name: 'dark-high-contrast',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/dark.high-contrast.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/functional/color/dark/primitives-dark.json5`,
        `src/tokens/functional/color/dark/patterns-dark.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'dark-high-contrast',
    },
    {
      name: 'dark-dimmed',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/dark.dimmed.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/functional/color/dark/primitives-dark.json5`,
        `src/tokens/functional/color/dark/patterns-dark.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'dark-dimmed',
    },
    {
      name: 'dark-colorblind',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/dark.protanopia-deuteranopia.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/functional/color/dark/primitives-dark.json5`,
        `src/tokens/functional/color/dark/patterns-dark.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'dark-protanopia-deuteranopia',
    },
    {
      name: 'dark-tritanopia',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [
        `src/tokens/base/color/dark/dark.json5`,
        `src/tokens/base/color/dark/dark.tritanopia.json5`,
        `src/tokens/base/color/dark/display-dark.json5`,
        `src/tokens/functional/color/dark/primitives-dark.json5`,
        `src/tokens/functional/color/dark/patterns-dark.json5`,
        `src/tokens/functional/color/*.json5`,
        `src/tokens/component/*.json5`,
      ],
      theme: 'dark-tritanopia',
    },
  ]
  //
  for (const {name, source, include, theme} of shadowFiles) {
    const extended = await PrimerStyleDictionary.extend({
      source,
      include,
      log: {
        warnings: 'disabled', // 'warn' | 'error' | 'disabled'
        verbosity: 'verbose', // 'default' | 'silent' | 'verbose'
        errors: {
          brokenReferences: 'throw', // 'throw' | 'console'
        },
      },
      platforms: {
        figma: figma(`figma/shadows/${name}.json`, buildOptions.prefix, buildOptions.buildPath, {
          theme: [theme, getFallbackTheme(theme)],
        }),
      },
    })

    await extended.buildAllPlatforms()
  }
  /** -----------------------------------
   * Create list of files
   * ----------------------------------- */
  const dirNames = fs
    .readdirSync(`${buildOptions.buildPath}figma`, {withFileTypes: true})
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

  const files = dirNames.flatMap(dir => {
    const localFiles = fs.readdirSync(`${buildOptions.buildPath}figma/${dir}`)
    return localFiles.map(file => `${buildOptions.buildPath}figma/${dir}/${file}`)
  })

  const tokens: Array<{
    collection: string
    mode: string
    group: string
    name: string
  }> = files.flatMap(filePath => JSON.parse(fs.readFileSync(filePath, 'utf8')))

  // create a list of groups with collections and modes
  const collections: Record<
    string,
    {
      modes: string[]
      groups: string[]
    }
  > = {}

  for (const {collection, mode, group} of tokens) {
    if (!collection) {
      continue
    }
    if (!(collection in collections)) {
      collections[collection] = {
        modes: [],
        groups: [],
      }
    }
    if (!collections[collection].modes.includes(mode)) {
      collections[collection].modes.push(mode)
    }

    if (!collections[collection].groups.includes(group)) {
      collections[collection].groups.push(group)
    }
  }
  // define the order of the modes
  // we inverse it to deal with the -1 of the indexOf if item is not found in the array: basically anything that is not in the list should come last
  const modeOrder = [
    'light',
    'dark',
    'dark dimmed',
    'light high contrast',
    'dark high contrast',
    'light protanopia deuteranopia',
    'dark protanopia deuteranopia',
    'light tritanopia',
    'dark tritanopia',
  ].reverse()
  // sort modes in the order defined above
  for (const collection in collections) {
    collections[collection].modes.sort((a, b) => modeOrder.indexOf(b) - modeOrder.indexOf(a))
  }
  // write to file
  fs.writeFileSync(`${buildOptions.buildPath}figma/figma.json`, JSON.stringify({collections, files}, null, 2))
}

try {
  await buildFigma({
    buildPath: 'dist/',
  })
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('🛑 Error trying to build Figma output:', e)
}

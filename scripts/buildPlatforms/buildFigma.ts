import fs from 'fs'
import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
import {themes} from '../themes.config'
import {figma} from '~/src/platforms'
import type {ConfigGeneratorOptions} from '~/src/types/StyleDictionaryConfigGenerator'

export const buildFigma = (buildOptions: ConfigGeneratorOptions): void => {
  /** -----------------------------------
   * Colors
   * ----------------------------------- */
  // base colors
  const baseScales = [
    {
      name: 'light',
      source: [`src/tokens/base/color/light/light.json5`],
    },
    {
      name: 'light-high-constrast',
      source: [`src/tokens/base/color/light/light.json5`, `src/tokens/base/color/light/light.high-contrast.json5`],
    },
    {
      name: 'dark',
      source: [`src/tokens/base/color/dark/dark.json5`],
    },
    {
      name: 'dark-high-constrast',
      source: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/dark.high-contrast.json5`],
    },
    {
      name: 'dark-dimmed',
      source: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/dark.dimmed.json5`],
    },
  ]

  for (const {name, source} of baseScales) {
    PrimerStyleDictionary.extend({
      source,
      platforms: {
        figma: figma(`figma/scales/${name}.json`, buildOptions.prefix, buildOptions.buildPath),
      },
    }).buildAllPlatforms()
  }
  //
  for (const {filename, source, include} of themes) {
    // build functional scales
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        figma: figma(`figma/themes/${filename}.json`, buildOptions.prefix, buildOptions.buildPath, {
          mode: filename.replaceAll('-', ' '),
        }),
      },
    }).buildAllPlatforms()
  }
  /** -----------------------------------
   * Size tokens
   * ----------------------------------- */
  const sizeFiles = [
    'src/tokens/base/size/size.json',
    'src/tokens/functional/size/breakpoints.json',
    'src/tokens/functional/size/size.json',
    'src/tokens/functional/size/border.json',
    // 'src/tokens/functional/size/size-fine.json',
    // 'src/tokens/functional/size/size-coarse.json',
  ]
  //
  PrimerStyleDictionary.extend({
    source: sizeFiles,
    include: sizeFiles,
    platforms: {
      figma: figma(`figma/dimension/dimension.json`, buildOptions.prefix, buildOptions.buildPath),
    },
  }).buildAllPlatforms()

  /** -----------------------------------
   * Shadow tokens
   * ----------------------------------- */
  const shadowFiles = [
    {
      name: 'shadow-light',
      source: [`src/tokens/functional/shadow/light.json5`],
      include: [`src/tokens/base/color/light/light.json5`],
    },
    {
      name: 'shadow-dark',
      source: [`src/tokens/functional/shadow/dark.json5`],
      include: [`src/tokens/base/color/dark/dark.json5`],
    },
  ]
  //
  for (const {name, source, include} of shadowFiles) {
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        figma: figma(`figma/shadows/${name}.json`, buildOptions.prefix, buildOptions.buildPath),
      },
    }).buildAllPlatforms()
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

  const tokens: {
    collection: string
    mode: string
    group: string
    name: string
  }[] = files.flatMap(filePath => JSON.parse(fs.readFileSync(filePath, 'utf8')))
  // create a list of groups with collections and modes
  const collections: Record<
    string,
    {
      modes: string[]
      groups: string[]
    }
  > = {}

  for (const {collection, mode, group} of tokens) {
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
    'light colorblind',
    'dark colorblind',
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

buildFigma({
  buildPath: 'tokens-next-private/',
})

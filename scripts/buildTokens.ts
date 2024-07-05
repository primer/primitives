import type {Config} from 'style-dictionary/types'
import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary.js'
import {copyFromDir} from '../src/utilities/index.js'
import {deprecatedJson, css, docJson, fallbacks, styleLint} from '../src/platforms/index.js'
import type {
  ConfigGeneratorOptions,
  StyleDictionaryConfigGenerator,
} from '../src/types/StyleDictionaryConfigGenerator.js'
import type {TokenBuildInput} from '../src/types/TokenBuildInput.js'
import glob from 'fast-glob'
import {themes} from './themes.config.js'
import fs from 'fs'

/**
 * getStyleDictionaryConfig
 * @param filename output file name without extension
 * @param source array of source token json files
 * @param include array of included token json files (will not be present in output btu values are used when referenced)
 * @param options options object
 * @returns style dictionary config object
 */
const getStyleDictionaryConfig: StyleDictionaryConfigGenerator = (
  filename,
  source,
  include,
  options,
  platforms = {},
): Config => ({
  source, // build the special formats
  include,
  platforms: {
    css: css(`css/${filename}.css`, options.prefix, options.buildPath, {themed: options.themed}),
    docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath),
    styleLint: styleLint(`styleLint/${filename}.json`, options.prefix, options.buildPath),
    fallbacks: fallbacks(`fallbacks/${filename}.json`, options.prefix, options.buildPath),
    ...platforms,
  },
})

export const buildDesignTokens = (buildOptions: ConfigGeneratorOptions): void => {
  /** -----------------------------------
   * Internal Colors
   * ----------------------------------- */
  try {
    for (const {filename, source, include} of themes) {
      // build functional scales
      PrimerStyleDictionary.extend({
        source: [...source, ...include], // build the special formats
        include,
        platforms: {
          css: css(`internalCss/${filename}.css`, buildOptions.prefix, buildOptions.buildPath, {themed: true}),
        },
      }).buildAllPlatforms()
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build internal css colors for code output:', e)
  }

  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  try {
    for (const {filename, source, include} of themes) {
      // build functional scales
      PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/themes/${filename}`,
          source,
          include,
          {...buildOptions, themed: true},
          // disable fallbacks for themes
          {fallbacks: undefined},
        ),
      ).buildAllPlatforms()
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build Colors, shadows & borders for code output:', e)
  }

  /** -----------------------------------
   * Size tokens
   * ----------------------------------- */
  try {
    const sizeFiles = glob.sync('src/tokens/functional/size/*')
    //
    for (const file of sizeFiles) {
      PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/size/${file.replace('src/tokens/functional/size/', '').replace('.json', '')}`,
          [file],
          ['src/tokens/base/size/size.json', ...sizeFiles],
          buildOptions,
        ),
      ).buildAllPlatforms()
    }
    // build base scales
    PrimerStyleDictionary.extend(
      // using includes as source
      getStyleDictionaryConfig(`base/size/size`, ['src/tokens/base/size/size.json'], [], {
        buildPath: buildOptions.buildPath,
        prefix: undefined,
      }),
    ).buildAllPlatforms()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build size tokens for code output:', e)
  }
  /** -----------------------------------
   * Typography tokens
   * ----------------------------------- */
  try {
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(
        `functional/typography/typography`,
        [`src/tokens/functional/typography/*.json`],
        [`src/tokens/base/typography/*.json`],
        buildOptions,
        {
          css: css(`css/functional/typography/typography.css`, buildOptions.prefix, buildOptions.buildPath, {
            options: {
              outputReferences: true,
            },
          }),
        },
      ),
    ).buildAllPlatforms()

    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/typography/typography`, [`src/tokens/base/typography/*.json`], [], buildOptions),
    ).buildAllPlatforms()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build typography tokens for code output:', e)
  }

  /** -----------------------------------
   * Motion tokens
   * ----------------------------------- */
  try {
    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(
        `functional/motion/motion`,
        [`src/tokens/functional/motion/*.json5`],
        [`src/tokens/base/motion/*.json5`],
        buildOptions,
        {
          css: css(`css/functional/motion/motion.css`, buildOptions.prefix, buildOptions.buildPath, {
            options: {
              outputReferences: true,
            },
          }),
        },
      ),
    ).buildAllPlatforms()

    PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/motion/motion`, [`src/tokens/base/motion/*.json5`], [], buildOptions),
    ).buildAllPlatforms()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build motion tokens for code output:', e)
  }
  /** -----------------------------------
   * deprecated tokens
   * ----------------------------------- */
  const deprecatedBuilds: TokenBuildInput[] = [
    // color, shadow & borders
    {
      filename: 'theme',
      source: [
        `src/tokens/base/color/light/light.json5`,
        `src/tokens/base/color/light/display-light.json5`,
        `src/tokens/functional/color/light/*.json5`,
        `src/tokens/functional/shadow/light.json5`,
        `src/tokens/functional/border/light.json5`,
      ],
      include: [`src/tokens/base/color/light/light.json5`],
    },
    // typography
    {
      filename: 'typography',
      source: [`src/tokens/base/typography/*.json`, `src/tokens/functional/typography/*.json`],
      include: [`src/tokens/base/typography/*.json`],
    },
    // size
    {
      filename: 'size',
      source: [`src/tokens/base/size/*.json`, `src/tokens/functional/size/*.json`],
      include: [`src/tokens/base/size/*.json`],
    },
    // motion
    {
      filename: 'motion',
      source: [`src/tokens/base/motion/*.json5`, `src/tokens/functional/motion/*.json5`],
      include: [`src/tokens/base/motion/*.json5`],
    },
  ]
  //
  try {
    for (const {filename, source, include} of deprecatedBuilds) {
      PrimerStyleDictionary.extend({
        source,
        include,
        platforms: {
          deprecated: deprecatedJson(`deprecated/${filename}.json`, buildOptions.prefix, buildOptions.buildPath),
        },
      }).buildAllPlatforms()
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build deprecated tokens output:', e)
  }
  /** -----------------------------------
   * Copy `removed` files
   * ----------------------------------- */
  copyFromDir(`src/tokens/removed`, `${buildOptions.buildPath}removed`)

  const excludePaths = [
    (path: string) => {
      return path === 'dist/css/functional/size/viewport.css'
    },
    (path: string) => {
      return path.startsWith('dist/css/functional/themes/')
    },
  ]

  const all: string[] = []

  for (const cssFile of glob.sync('dist/css/{base,functional}/**/*.css')) {
    let skip = false

    for (const matcher of excludePaths) {
      if (matcher(cssFile)) {
        skip = true
        break
      }
    }

    if (skip) continue

    all.push(fs.readFileSync(cssFile, {encoding: 'utf8'}).trim())
  }

  fs.writeFileSync('dist/css/primitives.css', `${all.join('\n')}\n`)
}

/** -----------------------------------
 * Run build script
 * ----------------------------------- */
// build to dist
buildDesignTokens({
  buildPath: 'dist/',
})

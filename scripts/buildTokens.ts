import type {Config} from 'style-dictionary/types'
import {PrimerStyleDictionary} from '../src/primerStyleDictionary.js'
import {copyFromDir} from '../src/utilities/index.js'
import {deprecatedJson, css, docJson, fallbacks, styleLint} from '../src/platforms/index.js'
import type {
  ConfigGeneratorOptions,
  StyleDictionaryConfigGenerator,
} from '../src/types/styleDictionaryConfigGenerator.js'
import type {TokenBuildInput} from '../src/types/tokenBuildInput.js'
import glob from 'fast-glob'
import {themes} from './themes.config.js'
import fs from 'fs'
import {getFallbackTheme} from './utilities/getFallbackTheme.js'

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
  log: {
    warnings: 'disabled', // 'warn' | 'error' | 'disabled'
    verbosity: 'silent', // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: 'throw', // 'throw' | 'console'
    },
  },
  platforms: Object.fromEntries(
    Object.entries({
      css: css(`css/${filename}.css`, options.prefix, options.buildPath, {
        themed: options.themed,
        theme: options.theme,
      }),
      docJson: docJson(`docs/${filename}.json`, options.prefix, options.buildPath, {
        theme: options.theme,
      }),
      styleLint: styleLint(`styleLint/${filename}.json`, options.prefix, options.buildPath, {
        theme: options.theme,
      }),
      fallbacks: fallbacks(`fallbacks/${filename}.json`, options.prefix, options.buildPath),
      ...platforms,
    }).filter((entry: [string, unknown]) => entry[1] !== undefined),
  ),
})

export const buildDesignTokens = async (buildOptions: ConfigGeneratorOptions): Promise<void> => {
  /** -----------------------------------
   * Internal Colors
   * ----------------------------------- */
  try {
    for (const {filename, source, include, theme} of themes) {
      // build functional scales
      const extendedSD = await PrimerStyleDictionary.extend({
        source: [...source, ...include], // build the special formats
        include,
        platforms: {
          css: css(`internalCss/${filename}.css`, buildOptions.prefix, buildOptions.buildPath, {
            themed: true,
            theme: [theme, getFallbackTheme(theme)],
          }),
        },
      })
      await extendedSD.buildAllPlatforms()
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build internal css colors for code output:', e)
  }

  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  try {
    for (const {filename, source, include, theme} of themes) {
      // build functional scales
      const extendedSD = await PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/themes/${filename}`,
          source,
          include,
          {...buildOptions, themed: true, theme: [theme, getFallbackTheme(theme)]},
          // disable fallbacks for themes
          {fallbacks: undefined},
        ),
      )
      await extendedSD.buildAllPlatforms()
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
      const extendedSD = await PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/size/${file.replace('src/tokens/functional/size/', '').replace('.json5', '')}`,
          [file],
          ['src/tokens/base/size/size.json5', ...sizeFiles],
          buildOptions,
        ),
      )
      await extendedSD.buildAllPlatforms()
    }
    // build base scales
    const SdBaseSize = await PrimerStyleDictionary.extend(
      // using includes as source
      getStyleDictionaryConfig(`base/size/size`, ['src/tokens/base/size/size.json5'], [], {
        buildPath: buildOptions.buildPath,
        prefix: undefined,
      }),
    )
    await SdBaseSize.buildAllPlatforms()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build size tokens for code output:', e)
  }
  /** -----------------------------------
   * Typography tokens
   * ----------------------------------- */
  try {
    const extendedSD = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(
        `functional/typography/typography`,
        [`src/tokens/functional/typography/*.json5`],
        [`src/tokens/base/typography/*.json5`],
        buildOptions,
        {
          css: css(`css/functional/typography/typography.css`, buildOptions.prefix, buildOptions.buildPath, {
            options: {
              outputReferences: true,
            },
          }),
        },
      ),
    )
    await extendedSD.buildAllPlatforms()

    const SdTypo = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/typography/typography`, [`src/tokens/base/typography/*.json5`], [], buildOptions),
    )
    await SdTypo.buildAllPlatforms()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🛑 Error trying to build typography tokens for code output:', e)
  }

  /** -----------------------------------
   * Motion tokens
   * ----------------------------------- */
  try {
    const extendedSD = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(
        `functional/motion/motion`,
        [
          `src/tokens/functional/motion/*.json5`,
          // `src/tokens/base/motion/timing.json5`,
          // `src/tokens/base/motion/easing.json5`,
        ],
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
    )
    await extendedSD.buildAllPlatforms()

    const SdMotion = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/motion/motion`, [`src/tokens/base/motion/*.json5`], [], buildOptions),
    )
    await SdMotion.buildAllPlatforms()
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
        `src/tokens/functional/border/*.json5`,
      ],
      include: [`src/tokens/base/color/light/light.json5`, 'src/tokens/functional/size/border.json5'],
    },
    // typography
    {
      filename: 'typography',
      source: [`src/tokens/base/typography/*.json5`, `src/tokens/functional/typography/*.json5`],
      include: [`src/tokens/base/typography/*.json5`],
    },
    // size
    {
      filename: 'size',
      source: [`src/tokens/base/size/*.json5`, `src/tokens/functional/size/*.json5`],
      include: [`src/tokens/base/size/*.json5`],
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
      const extendedSD = await PrimerStyleDictionary.extend({
        source,
        include,
        platforms: {
          deprecated: deprecatedJson(`deprecated/${filename}.json`, buildOptions.prefix, buildOptions.buildPath),
        },
      })
      await extendedSD.buildAllPlatforms()
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
await buildDesignTokens({
  buildPath: 'dist/',
})

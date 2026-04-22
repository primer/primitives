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
import {CSS_SPEC_HEADER} from './buildLlm.js'
import {isDimension, isSource} from '../src/filters/index.js'

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
  let debugCurrentFile: string | undefined = undefined
  /** -----------------------------------
   * Internal Colors
   * ----------------------------------- */
  try {
    for (const {filename, source, include, theme} of themes) {
      debugCurrentFile = `internalCss/${filename}.css`
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
    console.error(
      '🛑 Error trying to build internal css colors for code output:',
      `${e} when building ${debugCurrentFile}`,
    )
  }

  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  try {
    for (const {filename, source, include, theme} of themes) {
      debugCurrentFile = `functional/themes/${filename}.css`

      // Override docJson and styleLint filters to exclude dimension tokens from theme output
      const themeDocJson = docJson(
        `docs/functional/themes/${filename}.json`,
        buildOptions.prefix,
        buildOptions.buildPath,
        {theme: [theme, getFallbackTheme(theme)]},
      )
      themeDocJson.files = themeDocJson.files.map(f => ({
        ...f,
        filter: (token: {$type: string; isSource: boolean}) =>
          isSource(token as Parameters<typeof isSource>[0]) && token.$type !== 'dimension',
      }))

      const themeStyleLint = styleLint(
        `styleLint/functional/themes/${filename}.json`,
        buildOptions.prefix,
        buildOptions.buildPath,
        {theme: [theme, getFallbackTheme(theme)]},
      )
      themeStyleLint.files = themeStyleLint.files.map(f => ({
        ...f,
        filter: (token: {$type: string; isSource: boolean}) =>
          isSource(token as Parameters<typeof isSource>[0]) && token.$type !== 'dimension',
      }))

      // build functional scales
      const extendedSD = await PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/themes/${filename}`,
          source,
          include,
          {...buildOptions, themed: true, theme: [theme, getFallbackTheme(theme)]},
          // disable fallbacks for themes, override docJson and styleLint with dimension filter
          {fallbacks: undefined, docJson: themeDocJson, styleLint: themeStyleLint},
        ),
      )
      await extendedSD.buildAllPlatforms()
    }
  } catch (e) {
    console.error(
      '🛑 Error trying to build Colors, shadows & borders for code output:',
      `${e} when building ${debugCurrentFile}`,
    )
  }

  /** -----------------------------------
   * Size tokens
   * ----------------------------------- */
  try {
    const sizeFiles = glob.sync('src/tokens/functional/size/*')
    //
    for (const file of sizeFiles) {
      const basename = file.replace('src/tokens/functional/size/', '').replace('.json5', '')
      debugCurrentFile = `functional/size/${basename}`

      // Border build: also include focus dimension tokens from component/focus.json5
      if (basename === 'border') {
        // Filter that only allows dimension + custom-string source tokens (excludes color/border from focus.json5)
        const dimensionOnlyFilter = (token: {$type: string; isSource: boolean}) =>
          isSource(token as Parameters<typeof isSource>[0]) &&
          (isDimension(token as Parameters<typeof isDimension>[0]) || token.$type === 'custom-string')

        // Override all platform filters to only emit dimension tokens
        const borderCss = css(`css/functional/size/${basename}.css`, buildOptions.prefix, buildOptions.buildPath)
        borderCss.files = [{...borderCss.files[1], filter: dimensionOnlyFilter}]

        const borderDocJson = docJson(
          `docs/functional/size/${basename}.json`,
          buildOptions.prefix,
          buildOptions.buildPath,
        )
        borderDocJson.files = borderDocJson.files.map(f => ({...f, filter: dimensionOnlyFilter}))

        const borderStyleLint = styleLint(
          `styleLint/functional/size/${basename}.json`,
          buildOptions.prefix,
          buildOptions.buildPath,
        )
        borderStyleLint.files = borderStyleLint.files.map(f => ({...f, filter: dimensionOnlyFilter}))

        const borderFallbacks = fallbacks(
          `fallbacks/functional/size/${basename}.json`,
          buildOptions.prefix,
          buildOptions.buildPath,
        )
        borderFallbacks.files = borderFallbacks.files.map(f => ({...f, filter: dimensionOnlyFilter}))

        const borderSD = await PrimerStyleDictionary.extend({
          source: [file, 'src/tokens/component/focus.json5'],
          include: [
            'src/tokens/base/size/*.json5',
            ...sizeFiles,
            'src/tokens/functional/color/borderColor.json5',
            'src/tokens/base/color/light/light.json5',
          ],
          log: {
            warnings: 'disabled',
            verbosity: 'silent',
            errors: {
              brokenReferences: 'throw',
            },
          },
          platforms: {
            css: borderCss,
            docJson: borderDocJson,
            styleLint: borderStyleLint,
            fallbacks: borderFallbacks,
          },
        })
        await borderSD.buildAllPlatforms()
        continue
      }

      const extendedSD = await PrimerStyleDictionary.extend(
        getStyleDictionaryConfig(
          `functional/size/${basename}`,
          [file],
          ['src/tokens/base/size/*.json5', ...sizeFiles],
          buildOptions,
        ),
      )
      await extendedSD.buildAllPlatforms()
    }
    // build base scales
    debugCurrentFile = `base/size/size.css`
    const SdBaseSize = await PrimerStyleDictionary.extend(
      // using includes as source
      getStyleDictionaryConfig(`base/size/size`, ['src/tokens/base/size/size.json5'], [], {
        buildPath: buildOptions.buildPath,
        prefix: undefined,
      }),
    )
    await SdBaseSize.buildAllPlatforms()

    debugCurrentFile = `base/size/z-index.css`
    const SdBaseZIndex = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/size/z-index`, ['src/tokens/base/size/z-index.json5'], [], {
        buildPath: buildOptions.buildPath,
        prefix: undefined,
      }),
    )
    await SdBaseZIndex.buildAllPlatforms()
  } catch (e) {
    console.error('🛑 Error trying to build size tokens for code output:', `${e} when building ${debugCurrentFile}`)
  }
  /** -----------------------------------
   * Typography tokens
   * ----------------------------------- */
  try {
    debugCurrentFile = `functional/typography/typography.css`
    const extendedSD = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(
        `functional/typography/typography`,
        [`src/tokens/functional/typography/*.json5`],
        [`src/tokens/base/typography/*.json5`],
        buildOptions,
        {
          css: css(`css/functional/typography/typography.css`, buildOptions.prefix, buildOptions.buildPath, {
            options: {outputReferences: true},
          }),
        },
      ),
    )
    await extendedSD.buildAllPlatforms()

    debugCurrentFile = `base/typography/typography.css`
    const SdTypo = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/typography/typography`, [`src/tokens/base/typography/*.json5`], [], buildOptions),
    )
    await SdTypo.buildAllPlatforms()
  } catch (e) {
    console.error(
      '🛑 Error trying to build typography tokens for code output:',
      `${e} when building ${debugCurrentFile}`,
    )
  }

  /** -----------------------------------
   * Motion tokens
   * ----------------------------------- */
  try {
    debugCurrentFile = `functional/motion/motion.css`
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
            options: {outputReferences: true},
          }),
        },
      ),
    )
    await extendedSD.buildAllPlatforms()

    debugCurrentFile = `base/motion/motion.css`
    const SdMotion = await PrimerStyleDictionary.extend(
      getStyleDictionaryConfig(`base/motion/motion`, [`src/tokens/base/motion/*.json5`], [], buildOptions),
    )
    await SdMotion.buildAllPlatforms()
  } catch (e) {
    console.error('🛑 Error trying to build motion tokens for code output:', `${e} when building ${debugCurrentFile}`)
  }
  /** -----------------------------------
   * deprecated tokens
   * ----------------------------------- */
  const deprecatedBuilds: TokenBuildInput[] = [
    // color, shadow & borders
    {
      filename: 'theme',
      source: themes.find(theme => theme.filename === 'light')?.source || [],
      include: themes.find(theme => theme.filename === 'light')?.include || [],
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
        log: {
          warnings: 'disabled', // 'warn' | 'error' | 'disabled'
          verbosity: 'silent', // 'default' | 'silent' | 'verbose'
          errors: {
            brokenReferences: 'throw', // 'throw' | 'console'
          },
        },
      })
      await extendedSD.buildAllPlatforms()
    }
  } catch (e) {
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
    all.push(`@import '${cssFile.replace(/dist\/css/g, '.')}';`)
  }

  // Write primitives.css with spec header
  fs.writeFileSync('dist/css/primitives.css', `${CSS_SPEC_HEADER}${all.join('\n')}\n`)

  /** -----------------------------------
   * Add spec header to theme CSS files
   * ----------------------------------- */
  for (const themeFile of glob.sync('dist/css/functional/themes/*.css')) {
    const content = fs.readFileSync(themeFile, 'utf-8')
    // Only add header if not already present
    if (!content.startsWith('/**')) {
      fs.writeFileSync(themeFile, `${CSS_SPEC_HEADER}${content}`)
    }
  }
}

/** -----------------------------------
 * Run build script
 * ----------------------------------- */
// build to dist
await buildDesignTokens({
  buildPath: 'dist/',
})

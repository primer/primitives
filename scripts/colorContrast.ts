import type {ContrastRequirement, ContrastRequirements, ThemeName} from './colorContrast.config.js'
import {contrastRequirements, bgColors} from './colorContrast.config.js'
import {writeFile} from 'fs'
import {readFile} from 'fs/promises'
import {normal} from 'color-blend'
import {getContrast, parseToRgba, rgba} from 'color2k'
import {makeConsoleTable, makeMarkdownTable} from './utilities/makeTable.js'
/**
 * Type definitions
 */
type contrastTestResult = {
  contrastPair: string
  pass: string
  contrastRatio: string
  minimumContrastRatio: string
}
/**
 * getOpaqueColor
 * @description calculates the rgb string without opacity from a color with opacity and the background it is placed on
 * @param color
 * @param background
 * @returns rgb string
 */
const getOpaqueColor = (color: string, background: string): string => {
  const [colorR, colorG, colorB, colorAlpha] = parseToRgba(color)
  // color is not transparent
  if (colorAlpha === 1) {
    return color
  }
  // parse BG
  const [bgR, bgG, bgB, bgAlpha] = parseToRgba(background)
  // return mixed color
  const mixed = normal({r: bgR, g: bgG, b: bgB, a: bgAlpha}, {r: colorR, g: colorG, b: colorB, a: colorAlpha})
  return rgba(mixed.r, mixed.g, mixed.b, mixed.a)
}
/**
 * runContrastTest
 * @description runs through all color pairs of a theme and checks the contrasts
 * @param colorPairs
 * @param colors
 * @returns contrastTestResult
 */

const runContrastTest = (colorPairs: ContrastRequirement[], tokens: Tokens): contrastTestResult[] => {
  return colorPairs.flatMap(([minimumContrast, colorA, colorB, options]: ContrastRequirement) => {
    // concat name
    const contrastPair = `${colorA} vs. ${colorB}`
    // build required string
    const minimumContrastRatio = `${minimumContrast}:1`
    // colorB is fully opaque
    if (!Object.prototype.hasOwnProperty.call(tokens, colorA)) throw new Error(`Color token not found ${colorA}`)
    if (!Object.prototype.hasOwnProperty.call(tokens, colorB)) throw new Error(`Color token not found ${colorB}`)

    if (parseToRgba(tokens[colorB].value)[3] === 1) {
      const testResults = testContrast(
        minimumContrast,
        tokens[colorA].value,
        tokens[colorB].value,
        undefined,
        contrastPair,
      )
      return {
        contrastPair:
          testResults.pass === '✅'
            ? `${contrastPair}`
            : `${colorA} (${tokens[colorA].value}) vs. ${colorB} (${tokens[colorB].value})`,
        ...testResults,
        minimumContrastRatio,
      }
    }
    // if colorB is semi-transparent
    // get the correct canvas colors to test again
    let canvasColorArrays = bgColors
    // overwrite background if custom canvas array is set
    if (options?.bg) canvasColorArrays = options.bg
    // test transparent colorB with default bgs `canvasColors`
    return canvasColorArrays.map(bg => {
      const testResults = testContrast(
        minimumContrast,
        tokens[colorA].value,
        tokens[colorB].value,
        tokens[bg].value,
        contrastPair,
      )
      return {
        contrastPair:
          testResults.pass === '✅'
            ? `${contrastPair} on ${bg}`
            : `${colorA} (${tokens[colorA].value}) vs. ${colorB} (${tokens[colorB].value}) on ${bg}`,
        ...testResults,
        minimumContrastRatio,
      }
    })
  })
}
/**
 * testContrast
 * @description test the contrast of two colors against each other
 * @param minimumContrast
 * @param colorA
 * @param colorB
 * @param bg used to calculate an opaque color if colorB is semi transparent
 * @param contrastPair use for better error messages
 * @returns
 */
const testContrast = (
  minimumContrast: number,
  colorA: string,
  colorB: string,
  bg = '#ffffff',
  contrastPair?: string,
): {pass: string; contrastRatio: string} => {
  // get contrast
  let contrast = 0
  try {
    colorB = getOpaqueColor(colorB, bg)
    colorA = getOpaqueColor(colorA, colorB)
    // get contrast rounded down with 2 decimals
    contrast = Math.floor(getContrast(colorA, colorB) * 100) / 100
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`${contrastPair || ''} as ${colorA} vs.${colorB}: ${err}`)
  }

  return {
    pass: contrast >= minimumContrast ? '✅' : '❌',
    contrastRatio: `${contrast}:1`,
  }
}

const checkContrastForThemes = async (themes: Theme[], contrastRequirementsObj: ContrastRequirements) => {
  const allResults = await Promise.all(
    themes.map(async ([themeName, tokens]) => {
      // run tests on all color pairs
      const results = runContrastTest(contrastRequirementsObj[themeName], tokens)
      // failing contrasts
      const failingContrast = results.reduce((acc, cur) => (cur.pass === '❌' ? acc + 1 : acc), 0)
      // return results for json file creation
      return {
        theme: themeName,
        failingContrast,
        resultTable: makeConsoleTable(results, ['contrastPair', 'pass', 'contrastRatio', 'minimumContrastRatio']),
        markdownTable: await makeMarkdownTable(results, [
          'contrastPair',
          'pass',
          'contrastRatio',
          'minimumContrastRatio',
        ]),
        failedMarkdownTable:
          failingContrast > 0 &&
          (await makeMarkdownTable(
            results.filter(item => item.pass === '❌'),
            ['contrastPair', 'pass', 'contrastRatio', 'minimumContrastRatio'],
          )),
        results,
      }
    }),
  )
  // return results
  return allResults
}

/**
 * run tests, output results to console and store them for json
 */

export const logResults = async (
  results: Awaited<ReturnType<typeof checkContrastForThemes>>,
  output: 'log' | 'file' | 'all' | 'none' = 'all',
) => {
  if (output === 'log' || output === 'all') {
    for (const {resultTable, failingContrast, theme} of results) {
      // eslint-disable-next-line no-console
      console.log('\n', `\x1B[32m\x1b[1mTheme: ${theme}\x1B[0m`, '\n', resultTable, '\n')
      if (failingContrast > 0) {
        // eslint-disable-next-line no-console
        console.error('❌ Failing contrast checks:', failingContrast, '\n')
      }
    }
  }
  // write json file for workflow
  if (output === 'file' || output === 'all') {
    writeFile('color-contrast-check.json', JSON.stringify(results), err => {
      if (err) throw err
    })
  }
}

/**
 * Get Colors from JSON files
 */

type Token = {
  value: string
  name: string
  description: string
  path: string[]
  filePath: string
  isSource: boolean
}
type Tokens = Record<string, Token>
type Theme = [ThemeName, Tokens]
// get colors
const getColorsFromFiles = async (filePaths: ThemeName[]): Promise<Theme[]> => {
  const files = filePaths.map(
    async themeName =>
      [
        themeName,
        await JSON.parse(
          await readFile(`./dist/docs/functional/themes/${themeName.replaceAll('_', '-')}.json`, 'utf8'),
        ),
      ] as Theme,
  )
  // return object with themes
  return await Promise.all(files)
}

/**
 * RUN CODE
 */
const runCheck = async () => {
  const themesNamesToCheck = [
    'light',
    'dark',
    'light_high_contrast',
    'dark_high_contrast',
    'light_colorblind',
    'dark_colorblind',
    'light_tritanopia',
    'dark_tritanopia',
  ] as ThemeName[]
  // get colors from doc json files
  const themes = await getColorsFromFiles(themesNamesToCheck)
  // check contrast for themes
  const results = await checkContrastForThemes(themes, contrastRequirements)
  // log results
  logResults(results, 'all')
}

runCheck()

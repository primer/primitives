import type {ContrastRequirement, Themes} from './color-contrast.config'
import {contrastRequirements, canvasColors} from './color-contrast.config'
import {Table} from 'console-table-printer'
import {flattenObject} from './utilities/flattenObject'
// eslint-disable-next-line import/no-unresolved
import colors from '../dist/ts'
import {writeFile} from 'fs'
import {normal} from 'color-blend'
import {getContrast, parseToRgba, rgba} from 'color2k'
import {rest} from '@actions/github'

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runContrastTest = (colorPairs: ContrastRequirement[], scopedColors: any): contrastTestResult[] => {
  return colorPairs.flatMap(([minimumContrast, colorA, colorB, options]: ContrastRequirement) => {
    // concat name
    const contrastPair = `${colorA} vs. ${colorB}`
    // build required string
    const minimumContrastRatio = `${minimumContrast}:1`
    // colorB is fully opaque
    if (parseToRgba(scopedColors[colorB])[3] === 1) {
      return {
        contrastPair,
        ...testContrast(minimumContrast, scopedColors[colorA], scopedColors[colorB], undefined, contrastPair),
        minimumContrastRatio,
      }
    }
    // if colorB is semi-transparent
    // get the correct canvas colors to test again
    let canvasColorArrays = canvasColors
    // overwrite background if custom canvas array is set
    if (options?.canvas) canvasColorArrays = options.canvas
    // test transparent colorB with default bgs `canvasColors`
    return canvasColorArrays.map(bg => ({
      contrastPair: `${contrastPair} on ${bg}`,
      ...testContrast(minimumContrast, scopedColors[colorA], scopedColors[colorB], scopedColors[bg], contrastPair),
      minimumContrastRatio,
    }))
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
/**
 * getConsoleTable
 * @description takes the test results per theme and creates a nicely formatted table of the results to the console
 * @param theme
 * @param results
 */
const getConsoleTable = (theme: string, results: contrastTestResult[]): string => {
  // config table
  const contrastTable = new Table({
    title: `Contrast checks for: ${theme}`,
    charLength: {'❌': 2, '✅': 2},
    colorMap: {
      grey: '\x1b[0;30m', // define customized color
    },
    columns: [
      {
        name: 'contrastPair',
        alignment: 'left',
        title: 'Color pair',
      },
      {
        name: 'pass',
        alignment: 'center',
        title: 'Pass',
      },
      {
        name: 'contrastRatio',
        alignment: 'left',
        title: 'Contrast ratio',
      },
      {
        name: 'minimumContrastRatio',
        alignment: 'left',
        title: 'Min. ratio',
      },
    ],
  })
  // add rows and color
  for (const [index, row] of results.entries()) {
    let color = 'white'
    // turn odd index rows grey (index starts at 0)
    if (index % 2 !== 0) {
      color = 'grey'
    }
    contrastTable.addRow(row, {
      color,
    })
  }
  return contrastTable.render()
}

const getThemesToCheck = (
  contrastRequirementsObj: {[key in Themes]: ContrastRequirement[]},
  themes?: Themes[],
): [Themes, ContrastRequirement[]][] => {
  if (themes && themes.length > 0) {
    return Object.entries(contrastRequirementsObj).filter(([theme]) => themes.includes(theme as Themes)) as [
      Themes,
      ContrastRequirement[],
    ][]
  }
  return Object.entries(contrastRequirementsObj) as [Themes, ContrastRequirement[]][]
}

const checkContrastForThemes = (
  contrastRequirementsObj: {[key in Themes]: ContrastRequirement[]},
  themes?: Themes[],
) => {
  const themesToCheck = getThemesToCheck(contrastRequirementsObj, themes)

  return themesToCheck.map(([theme, colorPairs]: [string, ContrastRequirement[]]) => {
    // turn deeply nested colors object into one level object like 'fg.default': '#000'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flattenColors = flattenObject((colors.colors as any)[theme])

    // run tests on all color pairs
    const scopedResults = runContrastTest(colorPairs, flattenColors)
    // failing contrasts
    const failingContrast = scopedResults.reduce((acc, cur) => (cur.pass === '❌' ? acc + 1 : acc), 0)
    // return results for json file creation
    return {
      theme,
      failingContrast,
      resultTable: getConsoleTable(theme, scopedResults),
      results: scopedResults,
    }
  })
}

/**
 * run tests, output results to console and store them for json
 */

export const check = (themes: Themes[], output: 'log' | 'file' | 'all' | 'none' = 'all') => {
  const results = checkContrastForThemes(contrastRequirements, themes)

  if (output === 'log' || output === 'all') {
    for (const {resultTable, failingContrast} of results) {
      // eslint-disable-next-line no-console
      console.log('\n', resultTable)
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

  return results
}

export const checkAndReport = async (themes: Themes[]) => {
  const results = checkContrastForThemes(contrastRequirements, themes)

  const failingChecks = []

  for (const {theme, resultTable, failingContrast} of results) {
    // eslint-disable-next-line no-console
    console.log('\n', resultTable)
    if (failingContrast > 0) {
      // eslint-disable-next-line no-console
      console.error('❌ Failing contrast checks:', failingContrast, '\n')
      failingChecks.push(`${theme}: ${failingContrast} failing color pairs`)
    }
  }

  if (failingChecks.length > 0) {
    const result = await rest.issues.listComments({
      // eslint-disable-next-line camelcase
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
    })

    const botComments = result.data.filter(c => c.user.login === 'github-actions[bot]')
    if (!botComments.length) {
      await rest.issues.createComment({
        // eslint-disable-next-line camelcase
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: failingChecks.join('\n'),
      })
    }
  }
}

import { ContrastRequirement, contrastRequirements, cavnasColors } from './color-contrast.config'
import { Table } from "console-table-printer"
import { flattenObject } from './utilities/flattenObject'
import colors from "../dist/ts"
import * as fs from 'fs';
import { normal } from 'color-blend'
import { getContrast, parseToRgba, rgba } from 'color2k'
/**
 * Type definitions
 */
type contrastTestResult = {
  contrastPair: string;
  pass: string;
  contrastRatio: string;
  minimumContrastRatio: string;
}
/**
 * getOpaqueColor
 * @description calculates the rgb string without opacity from a color with opacity and the background it is palced on
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
  const mixed = normal({ r: bgR, g: bgG, b: bgB, a: bgAlpha }, { r: colorR, g: colorG, b: colorB, a: colorAlpha })
  return rgba(mixed.r, mixed.g, mixed.b, mixed.a)
}
/**
 * runContrastTest
 * @description runs through all color pairs of a theme and checks the contrasts
 * @param colorPairs 
 * @param colors 
 * @returns contrastTestResult
 */
const runContrastTest = (colorPairs: ContrastRequirement[], colors: any): contrastTestResult[] =>
  // Object.fromEntries(
  colorPairs.flatMap(([minimumContrast, colorA, colorB, options]: ContrastRequirement) => {
    // concat name
    const contrastPair = `${colorA} vs. ${colorB}`
    // build required string
    const minimumContrastRatio = `${minimumContrast}:1`;
    // colorB is fully opaque
    if (parseToRgba(colors[colorB])[3] === 1) {
      return {
        contrastPair,
        ...testContrast(minimumContrast, colors[colorA], colors[colorB], undefined, contrastPair),
        minimumContrastRatio
      }
    }
    // if colorB is semi-transparent 
    // get the correct canvas colors to test agains
    let canvasColorArrays = cavnasColors
    // overwrite background if custom canvas array is set
    if (options?.canvas) canvasColorArrays = options.canvas
    // test transparent colorB with default bgs `cavnasColors`
    return canvasColorArrays.map(bg => ({
      contrastPair: `${contrastPair} on ${bg}`,
      ...testContrast(minimumContrast, colors[colorA], colors[colorB], colors[bg], contrastPair),
      minimumContrastRatio
    })
    )
  })
// )
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
const testContrast = (minimumContrast: number, colorA: string, colorB: string, bg: string = '#ffffff', contrastPair?: string): { pass: string, contrastRatio: string } => {
  // get contrast
  let contrast = 0
  try {
    colorB = getOpaqueColor(colorB, bg)
    colorA = getOpaqueColor(colorA, colorB)
    // get contrast rounded down with 2 decimals
    contrast = Math.floor(getContrast(colorA, colorB) * 100) / 100
  } catch (err) {
    console.error(`${contrastPair || ""} as ${colorA} vs.${colorB}: ${err}`)
  }
  return {
    pass: contrast >= minimumContrast ? '✅' : '❌',
    contrastRatio: `${contrast}: 1`
  }
}
/**
 * renderConsoleTable
 * @description takes the test results per theme and prints a nicely formatted table of the results to the console 
 * @param theme 
 * @param results 
 */
const renderConsoleTable = (theme: string, results: contrastTestResult[]): void => {
  // config table
  const contrastTable = new Table({
    title: `Contrast checks for: ${theme}`,
    charLength: { "❌": 2, "✅": 2 },
    colorMap: {
      grey: '\x1b[0;30m', // define customized color
    },
    columns: [
      {
        name: "contrastPair",
        alignment: "left",
        title: "Color pair",
      },
      {
        name: "pass",
        alignment: "center",
        title: "Pass",
      },
      {
        name: "contrastRatio",
        alignment: "left",
        title: "Contrast ratio"
      },
      {
        name: "minimumContrastRatio",
        alignment: "left",
        title: "Min. ratio"
      }]
  })
  // add rows and color
  for (const [index, row] of results.entries()) {
    let color = "white"
    // turn odd index rows grey (index starts at 0)
    if (index % 2 !== 0) {
      color = "grey"
    }
    contrastTable.addRow(row, {
      color: color
    })
  }
  // print table to console
  console.log(contrastTable.render())
}
/**
 * run tests, output results to console and store them for json
 */
const results = Object.entries(contrastRequirements)
  .map(([theme, colorPairs]: [theme: string, colorPairs: ContrastRequirement[]]) => {
    // turn deeply nested colors object into one level object like 'fg.default': '#000'
    // @ts-ignore
    const flattenColors = flattenObject(colors.colors[theme])
    // run tests on all color pairs
    const results = runContrastTest(colorPairs, flattenColors)
    // print results to console
    renderConsoleTable(theme, results)
    // return results for json file creation
    return {
      theme,
      results
    }
  })

// write json file for workflow
fs.writeFile('dist/color-contrast-check.json', JSON.stringify(results), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})


// @ts-ignore
import { contrastRequirements } from './color-contrast.config'
import { flattenObject } from './lib/flattenObject'
import colors from "../dist/ts"
import * as fs from 'fs';
import { normal } from 'color-blend'
import { getContrast, parseToRgba, rgba } from 'color2k'

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

const runContrastTest = (colorPairs: (number | string | Object)[][], colors: any) =>
  Object.fromEntries(
    colorPairs.flatMap(([required, colorA, colorB, options]: (number | string | Object)[]) => {
      // concat name
      const contrastPair = `${colorA} vs. ${colorB}`
      // build required string
      const requiredContrast = `${required}:1`;
      // @ts-ignore
      if (options?.bgs.length > 0) {
        // @ts-ignore
        return options.bgs.map(bg => [
          [`${contrastPair} on ${bg}`],
          {
            // @ts-ignore
            ...testContrast(required, colors[colorA], colors[colorB], colors[bg]),
            requiredContrast
          }
        ])
      }
      // 
      return [[
        [contrastPair], {
          // @ts-ignore
          ...testContrast(required, colors[colorA], colors[colorB]),
          requiredContrast
        }
      ]]
    })
  )

const testContrast = (required: number, colorA: string, colorB: string, bg: string = '#ffffff'): { pass: string, contrast: string } => {
  // get contrast
  let contrast = 0
  try {
    colorB = getOpaqueColor(colorB, bg)
    colorA = getOpaqueColor(colorA, colorB)
    // get contrast rounded down with 2 decimals
    contrast = Math.floor(getContrast(colorA, colorB) * 100) / 100
  } catch (err) {
    console.error(`${colorA} vs.${colorB}: ${err}`)
  }
  return {
    pass: contrast >= required ? '✅' : '❌',
    contrast: `${contrast}: 1`
  }
}
/**
 * run tests, output results to console and store them for json
 */
const results = Object.entries(contrastRequirements)
  .map(([theme, colorPairs]: [theme: string, colorPairs: (number | string | Object)[][]]) => {
    // turn deeply nested colors object into one level object like 'fg.default': '#000'
    // @ts-ignore
    const flattenColors = flattenObject(colors.colors[theme])
    // run tests on all color pairs
    const result = runContrastTest(colorPairs, flattenColors)
    // print results to console
    console.table(`Contrast checks for: ${theme} `)
    console.table(result)
    // return results for json file creation
    return {
      theme,
      result
    }
  })

// write json file for workflow
fs.writeFile('color-contrast-check.json', JSON.stringify(results), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})


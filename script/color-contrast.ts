// @ts-ignore
import getContrastRatio from 'get-contrast-ratio';
import { contrastRequirements } from './color-contrast.config'
import colors from "../dist/ts"
import * as fs from 'fs';

const flattenObject = (obj: any, prefix: string = "") =>
  // @ts-ignore
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    // @ts-ignore
    else acc[pre + k] = obj[k];
    return acc;
  }, {})

const runContrastTest = (colorPairs: (number | string)[][], colors: any) =>
  Object.fromEntries(
    colorPairs.map(([required, ...pair]: (number | string)[]) => {
      // concat name
      const contrastPair = pair.join(' vs. ')
      // @ts-ignore
      const [pass, contrast] = testContrast(required, colors[pair[0]], colors[pair[1]])
      // build required string
      const requiredContrast = `${required}:1`
      // 
      return [
        [contrastPair], {
          pass,
          contrast,
          requiredContrast
        }
      ]
    })
  )

const testContrast = (required: number, colorA: string, colorB: string): [pass: string, contrast: string] => {
  // get contrast
  const contrast = getContrastRatio(colorA, colorB)
  return [
    contrast >= required ? '✅' : '❌',
    `${contrast}:1`
  ]
}

// run tests, output results to console and store them for json
const results = Object.entries(contrastRequirements).map(([theme, colorPairs]: [theme: string, colorPairs: (number | string)[][]]) => {
  // @ts-ignore
  const flattenColors = flattenObject(colors.colors[theme])
  const result = runContrastTest(colorPairs, flattenColors)
  console.table(`Contrast checks for: ${theme}`)
  console.table(result)

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

// @ts-ignore
import getContrastRatio from 'get-contrast-ratio';
import colors from "../dist/ts"

const flattenObject = (obj: any, prefix: string = "") =>
  // @ts-ignore
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    // @ts-ignore
    else acc[pre + k] = obj[k];
    return acc;
  }, {})

// const runContrastTest = ([required, ...pair]: (number | string)[], colors: any) => {
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

const colorPairs = [
  [4.5, 'fg.default', 'canvas.default'],
  [4.5, 'fg.muted', 'canvas.default'],
  [4.5, 'fg.default', 'canvas.subtle'],
  [4.5, 'fg.muted', 'canvas.subtle']
]

const flattenColors = flattenObject(colors.colors.light)
console.table(runContrastTest(colorPairs, flattenColors))
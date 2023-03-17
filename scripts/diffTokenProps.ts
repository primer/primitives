import {parse as json5Parse} from 'json5'
import fs from 'fs'
import {flattenObject} from './utilities/flattenObject'

let mainTheme = {}
const diff = []
const propsToCheck = ['mix', 'alpha']

const isToken = (obj: Record<string, unknown>): boolean => obj.hasOwnProperty('$value')

for (const filePath of fs.readdirSync('./src/tokens/functional/color/light')) {
  if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
    continue
  }
  const file = fs.readFileSync(`./src/tokens/functional/color/light/${filePath}`, 'utf8')

  mainTheme = {...mainTheme, ...flattenObject(json5Parse(file), undefined, undefined, isToken)}
}

// console.log(mainTheme)

// console.log('---')

for (const filePath of fs.readdirSync('./src/tokens/functional/color/light/overrides')) {
  if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
    continue
  }
  const fileDiff = []
  const file = fs.readFileSync(`./src/tokens/functional/color/light/overrides/${filePath}`, 'utf8')
  const tokens = flattenObject(json5Parse(file), undefined, undefined, isToken)

  for (const [name, value] of Object.entries(tokens)) {
    if (!mainTheme.hasOwnProperty(name)) {
      throw new Error(`Token "${name}" doesn't exist in main theme`)
    }

    const missingProps = Object.keys((mainTheme as Record<string, Record<string, unknown>>)[name]).filter(
      prop => propsToCheck.includes(prop) && !value.hasOwnProperty(prop),
    )
    if (missingProps.length > 0) {
      // eslint-disable-next-line i18n-text/no-en
      fileDiff.push(`Token "${name}" is missing props: ${missingProps.join(', ')}`)
    }
  }
  if (fileDiff.length > 0) {
    // eslint-disable-next-line i18n-text/no-en
    diff.push(`Missing props in file "${filePath}": \n\n - ${fileDiff.join('\n - ')}`)
  }
}
// eslint-disable-next-line no-console
console.log(diff.join('\n'))

// fs.readdirSync('./src/tokens/functional/color/light/overrides').forEach(file => {
//   console.log(file)
// })

// console.log(Object.entries(flattenObject(json5Parse(file), undefined, undefined, isToken)))

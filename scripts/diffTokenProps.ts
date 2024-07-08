import JSON5 from 'json5'
import fs from 'fs'
import {flattenObject} from './utilities/flattenObject.js'

type DiffItem = {
  mainThemeName: string
  mainThemeDir: string
  mainFiles: string[]
  overridesDir: string
}

const isToken = (obj: Record<string, unknown>): boolean => Object.prototype.hasOwnProperty.call(obj, '$value')

const diffProps = (diffArray: DiffItem[], propsToCheck = ['mix', 'alpha']) => {
  const diff = []
  // iterate over each theme
  for (const {mainThemeName, mainThemeDir, mainFiles, overridesDir} of diffArray) {
    // build main theme
    let mainTheme = {}
    // add files from mainFiles
    for (const filePath of mainFiles) {
      const file = fs.readFileSync(filePath, 'utf8')
      mainTheme = {...mainTheme, ...flattenObject(JSON5.parse(file), undefined, undefined, isToken)}
    }
    // add files from mainThemeDir
    for (const filePath of fs.readdirSync(mainThemeDir)) {
      if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
        continue
      }
      const file = fs.readFileSync(`${mainThemeDir}/${filePath}`, 'utf8')

      mainTheme = {...mainTheme, ...flattenObject(JSON5.parse(file), undefined, undefined, isToken)}
    }

    for (const filePath of fs.readdirSync(overridesDir)) {
      if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
        continue
      }
      const fileDiff = []
      const file = fs.readFileSync(`${overridesDir}/${filePath}`, 'utf8')
      const tokens = flattenObject(JSON5.parse(file), undefined, undefined, isToken)

      for (const [name, value] of Object.entries(tokens)) {
        if (!Object.prototype.hasOwnProperty.call(mainTheme, name)) {
          throw new Error(`Token "${name}" doesn't exist in "${mainThemeName}" theme`)
        }

        const missingProps = Object.keys((mainTheme as Record<string, Record<string, unknown>>)[name]).filter(
          prop => propsToCheck.includes(prop) && !Object.prototype.hasOwnProperty.call(value, prop),
        )
        if (missingProps.length > 0) {
          fileDiff.push(`Token "${name}" is missing props: ${missingProps.join(', ')}`)
        }
      }
      if (fileDiff.length > 0) {
        diff.push(`Missing props in file "${filePath}": \n\n - ${fileDiff.join('\n - ')}`)
      }
    }
  }
  // return result
  return diff.join('\n\n')
}

const diff = diffProps([
  {
    mainThemeName: 'light',
    mainThemeDir: './src/tokens/functional/color/light',
    mainFiles: ['./src/tokens/functional/shadow/light.json5', './src/tokens/functional/border/light.json5'],
    overridesDir: './src/tokens/functional/color/light/overrides',
  },
  {
    mainThemeName: 'dark',
    mainThemeDir: './src/tokens/functional/color/dark',
    mainFiles: ['./src/tokens/functional/shadow/dark.json5', './src/tokens/functional/border/dark.json5'],
    overridesDir: './src/tokens/functional/color/dark/overrides',
  },
])

// eslint-disable-next-line no-console
console.log(diff)

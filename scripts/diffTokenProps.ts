import {parse as json5Parse} from 'json5'
import fs from 'fs'
import {flattenObject} from './utilities/flattenObject'

type DiffItem = {
  mainThemeName: string
  mainThemeDir: string
  overridesDir: string
}

const isToken = (obj: Record<string, unknown>): boolean => obj.hasOwnProperty('$value')

const diffProps = (diffArray: DiffItem[], propsToCheck = ['mix', 'alpha']) => {
  const diff = []

  for (const {mainThemeName, mainThemeDir, overridesDir} of diffArray) {
    let mainTheme = {}
    for (const filePath of fs.readdirSync(mainThemeDir)) {
      if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
        continue
      }
      const file = fs.readFileSync(`${mainThemeDir}/${filePath}`, 'utf8')

      mainTheme = {...mainTheme, ...flattenObject(json5Parse(file), undefined, undefined, isToken)}
    }

    for (const filePath of fs.readdirSync(overridesDir)) {
      if (!filePath.endsWith('.json5') && !filePath.endsWith('.json')) {
        continue
      }
      const fileDiff = []
      const file = fs.readFileSync(`${overridesDir}/${filePath}`, 'utf8')
      const tokens = flattenObject(json5Parse(file), undefined, undefined, isToken)

      for (const [name, value] of Object.entries(tokens)) {
        if (!mainTheme.hasOwnProperty(name)) {
          throw new Error(`Token "${name}" doesn't exist in "${mainThemeName}" theme`)
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
  }
  // return result
  return diff.join('\n\n')
}

const diff = diffProps([
  {
    mainThemeName: 'light',
    mainThemeDir: './src/tokens/functional/color/light',
    overridesDir: './src/tokens/functional/color/light/overrides',
  },
  {
    mainThemeName: 'dark',
    mainThemeDir: './src/tokens/functional/color/dark',
    overridesDir: './src/tokens/functional/color/dark/overrides',
  },
])

// eslint-disable-next-line no-console
console.log(diff)

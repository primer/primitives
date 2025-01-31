import {readFileSync, writeFileSync} from 'fs'
import {basename, extname} from 'path'
import JSON5 from 'json5'

interface Theme {
  [key: string]: any
}

function combineThemes(baseFilePath: string, overrideFilePath: string, outputFilePath: string): void {
  const baseFile = JSON5.parse(readFileSync(baseFilePath, 'utf8'))
  const overrideFile = JSON5.parse(readFileSync(overrideFilePath, 'utf8'))
  const overrideFileName = basename(overrideFilePath, extname(overrideFilePath)).replace(/\./g, '-')

  const combinedTheme = combine(baseFile, overrideFile, overrideFileName)

  writeFileSync(outputFilePath, JSON5.stringify(combinedTheme, null, 2))
}

function combine(base: Theme, override: Theme, overrideFileName: string): Theme {
  const result = {...base}

  for (const key in override) {
    if (override.hasOwnProperty(key) && result.hasOwnProperty(key)) {
      const overrideValue = override[key]

      if (overrideValue && typeof overrideValue === 'object' && overrideValue.$value) {
        if (!result[key].$extensions) {
          result[key].$extensions = {}
        }
        if (!result[key].$extensions['org.primer.overrides']) {
          result[key].$extensions['org.primer.overrides'] = {}
        }
        result[key].$extensions['org.primer.overrides'][overrideFileName] = {
          $value: overrideValue.$value,
          ...(overrideValue.alpha !== undefined && {alpha: overrideValue.alpha}),
        }
      } else if (typeof overrideValue === 'object' && !Array.isArray(overrideValue)) {
        result[key] = combine(result[key], overrideValue, overrideFileName)
      }
    }
  }

  return result
}

// Main function to handle CLI arguments
function main() {
  const args = process.argv.slice(2)
  if (args.length !== 3) {
    console.error('Usage: npx tsx combineThemes.ts <baseFilePath> <overrideFilePath> <outputFilePath>')
    process.exit(1)
  }

  const [baseFilePath, overrideFilePath, outputFilePath] = args
  combineThemes(baseFilePath, overrideFilePath, outputFilePath)
}

main()

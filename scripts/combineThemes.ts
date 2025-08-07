import {readFileSync, writeFileSync} from 'fs'
import {basename, extname} from 'path'
import JSON5 from 'json5'

interface Theme {
  [key: string]: unknown
}

function combineThemes(
  baseFilePath: string,
  overrideFilePath: string,
  outputFilePath: string,
  themeName?: string,
): void {
  const baseFile = JSON5.parse(readFileSync(baseFilePath, 'utf8'))
  const overrideFile = JSON5.parse(readFileSync(overrideFilePath, 'utf8'))
  const overrideFileName = basename(overrideFilePath, extname(overrideFilePath)).replace(/\./g, '-')

  const combinedTheme = combine(baseFile, overrideFile, themeName || overrideFileName)

  writeFileSync(outputFilePath, JSON5.stringify(combinedTheme, null, 2))
}

function combine(base: Theme, override: Theme, overrideFileName: string): Theme {
  const result = {...base}

  for (const key in override) {
    if (Object.prototype.hasOwnProperty.call(override, key) && Object.prototype.hasOwnProperty.call(result, key)) {
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
  if (args.length < 3 || args.length > 4) {
    // eslint-disable-next-line no-console
    console.error('Usage: npx tsx combineThemes.ts <baseFilePath> <overrideFilePath> <outputFilePath> <themeName?>')
    process.exit(1)
  }

  const [baseFilePath, overrideFilePath, outputFilePath, themeName] = args
  combineThemes(baseFilePath, overrideFilePath, outputFilePath, themeName || undefined)
}

main()

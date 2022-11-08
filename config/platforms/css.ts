import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

const getCssSelector = (outputFile: string): string => {
  let mode = 'light'
  let modeInverse = 'dark'
  // check for dark in the beginning of the output filename
  const lastSlash = outputFile.lastIndexOf('/')
  if (outputFile.substring(lastSlash + 1, lastSlash + 5) === 'dark') {
    mode = 'dark'
    modeInverse = 'light'
  }

  return `:root, [data-color-mode="${mode}"][data-light-theme*="${mode}"], [data-color-mode="${modeInverse}"][data-dark-theme*="${mode}"]`
}

export const css: PlatformInitializer = (outputFile, prefix, buildPath, _options): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/kebab', 'color/hex', 'color/hexAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      destination: `${outputFile}`,
      format: `css/variables`,
      filter: isSource,
      options: {
        outputReferences: false,
        selector: getCssSelector(outputFile)
      }
    }
  ]
})

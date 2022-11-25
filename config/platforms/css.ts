import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

const getCssSelectors = (outputFile: string): {selector: string; selectorLight: string; selectorDark: string} => {
  // check for dark in the beginning of the output filename
  const lastSlash = outputFile.lastIndexOf('/')
  const outputBasename = outputFile.substring(lastSlash + 1, outputFile.indexOf('.'))
  const themeName = outputBasename.replace(/-/g, '_')
  const mode = outputBasename.substring(0, 4) === 'dark' ? 'dark' : 'light'

  return {
    selector: `[data-color-mode="${mode}"][data-${mode}-theme="${themeName}"]`,
    selectorLight: `[data-color-mode="auto"][data-light-theme="${themeName}"]`,
    selectorDark: `[data-color-mode="auto"][data-dark-theme="${themeName}"]`
  }
}

export const css: PlatformInitializer = (outputFile, prefix, buildPath, _options): StyleDictionary.Platform => {
  const {selector, selectorLight, selectorDark} = getCssSelectors(outputFile)
  return {
    prefix,
    buildPath,
    transforms: ['name/pathToKebabCase', 'color/hex', 'color/hexAlpha', 'shadow/css', 'border/css'],
    options: {
      basePxFontSize: 16
    },
    files: [
      {
        destination: `${outputFile}`,
        format: `css/themed`,
        filter: isSource,
        options: {
          outputReferences: false,
          selector,
          selectorLight,
          selectorDark
        }
      }
    ]
  }
}

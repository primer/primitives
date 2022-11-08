import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

const getCssSelector = (outputFile: string): string => {
  const theme = outputFile.split('/').pop()?.replace('.css', '')
  let mode = 'light'
  let modeInverse = 'dark'
  // check for dark in the beginning of the output filename
  const lastSlash = outputFile.lastIndexOf('/')
  if (outputFile.substring(lastSlash + 1, lastSlash + 5) === 'dark') {
    mode = 'dark'
    modeInverse = 'light'
  }

  return `${
    theme === 'light' ? ':root, ' : ''
  }[data-color-mode="${mode}"][data-light-theme="${theme}"], [data-color-mode="${modeInverse}"][data-dark-theme="${theme}"]`
}

// Optional: :root,
// [data-dark-theme="dark"] {
//   @content;
// }
// @media (prefers-color-scheme: light) {
//   [data-color-mode="auto"][data-light-theme="dark"] {
//     @content;
//   }
// }
// @media (prefers-color-scheme: dark) {
//   [data-color-mode="auto"][data-dark-theme="dark"] {
//     @content;
//   }
// }

// modes
// auto
// light
// dark

// themes
// dark_colorblind
// dark_dimmed
// dark_high_contrast
// dark_tritanopia
// light_colorblind
// light_high_contrast
// light_tritanopia

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

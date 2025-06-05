import {isFromFile, isSource} from '../filters/index.js'
import type {PlatformInitializer} from '../types/platformInitializer.js'
import type {PlatformConfig, TransformedToken} from 'style-dictionary/types'
import {outputReferencesTransformed, outputReferencesFilter} from 'style-dictionary/utils'

const getCssSelectors = (outputFile: string) => {
  // check for dark in the beginning of the output filename
  const lastSlash = outputFile.lastIndexOf('/')
  const outputBasename = outputFile.substring(lastSlash + 1, outputFile.indexOf('.'))
  const themeName = outputBasename.replace(/-/g, '_')
  const mode = outputBasename.substring(0, 4) === 'dark' ? 'dark' : 'light'

  return [
    {
      selector: `[data-color-mode="${mode}"][data-${mode}-theme="${themeName}"], [data-color-mode="${mode}"][data-${mode}-theme="${themeName}"] ::backdrop, [data-color-mode="auto"][data-light-theme="${themeName}"], [data-color-mode="auto"][data-light-theme="${themeName}"] ::backdrop`,
    },
    {
      query: '@media (prefers-color-scheme: dark)',
      selector: `[data-color-mode][data-color-mode="auto"][data-dark-theme="${themeName}"], [data-color-mode][data-color-mode="auto"][data-dark-theme="${themeName}"] ::backdrop`,
    },
  ]
}

export const css: PlatformInitializer = (outputFile, prefix, buildPath, options): PlatformConfig => {
  return {
    prefix,
    buildPath,
    preprocessors: ['themeOverrides'],
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      'cubicBezier/css',
      'dimension/rem',
      'duration/css',
      'shadow/css',
      'border/css',
      'typography/css',
      'transition/css',
      'fontFamily/css',
      'fontWeight/number',
      'gradient/css',
    ],
    options: {
      basePxFontSize: 16,
      themeOverrides: {
        theme: options?.theme,
      },
    },
    files: [
      {
        destination: `${outputFile}`,
        format: `css/advanced`,
        filter: token =>
          isSource(token) &&
          options?.themed === true &&
          token.$type !== 'custom-viewportRange' &&
          !isFromFile(token, [
            'src/tokens/functional/size/size-coarse.json5',
            'src/tokens/functional/size/size-fine.json5',
          ]),
        options: {
          showFileHeader: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
          descriptions: false,
          queries: getCssSelectors(outputFile),
          ...options?.options,
        },
      },
      {
        destination: `${outputFile}`,
        format: `css/advanced`,
        filter: token =>
          isSource(token) &&
          options?.themed !== true &&
          token.$type !== 'custom-viewportRange' &&
          !isFromFile(token, [
            'src/tokens/functional/size/size-coarse.json5',
            'src/tokens/functional/size/size-fine.json5',
          ]),
        options: {
          showFileHeader: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
          descriptions: false,
          ...options?.options,
        },
      },
      {
        destination: `${outputFile}`,
        format: `css/customMedia`,
        filter: token => isSource(token) && options?.themed !== true && token.$type === 'custom-viewportRange',
        options: {
          showFileHeader: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
        },
      },
      {
        destination: `${outputFile}`,
        format: `css/advanced`,
        filter: token =>
          isSource(token) &&
          isFromFile(token, [
            'src/tokens/functional/size/size-coarse.json5',
            'src/tokens/functional/size/size-fine.json5',
          ]),
        options: {
          descriptions: false,
          outputReferences: (token, platformOptions) =>
            outputReferencesFilter(token, platformOptions) && outputReferencesTransformed(token, platformOptions),
          showFileHeader: false,
          queries: [
            {
              query: '@media (pointer: fine)',
              matcher: (token: TransformedToken) => token.filePath.includes('size-fine'),
            },
            {
              query: '@media (pointer: coarse)',
              matcher: (token: TransformedToken) => token.filePath.includes('size-coarse'),
            },
          ],
        },
      },
    ],
  }
}

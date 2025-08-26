import type {PlatformInitializer} from '../types/platformInitializer.js'
import {isSource} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const styleLint: PlatformInitializer = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  preprocessors: ['themeOverrides'],
  transforms: [
    'name/pathToKebabCase',
    'color/hex',
    'dimension/pixel',
    'shadow/css',
    'border/css',
    'typography/css',
    'fontFamily/css',
    'fontWeight/number',
  ],
  options: {
    basePxFontSize: 16,
    themeOverrides: {
      theme: options?.theme,
    },
  },
  files: [
    {
      destination: outputFile,
      format: `json/one-dimensional`,
      filter: isSource,
      options: {
        outputReferences: false,
        outputVerbose: true,
      },
    },
  ],
})

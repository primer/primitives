import type {PlatformInitializer} from '../types/platformInitializer.js'
import {isSource} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const json: PlatformInitializer = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  preprocessors: ['themeOverrides'],
  transforms: [
    'color/hex',
    'color/hexMix',
    'dimension/rem',
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
      filter: isSource,
      format: `json/nested-prefixed`,
      options: {
        outputReferences: false,
      },
    },
  ],
})

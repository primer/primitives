import type {PlatformInitializer} from '../types/platformInitializer.js'
import {isSource} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const styleLint: PlatformInitializer = (outputFile, prefix, buildPath): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: [
    'name/pathToKebabCase',
    'color/hex',
    'color/hexMix',
    'dimension/remPxArray',
    'shadow/css',
    'border/css',
    'typography/css',
    'fontFamily/css',
    'fontWeight/number',
  ],
  options: {
    basePxFontSize: 16,
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

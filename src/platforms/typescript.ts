import type {PlatformInitializer} from '../types/platformInitializer.js'
import type {PlatformConfig} from 'style-dictionary/types'
import {isSource} from '../filters/index.js'

export const typescript: PlatformInitializer = (outputFile, prefix, buildPath): PlatformConfig => ({
  prefix,
  buildPath,
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
    showFileHeader: false,
    basePxFontSize: 16,
  },
  files: [
    {
      format: 'javascript/esm',
      destination: outputFile,
      filter: isSource,
    },
  ],
})

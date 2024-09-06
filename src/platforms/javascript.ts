import type {PlatformInitializer} from '../types/PlatformInitializer.js'
import type {PlatformConfig} from 'style-dictionary/types'
import {isSource} from '../filters/index.js'

export const javascript: PlatformInitializer = (outputFile, prefix, buildPath): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: [
    'color/hex',
    'color/hexMix',
    'color/hexAlpha',
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
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource,
    },
  ],
})

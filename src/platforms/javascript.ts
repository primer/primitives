import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '../types/PlatformInitializer.js'
import {isSource} from '../filters/index.js'

export const javascript: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
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
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource,
    },
  ],
})

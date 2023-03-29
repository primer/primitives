import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isSource} from '~/src/filters'

export const typescript: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
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

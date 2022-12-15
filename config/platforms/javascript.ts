import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isSource} from '~/config/filters'

export const javascript: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: [
    'color/hex',
    'color/rgbAlpha',
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
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource,
    },
  ],
})

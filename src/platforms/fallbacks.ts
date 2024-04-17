import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '../types/PlatformInitializer'
import {isSource} from '../filters'

export const fallbacks: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: [
    'name/pathToKebabCase',
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
      destination: outputFile,
      format: `json/postCss-fallback`,
      filter: isSource,
      options: {
        outputReferences: false,
        outputVerbose: true,
      },
    },
  ],
})

import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

export const json: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['color/hex', 'color/hexAlpha', 'shadow/css', 'border/css'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      destination: outputFile,
      filter: isSource,
      format: `json/nested-prefixed`,
      options: {
        outputReferences: false
      }
    }
  ]
})

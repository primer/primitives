import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

export const typescript: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['color/hex', 'color/hexAlpha', 'shadow/css', 'border/css'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/esm',
      destination: outputFile,
      filter: isSource
    }
  ]
})

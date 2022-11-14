import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

export const javascript: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/camel', 'color/hex', 'color/rgbAlpha', 'shadow/css'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource
    }
  ]
})

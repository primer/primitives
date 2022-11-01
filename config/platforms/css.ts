import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

export const css: PlatformInitializer = (outputFile, prefix, buildPath, _options): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/kebab', 'color/hex', 'color/hexAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      destination: `${outputFile}`,
      format: `css/variables`,
      filter: isSource,
      options: {
        outputReferences: false
      }
    }
  ]
})

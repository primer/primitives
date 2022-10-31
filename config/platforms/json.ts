import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['color/hex', 'color/hexAlpha'],
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

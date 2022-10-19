import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '../../@types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformDocJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath: `${buildPath}/docs/`,
  transforms: ['color/hex6', 'color/hexAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      destination: outputFile,
      format: `json/nested-prefixed`,
      filter: isSource,
      options: {
        outputReferences: false
      }
    }
  ]
})

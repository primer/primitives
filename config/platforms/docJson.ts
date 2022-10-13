import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '../../@types/PlatformInitializer'

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
      format: `json/nested`,
      options: {
        outputReferences: false
      }
    }
  ]
})

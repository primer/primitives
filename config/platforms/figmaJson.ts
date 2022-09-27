import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'

export const platformFigmaJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/figma/`,
  transforms: ['color/hex6', 'color/hexAlpha'],
  files: [
    {
      destination: outputFile,
      format: `json/figma`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

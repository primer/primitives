import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'

export const platformDocJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/docs/`,
  transformGroup: 'primer/json',
  files: [
    {
      destination: outputFile,
      format: `json/nested`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

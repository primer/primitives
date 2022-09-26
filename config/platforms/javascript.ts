import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'

export const platformJs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/js/`,
  transformGroup: 'primer/js',
  files: [
    {
      format: "javascript/commonJs",
      destination: outputFile,
      filter: 'isSource'
    },
  ]
})
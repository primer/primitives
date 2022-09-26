import StyleDictionary from 'style-dictionary'
import { BuildPaths } from '../../@types/buildPaths'

export const platformDocJson = (outputFile: string, prefix: string, buildPath: BuildPaths): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath.dist}/docs/`,
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

import StyleDictionary from 'style-dictionary'
import { BuildPaths } from '../../@types/buildPaths'

export const platformJs = (outputFile: string, prefix: string, buildPath: BuildPaths): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath.dist}/js/`,
  transformGroup: 'primer/js',
  files: [
    {
      format: "javascript/commonJs",
      destination: outputFile,
      filter: 'isSource'
    },
  ]
})
import StyleDictionary from 'style-dictionary'
import { BuildPaths } from '../../@types/buildPaths'

export const platformCss = (outputFile: string, prefix: string, buildPath: BuildPaths): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath.dist}/css/`,
  transformGroup: 'primer/css',
  files: [
    {
      destination: `${buildPath.dirs.color}/${outputFile}`,
      format: `css/variables`,
      filter: 'isColor',
      options: {
        outputReferences: false,
      }
    },
    {
      destination: `${buildPath.dirs.size}/${outputFile}`,
      format: `css/variables`,
      filter: 'isSize',
      options: {
        outputReferences: true,
      }
    }
  ]
})

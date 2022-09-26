import StyleDictionary from 'style-dictionary'
import { BuildPaths } from '../../@types/buildPaths'

export const platformScss = (outputFile: string, prefix: string, buildPath: BuildPaths): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath.dist}/scss/`,
  transformGroup: 'primer/scss',
  files: [
    {
      destination: outputFile,
      format: `scss/mixin-scss-variables`,
      filter: 'isSource',
      options: {
        outputReferences: false,
      }
    },
    {
      destination: outputFile.replace('.scss', '.css.scss'),
      filter: 'isSource',
      format: `scss/mixin-css-variables`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'

export const platformJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/json/`,
  transforms: ['color/hex6', 'color/hexAlpha', 'fontWeight/toNumber', 'dimension/pixelToRem', 'shadow/css'],
  options: {
    basePxFontSize: 16,
  },
  files: [
    {
      destination: outputFile,
      filter: isSource,
      format: `json/nested`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '../../@types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformJs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath: `${buildPath}/js/`,
  transforms: ['name/cti/camel', 'color/hex6', 'color/rgbAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource,
      options: {
        // TODO: can the unwrapFirstLevel option be completly removed?
        unwrapFirstLevel: false
      }
    }
  ]
})

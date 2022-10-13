import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '../../@types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformTs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath: `${buildPath}/ts/`,
  transforms: ['name/cti/camel', 'color/hex6', 'color/hexAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/esm',
      destination: outputFile,
      filter: isSource,
      options: {
        unwrapFirstLevel: true
      }
    }
  ]
})

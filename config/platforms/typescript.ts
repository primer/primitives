import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformTs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/camel', 'color/hex', 'color/hexAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/esm',
      destination: outputFile,
      filter: isSource
    }
  ]
})

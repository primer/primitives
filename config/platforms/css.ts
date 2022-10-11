import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'

export const platformCss: PlatformInitializer = (outputFile, prefix, buildPath, options): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/css/`,
  transforms: ['name/cti/kebab', 'color/hex', 'color/hexAlpha', 'css/fontFamily', 'css/fontShorthand', 'fontWeight/toNumber', 'dimension/pixelToRem', 'shadow/css'],
  options: {
    basePxFontSize: 16,
  },
  files: [
    {
      destination: `${outputFile}`,
      format: `css/variables`,
      filter: isSource,
      options: {
        outputReferences: options.outputReferences || false,
      }
    }
  ]
})

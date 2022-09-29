import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'

export const platformCss: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/css/`,
  transforms: ['name/cti/kebab', 'color/hex', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand', 'fontWeight/toNumber', 'dimension/pixelToRem'],
  options: {
    basePxFontSize: 16,
  },
  files: [
    // {
    //   destination: `${buildPath.dirs.color}/${outputFile}`,
    //   format: `css/variables`,
    //   filter: 'isColor',
    //   options: {
    //     outputReferences: false,
    //   }
    // },
    // {
    //   destination: `${buildPath.dirs.size}/${outputFile}`,
    //   format: `css/variables`,
    //   filter: 'isDimension',
    //   options: {
    //     outputReferences: true,
    //   }
    // },
    {
      destination: `${outputFile}`,
      format: `css/variables`,
      filter: isSource,
      options: {
        outputReferences: false,
      }
    }
  ]
})

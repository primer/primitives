import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'

const getFilenameFromPath = (path: string): string => {
  // remove extensions
  path = path.split('.')[0]
  // split into parts
  const parts = path.split('/')
  // return last part of path
  return parts[parts.length - 1]
}

export const platformScss: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => {
  // set mixing name
  const mixinName = `primer-colors-${getFilenameFromPath(outputFile)}`
  //
  return {
    prefix: prefix,
    buildPath: `${buildPath}/scss/`,
    transforms: ['name/cti/kebab', 'color/hex6', 'color/rgbAlpha', 'css/fontFamily', 'css/fontShorthand', 'fontWeight/toNumber', 'dimension/pixelToRem'],
    options: {
      basePxFontSize: 16,
    },
    files: [
      // {
      //   destination: outputFile,
      //   format: `scss/mixin-scss-variables`,
      //   filter: isSource,
      //   options: {
      //     mixinName: mixinName,
      //     outputReferences: false,
      //   }
      // },
      {
        destination: outputFile,//.replace('.scss', '.css.scss'),
        filter: isSource,
        format: `scss/mixin-css-variables`,
        options: {
          mixinName: mixinName,
          outputReferences: false,
        }
      }
    ]
  }
}

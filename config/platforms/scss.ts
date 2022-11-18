import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'

const getFilenameFromPath = (path: string): string => {
  // remove extensions
  path = path.split('.')[0]
  // split into parts
  const parts = path.split('/')
  // return last part of path
  return parts[parts.length - 1]
}

export const scss: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => {
  // set mixing name
  const mixinName = `primer-colors-${getFilenameFromPath(outputFile)}`
  //
  return {
    prefix,
    buildPath,
    transforms: ['name/pathToKebabCase', 'color/hex', 'color/hexAlpha', 'shadow/css', 'border/css'],
    options: {
      basePxFontSize: 16
    },
    files: [
      {
        destination: outputFile,
        filter: isSource,
        format: `scss/mixin-css-variables`,
        options: {
          mixinName,
          outputReferences: false
        }
      }
    ]
  }
}

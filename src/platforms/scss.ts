import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isSource} from '~/src/filters'

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
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      'color/hexMix',
      'color/hexAlpha',
      'dimension/rem',
      'duration/css',
      'shadow/css',
      'border/css',
      'typography/css',
      'fontFamily/css',
      'fontWeight/number',
    ],
    options: {
      showFileHeader: false,
      basePxFontSize: 16,
    },
    files: [
      {
        destination: outputFile,
        filter: isSource,
        format: `scss/variables`,
        options: {
          mixinName,
          outputReferences: false,
        },
      },
    ],
  }
}

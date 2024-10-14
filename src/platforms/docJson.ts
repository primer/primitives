import type {PlatformInitializer} from '../types/PlatformInitializer.js'
import {isSource} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const docJson: PlatformInitializer = (outputFile, prefix, buildPath): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: [
    'name/pathToKebabCase',
    'color/hex',
    'color/hexMix',
    'dimension/rem',
    'shadow/css',
    'border/css',
    'typography/css',
    'fontFamily/css',
    'fontWeight/number',
  ],
  options: {
    basePxFontSize: 16,
    propertyConversion: {
      $value: 'value',
      $type: 'type',
      $description: 'description',
    },
  },
  files: [
    {
      destination: outputFile,
      format: `json/one-dimensional`,
      filter: isSource,
      options: {
        outputReferences: false,
        outputVerbose: true,
      },
    },
  ],
})

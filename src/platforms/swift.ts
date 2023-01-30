import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isDimension, isSource} from '~/src/filters'

export const swift: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/pathToCamelCase', 'dimension/point'],
  files: [
    {
      destination: outputFile,
      filter: token => isDimension(token) && isSource(token),
      className: 'Size',
      format: 'ios-swift/class.swift',
    },
  ],
})

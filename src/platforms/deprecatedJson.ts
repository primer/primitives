import type {PlatformInitializer} from '../types/platformInitializer.js'
import type {PlatformConfig} from 'style-dictionary/types'
import {isDeprecated} from '../filters/index.js'

export const deprecatedJson: PlatformInitializer = (outputFile, prefix, buildPath): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: ['name/pathToDotNotation', 'json/deprecated'],
  files: [
    {
      destination: outputFile,
      format: `json/flat`,
      filter: isDeprecated,
    },
  ],
})

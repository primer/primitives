import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '../types/PlatformInitializer.js'
import {isDeprecated} from '../filters/index.js'

export const deprecatedJson: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
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

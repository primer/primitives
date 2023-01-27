import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isDeprecated} from '~/src/filters'

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

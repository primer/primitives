import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~types/PlatformInitializer'
import {isDeprecated} from '../filters/isDeprecated'

export const platformDeprecatedJson: PlatformInitializer = (
  outputFile,
  prefix,
  buildPath
): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/pathToDotNotation', 'json/deprecated'],
  files: [
    {
      destination: outputFile,
      format: `json/flat`,
      filter: isDeprecated
    }
  ]
})

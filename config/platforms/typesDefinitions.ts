import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~types/PlatformInitializer'
import {isSource} from '../filters/isSource'
import {upperCaseFirstCharacter} from '../utilities/upperCaseFirstCharacter'

export const platformTypeDefinitions: PlatformInitializer = (
  outputFile,
  prefix,
  buildPath
): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/camel', 'color/hex', 'color/hexAlpha'],
  files: [
    {
      format: 'typescript/export-definition',
      destination: `${upperCaseFirstCharacter(outputFile)}DesignTokens.d.ts`,
      filter: isSource,
      options: {
        tokenTypesPath: './config/types/',
        moduleName: `${upperCaseFirstCharacter(outputFile)}DesignTokens`
      }
    }
  ]
})

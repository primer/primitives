import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'
import {upperCaseFirstCharacter} from '~/config/utilities'

export const typeDefinitions: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/camel', 'color/hex', 'color/hexAlpha', 'shadow/css'],
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

import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/types/PlatformInitializer'
import {isSource} from '~/config/filters'
import {upperCaseFirstCharacter} from '~/config/utilities'

export const typeDefinitions: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: [
    'color/hex',
    'color/hexAlpha',
    'shadow/css',
    'border/css',
    'typography/css',
    'fontFamily/css',
    'fontWeight/number',
  ],
  files: [
    {
      format: 'typescript/export-definition',
      destination: `${upperCaseFirstCharacter(outputFile)}DesignTokens.d.ts`,
      filter: isSource,
      options: {
        tokenTypesPath: './config/types/',
        moduleName: `${upperCaseFirstCharacter(outputFile)}DesignTokens`,
      },
    },
  ],
})

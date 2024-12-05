import type {PlatformInitializer} from '../types/platformInitializer.js'
import {isSource} from '../filters/index.js'
import {upperCaseFirstCharacter} from '../utilities/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const typeDefinitions: PlatformInitializer = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  preprocessors: ['themeOverrides'],
  transforms: [
    'color/hex',
    'shadow/css',
    'border/css',
    'dimension/rem',
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
        tokenTypesPath: './src/types/',
        moduleName: `${upperCaseFirstCharacter(outputFile)}DesignTokens`,
        themeOverrides: {
          theme: options?.theme,
        },
      },
    },
  ],
})

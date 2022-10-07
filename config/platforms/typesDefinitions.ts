import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'
import { capitalize } from 'lodash'

export const platformTypeDefinitions: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/ts/@types/`,
  transforms: ['name/cti/camel', 'color/hex6', 'color/hexAlpha', 'css/fontFamily', 'css/fontShorthand', 'fontWeight/toNumber', 'dimension/pixelToRem', 'shadow/css'],
  files: [
    {
      format: "typescript/export-definition",
      destination: `${capitalize(outputFile)}DesignTokens.d.ts`,
      filter: isSource,
      options: {
        unwrapFirstLevel: true,
        tokenTypesPath: './config/types/',
        moduleName: `${capitalize(outputFile)}DesignTokens`,

      }
    },
  ]
})
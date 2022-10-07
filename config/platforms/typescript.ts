import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'
import { isSource } from '../filters/isSource'

export const platformTs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/ts/`,
  transforms: ['name/cti/camel', 'color/hex6', 'color/hexAlpha', 'css/fontFamily', 'css/fontShorthand', 'fontWeight/toNumber', 'dimension/pixelToRem', 'shadow/css'],
  options: {
    basePxFontSize: 16,
  },
  files: [
    {
      format: "javascript/export",
      destination: outputFile,
      filter: isSource,
      options: {
        unwrapFirstLevel: true
      }
    },
    {
      format: "typescript/export-definition",
      destination: `${outputFile.replace('.ts', '.d.ts')}`,
      filter: isSource,
      options: {
        moduleName: 'DesignTokens',
        tokenTypesPath: './config/types/DesignTokenTypes.d.ts'
      }
    },
  ]
})
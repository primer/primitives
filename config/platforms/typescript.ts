import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'

export const platformTs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/ts/`,
  transformGroup: 'primer/ts',
  files: [
    {
      format: "javascript/export",
      destination: outputFile,
      filter: 'isSource'
    },
    {
      format: "typescript/export-definition",
      destination: `${outputFile.replace('.ts', '.d.ts')}`,
      filter: 'isSource',
      options: {
        moduleName: 'DesignTokens',
        tokenTypesPath: './config/types/DesignTokenTypes.d.ts'
      }
    },
  ]
})
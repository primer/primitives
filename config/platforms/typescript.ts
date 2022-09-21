import StyleDictionary from 'style-dictionary'

export const platformTs = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
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
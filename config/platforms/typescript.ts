import StyleDictionary from 'style-dictionary'

export const platformTs = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/`,
  transformGroup: 'primer/ts',
  files: [
    {
      format: "javascript/export",
      destination: "typescript/" + outputFile,
      filter: 'isSource'
    },
    {
      format: "typescript/export-definition",
      destination: `typescript/${outputFile.replace('.ts', '.d.ts')}`,
      filter: 'isSource',
      options: {
        moduleName: 'DesignTokens',
        tokenTypesPath: './config/types/DesignTokenTypes.d.ts'
      }
    },
  ]
})
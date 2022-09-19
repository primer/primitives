import StyleDictionary from 'style-dictionary'

export const platformTs = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/typescript/`,
  transformGroup: 'primer/ts',
  files: [
    {
      format: "javascript/es6",
      destination: outputFile,
      options: {
        outputReferences: true,
      }
    },
    {
      format: "typescript/es6-declarations",
      destination: `${outputFile.replace('.ts', '.d.ts')}`
    },
  ]
})

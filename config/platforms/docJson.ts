import StyleDictionary from 'style-dictionary'

export const platformDocJson = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/docJson/`,
  transformGroup: 'primer/json',
  files: [
    {
      destination: outputFile,
      format: `json/nested`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

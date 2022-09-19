import StyleDictionary from 'style-dictionary'

export const platformScss = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/scss/`,
  transformGroup: 'primer/scss',
  files: [
    {
      destination: outputFile,
      format: `scss/css-variables`,
      options: {
        outputReferences: true,
      }
    }
  ]
})

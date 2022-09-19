import StyleDictionary from 'style-dictionary'

export const platformCss = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/css/`,
  transformGroup: 'primer/css',
  files: [
    {
      destination: outputFile,
      format: `css/variables`,
      options: {
        outputReferences: true,
      }
    }
  ]
})

import StyleDictionary from 'style-dictionary'

export const platformJs = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/js/`,
  transformGroup: 'primer/js',
  files: [
    {
      format: "javascript/commonJs",
      destination: outputFile,
      filter: 'isSource'
    },
  ]
})
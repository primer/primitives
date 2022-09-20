import StyleDictionary from 'style-dictionary'

export const platformScss = (outputFile: string, prefix: string, buildPath: string): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/scss/`,
  transformGroup: 'primer/scss',
  files: [
    {
      destination: outputFile,
      format: `scss/mixin-scss-variables`,
      options: {
        outputReferences: false,
      }
    },
    {
      destination: outputFile.replace('.scss', '.css.scss'),
      format: `scss/mixin-css-variables`,
      options: {
        outputReferences: false,
      }
    }
  ]
})

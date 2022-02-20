const glob = require('glob')

// put all token json files into an array of file paths
const tokenFiles = glob.sync(`tokens/**/*.json`)

module.exports = {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: 'build/css/',
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `css/variables`,
          destination: filePath.replace(`.json`, `.css`),
          filter: token => token.filePath === filePath
        }
      })
    }
  }
}

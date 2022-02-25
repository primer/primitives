const glob = require('glob')

// put all token json files into an array of file paths
const tokenFiles = glob.sync(`tokens/**/*.json`)

module.exports = {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: 'dist/css/',
      //   options: {
      //     outputReferences: true
      //   },
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `css/variables`,
          destination: filePath.replace(`.json`, `.css`),
          filter: token => token.filePath === filePath
        }
      })
    }
    // csspx: {
    //   //   transformGroup: `css`,
    //   transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'px/suffix'],
    //   buildPath: 'build/css/',
    //   //   options: {
    //   //     outputReferences: true
    //   //   },
    //   // map the array of token file paths to style dictionary output files
    //   files: tokenFiles.map(filePath => {
    //     // console.log(filePath)
    //     return {
    //       format: `css/variables`,
    //       destination: filePath.replace(`.json`, `-px.css`),
    //       filter: token => token.filePath === filePath
    //     }
    //   })
    // }
  }
}

// token.path.join('~')
// `${token.value}${unit}`

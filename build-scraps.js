// dumping scrap code here temporarily

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
    // css: {
    //   transformGroup: 'css',
    //   buildPath: 'dist/css/',
    //   files: [
    //     {
    //       destination: `custom-media.css`,
    //       format: 'css/touch-target-mobile',
    //       filter: {attributes: {category: 'course'}},
    //   options: {
    //     selector: '.btn',
    //     },
    //     }
    //   ]
    // },
    // css: {
    //   transformGroup: 'css',
    //   buildPath: 'dist/css/',
    //   files: [
    //     {
    //       destination: `custom-media-2.css`,
    //       format: 'css/touch-target-desktop',
    //       filter: {attributes: {category: 'fine'}}
    //     }
    //   ]
    // }
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

module.exports = {
  source: [`tokens/base/size/size.json`, `tokens/functional/size/mobile-size.json`],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: `css`,
      files: [
        {
          destination: `tokens/functional/size/mobile.css`,
          format: `css/touch-target-mobile`,
          filter: token => token.filePath.includes('coarse'),
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
}

module.exports = {
  source: [`tokens/base/size/size.json`, `tokens/functional/size/desktop-size.json`],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: `css`,
      files: [
        {
          destination: `tokens/functional/size/desktop.css`,
          format: `css/touch-target-desktop`,
          //   filter: token => token.filePath.includes('fine'),
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
}

// token.path.join('~')
// `${token.value}${unit}`

const transformer = StyleDictionary.transform['attribute/cti'].transformer

// const propertiesToCTI = {
//   width: {category: 'size', type: 'dimension'},
//   'min-width': {category: 'size', type: 'dimension'},
//   'max-width': {category: 'size', type: 'dimension'},
//   height: {category: 'size', type: 'dimension'},
//   'min-height': {category: 'size', type: 'dimension'},
//   'max-height': {category: 'size', type: 'dimension'},
//   'border-width': {category: 'size', type: 'border', item: 'width'},
//   'border-radius': {category: 'size', type: 'border', item: 'width'},
//   'border-color': {category: 'color', type: 'border'},
//   'background-color': {category: 'color', type: 'background'},
//   color: {category: 'color', type: 'font'},
//   'text-color': {category: 'color', type: 'font'},
//   padding: {category: 'size', type: 'padding'},
//   'padding-inline': {category: 'size', type: 'padding'},
//   'padding-block': {category: 'size', type: 'padding'},
//   inline: {category: 'size', type: 'padding'},
//   normal: {category: 'size', type: 'padding'},
//   condensed: {category: 'size', type: 'padding'},
//   spacious: {category: 'size', type: 'padding'},
//   icon: {category: 'content', type: 'icon'},
//   'font-size': {category: 'size', type: 'font'},
//   'line-height': {category: 'size', type: 'line-height'},
//   size: {category: 'size', type: 'size'}
// }

// const CTITransform = {
//   type: `attribute`,
//   transformer: prop => {
//     // Only do this custom functionality in the 'component' top-level namespace.
//     if (prop.path[0] === 'gh' || 'base') {
//       // When defining component tokens, the key of the token is the relevant CSS property
//       // The key of the token is the last element in the path array
//       return propertiesToCTI[prop.path[prop.path.length - 1]]
//     } else {
//       // Fallback to the original 'attribute/cti' transformer
//       return transformer(prop)
//     }
//   }
// }

// StyleDictionary.registerTransform({
//   name: 'attribute/cti',
//   type: 'attribute',
//   transformer: CTITransform.transformer
// })

//   transformer(dictionary) {
//     return dictionary.allProperties
//       .map(prop => {
//         const {attributes, value} = prop
//         const name = attributes.type.replace(/_/g, '-') // 1
//         return `${name}`
//       })
//       .join('\n')
//   }
//   matcher: function (token) {
//     return token.attributes.type === 'size'
//   },

//mystring = mystring.split(',').join(newchar);
//return _.camelCase( [options.prefix].concat(token.path).join(' ') );

// StyleDictionary.registerFormat({
//   name: 'rvt/scss/map-simple',
//   formatter: function(dictionary) {
//     const allProperties = dictionary.allProperties
//     let output = ''
//     output += `$${this.mapName || 'tokens'}: (\n`
//     output += allProperties
//       .map(function(prop) {
//         let line = ''
//         if (prop.comment) {
//           line += `  // ${prop.comment}\n`
//         }
//         line += `  '${prop.attributes.type}-${prop.attributes.item}': ${prop.value}`
//         return line
//       })
//       .join(`,\n`)
//     output += `\n);\n`
//     return output
//   }
// })

// StyleDictionary.registerFormat({
//   name: 'myCustomFormat',
//   formatter: function({dictionary, options}) {
//     return formattedVariables('css', dictionary, options.outputReferences)
//   }
// })

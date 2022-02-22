// px value with suffix
// prefix functional layer

const StyleDictionary = require('style-dictionary')

console.log('Build started...')
console.log('\n==============================================')

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  matcher: function (token) {
    // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
    return token.attributes.category === 'size'
  },
  transformer: function (token) {
    return `${token.value}px`
  }
})

StyleDictionary.registerTransform({
  name: 'px/suffix',
  type: 'name',
  //   transitive: true,
  matcher: function (token) {
    return token.attributes.category === 'size'
  },
  transformer: function (token) {
    return `${token.name}-px`
  }
})

StyleDictionary.registerTransform({
  name: 'functional/prefix',
  type: 'name',
  //   transitive: true,
  matcher: function (token) {
    return token.filePath.includes(`tokens/functional`)
  },
  transformer: function (token) {
    return `primer-${token.name}`
  }
})

// REGISTER THE CUSTOM TRANFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'functional/prefix', 'px/suffix']
})

// REGISTER A CUSTOM FORMAT (to be used for this specific example)

// StyleDictionary.registerFormat({
//   name: 'myCustomFormat',
//   //   matcher: function (token) {
//   //     return token => token.filePath.includes(`tokens/functional`)
//   //   },
//   formatter: function ({dictionary, options}) {
//     const {outputReferences} = options
//     const formatProperty = createPropertyFormatter({
//       outputReferences,
//       dictionary,
//       formatting: {
//         prefix: 'primer'
//       }
//     })
//     return dictionary.allTokens.map(formatProperty).join('\n')
//   }
// })

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.js')

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')

// px value with suffix
// prefix functional layer

const StyleDictionary = require('style-dictionary')
const transformer = StyleDictionary.transform['attribute/cti'].transformer

const propertiesToCTI = {
  width: {category: 'size', type: 'dimension'},
  'min-width': {category: 'size', type: 'dimension'},
  'max-width': {category: 'size', type: 'dimension'},
  height: {category: 'size', type: 'dimension'},
  'min-height': {category: 'size', type: 'dimension'},
  'max-height': {category: 'size', type: 'dimension'},
  'border-width': {category: 'size', type: 'border', item: 'width'},
  'border-radius': {category: 'size', type: 'border', item: 'width'},
  'border-color': {category: 'color', type: 'border'},
  'background-color': {category: 'color', type: 'background'},
  color: {category: 'color', type: 'font'},
  'text-color': {category: 'color', type: 'font'},
  padding: {category: 'size', type: 'padding'},
  'padding-inline': {category: 'size', type: 'padding'},
  'padding-block': {category: 'size', type: 'padding'},
  inline: {category: 'size', type: 'padding'},
  normal: {category: 'size', type: 'padding'},
  condensed: {category: 'size', type: 'padding'},
  spacious: {category: 'size', type: 'padding'},
  icon: {category: 'content', type: 'icon'},
  'font-size': {category: 'size', type: 'font'},
  'line-height': {category: 'size', type: 'line-height'},
  size: {category: 'size', type: 'size'}
}

const CTITransform = {
  type: `attribute`,
  transformer: prop => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (prop.path[0] === 'gh' || 'base') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]]
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return transformer(prop)
    }
  }
}

console.log('Build started...')
console.log('\n==============================================')

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'attribute/cti',
  type: 'attribute',
  transformer: CTITransform.transformer
})

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter(dictionary) {
    return dictionary.allProperties
      .map(prop => {
        const {attributes, value} = prop
        const size = attributes.type.replace(/_/g, '-') // 1
        return `@custom-media --${size}-viewport (${value});`
      })
      .join('\n')
  }
})

// allow camelCase in name + kebab path
StyleDictionary.registerTransform({
  name: 'name/camel/kebab',
  type: 'name',
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
  transformer: function (token, options) {
    // const tokenPath = token.path
    // const format = tokenPath.replace(/,/g, '-')
    return token.path.join('-')
  }
})
//mystring = mystring.split(',').join(newchar);
//return _.camelCase( [options.prefix].concat(token.path).join(' ') );

// StyleDictionary.registerTransform({
//   name: 'size/px',
//   type: 'value',
//   matcher: function (token) {
//     return token.attributes.type === 'size'
//   },
//   transformer: function (token) {
//     return `${token.value}px`
//   }
// })

// StyleDictionary.registerTransform({
//   name: 'px/suffix',
//   type: 'name',
//   //   transitive: true,
//   matcher: function (token) {
//     return token.attributes.type === 'size' && token.filePath.includes(`tokens/base`)
//   },
//   transformer: function (token) {
//     return `${token.name}-px`
//   }
// })

// StyleDictionary.registerTransform({
//   name: 'functional/prefix',
//   type: 'name',
//   //   transitive: true,
//   matcher: function (token) {
//     return token.filePath.includes(`tokens/functional`)
//   },
//   transformer: function (token) {
//     return `gh-${token.name}`
//   }
// })

// REGISTER THE CUSTOM TRANFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['attribute/cti', 'size/pxToRem', 'name/camel/kebab']
})

//'name/cti/kebab'

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

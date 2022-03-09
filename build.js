/**
 * platforms: CSS, js, ts, json
 * transforms:
 * - px to rem
 * - custom media queries (postcss)
 * - base/functional prefix
 * - camel-kebab
 * - responsive tokens (same token, different value)
 */
const glob = require('glob')
const StyleDictionary = require('style-dictionary')
const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers
const tokenFiles = glob.sync(`tokens/**/*.json`)
const transforms = require('style-dictionary/lib/common/transforms')
const _ = require('lodash')

console.log('Build started...')
console.log('\n==============================================')

// REGISTER THE CUSTOM TRANFORMS

// allow camelCase in name + kebab path
// StyleDictionary.registerTransform({
//   name: 'name/camel/kebab',
//   type: 'name',
//   transformer: function(token, options) {
//     // const tokenPath = token.path
//     // const format = tokenPath.replace(/,/g, '-')
//     const {attributes, path} = token
//     console.log('token', token)
//     // this should probably check for 'category' and remove it from the path
//     return token.path.slice(1).join('-')
//   }
// })

/**
 * transform: css variable names
 * example: `--namespace-item-variant-property-modifier`
 */
StyleDictionary.registerTransform({
  name: 'name/css',
  type: 'name',
  transformer: (token, options) => {
    return token.path.join('-')
  }
})

/**
 * transform: js variable names
 * example: `namespace.item.variant.property.modifier`
 */
StyleDictionary.registerTransform({
  name: 'name/js',
  type: 'name',
  transformer: (token, options) => {
    return token.path.join('.')
  }
})

/**
 * transform: js es6 variable names
 * example: `NamespaceItemVariantPropertyModifier`
 */
StyleDictionary.registerTransform({
  name: 'name/js/es6',
  type: 'name',
  transformer: (token, options) => {
    const tokenPath = token.path.join(' ')
    const tokenPathItems = tokenPath.split(' ')
    for (var i = 0; i < tokenPathItems.length; i++) {
      tokenPathItems[i] = tokenPathItems[i].charAt(0).toUpperCase() + tokenPathItems[i].slice(1)
    }
    const tokenName = tokenPathItems.join('')
    return tokenName
  }
})

// find values with px unit
function isPx(value) {
  return /[\d\.]+px$/.test(value)
}

// transform: px to rem
StyleDictionary.registerTransform({
  name: 'pxToRem',
  type: 'value',
  transformer: (token, options) => {
    if (isPx(token.value)) {
      const baseFontSize = 16
      const floatValue = parseFloat(token.value.replace('px', ''))

      if (isNaN(floatValue)) {
        return token.value
      }

      if (floatValue === 0) {
        return '0'
      }

      return `${floatValue / baseFontSize}rem`
    }
    return token.value
  }
})

//-----

// ts output
StyleDictionary.registerTransform({
  name: 'attribute/typescript',
  type: 'attribute',
  transformer: (token, options) => {
    return {
      typescript: {
        // these transforms will need to match the ones you use for typescript
        // or you can "chain" the transforms and use token.name and token.value
        // like scss and less transforms do.
        name: token.path.slice(1).join('.'),
        value: token.value
      }
    }
  }
})

// css output
StyleDictionary.registerTransform({
  name: 'attribute/css',
  type: 'attribute',
  transformer: token => {
    const tokenName = token.path.slice(1).join('-')
    return {
      css: {
        name: `--${tokenName}`,
        value: token.value
      }
    }
  }
})

// REGISTER THE CUSTOM TRANFORM GROUPS

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['name/css', 'pxToRem']
})

// REGISTER A CUSTOM FORMAT

// wrap mobile tokens in media query
StyleDictionary.registerFormat({
  name: 'css/touch-target-mobile',
  formatter: function({dictionary, file, options}) {
    const {outputReferences} = options
    return (
      fileHeader({file}) +
      `@media (pointer: coarse) { :root {\n` +
      formattedVariables({format: 'css', dictionary, outputReferences}) +
      '\n}}\n'
    )
  }
})

// wrap desktop tokens in media query
StyleDictionary.registerFormat({
  name: 'css/touch-target-desktop',
  formatter: function({dictionary, file, options}) {
    const {outputReferences} = options
    return (
      fileHeader({file}) +
      `@media (pointer: fine) { :root {\n` +
      formattedVariables({format: 'css', dictionary, outputReferences}) +
      '\n}}\n'
    )
  }
})

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter(dictionary) {
    return dictionary.allProperties
      .map(prop => {
        const {value, path, name} = prop
        // const tokenPath = path
        // const tokenProperty = path[path.length - 1]
        return `@custom-media --${name}-viewport (${value});`
      })
      .join('\n')
  }
})

// format docs
StyleDictionary.registerFormat({
  name: 'json/docs',
  formatter: function(dictionary, config) {
    const groupedTokens = _.groupBy(dictionary.allProperties, 'filePath')

    return JSON.stringify(groupedTokens, null, 2)
  }
})

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
// const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.js')

// FINALLY, BUILD ALL THE PLATFORMS

// build all tokens
StyleDictionary.extend({
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: 'css',
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `css/variables`,
          destination: filePath.replace(`.json`, `.css`),
          filter: token => token.filePath === filePath,
          options: {
            outputReferences: true
          }
        }
      })
    },
    cssViewport: {
      buildPath: 'dist/css/tokens/base/size/',
      transformGroup: 'css',
      files: [
        {
          filter: token => token.filePath.includes('viewport'),
          format: 'custom/format/custom-media',
          destination: 'viewport.css'
        }
      ]
    },
    js: {
      buildPath: 'dist/js/',
      transforms: ['name/js/es6', 'pxToRem'],
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `javascript/es6`,
          destination: filePath.replace(`.json`, `.js`),
          filter: token => token.filePath === filePath
        }
      })
    },
    jsModule: {
      buildPath: 'dist/js/module/',
      transforms: ['pxToRem'],
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `javascript/module`,
          destination: filePath.replace(`.json`, `.js`),
          filter: token => token.filePath === filePath
        }
      })
    },
    tsTypes: {
      buildPath: 'dist/ts/',
      transforms: ['pxToRem'],
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `typescript/module-declarations`,
          destination: filePath.replace(`.json`, `.d.ts`),
          filter: token => token.filePath === filePath
        }
      })
    },
    ts: {
      buildPath: 'dist/ts/',
      transforms: ['pxToRem'],
      // map the array of token file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: `javascript/module`,
          destination: filePath.replace(`.json`, `.js`),
          filter: token => token.filePath === filePath
        }
      })
    },
    docs: {
      buildPath: 'dist/docs/',
      transformGroup: 'css',
      files: [
        {
          format: 'json/docs',
          destination: 'docValues.json'
        }
      ]
    }
  }
}).buildAllPlatforms()

// build desktop tokens
StyleDictionary.extend({
  source: [`tokens/base/size/size.json`, `tokens/functional/size/size-fine.json`],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: 'css',
      files: [
        {
          destination: `tokens/functional/size/size-fine.css`,
          format: `css/touch-target-desktop`,
          filter: token => token.filePath.includes('fine')
          // this doesn't work
          //   options: {
          //     outputReferences: true
          //   }
        }
      ]
    }
  }
}).buildAllPlatforms()

// build mobile tokens
StyleDictionary.extend({
  source: [`tokens/base/size/size.json`, `tokens/functional/size/size-course.json`],
  platforms: {
    css: {
      buildPath: 'dist/css/',
      transformGroup: 'css',
      files: [
        {
          destination: `tokens/functional/size/size-course.css`,
          format: `css/touch-target-mobile`,
          filter: token => token.filePath.includes('course')
          //   options: {
          //     outputReferences: true
          //   }
        }
      ]
    }
  }
}).buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')

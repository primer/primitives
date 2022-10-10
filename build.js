const glob = require('fast-glob')
const StyleDictionary = require('style-dictionary')

const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

//-----
// functions to be extracted
// TODO: extract to a separate files

const pathToKebabCase = token => token.path.join('-')

const pathToDotNotation = token => token.path.join('.')

const capitalize = string => string[0].toUpperCase() + string.slice(1)

const pathToPascalCase = token => token.path.map(tokenPathItems => capitalize(tokenPathItems)).join('')

// REGISTER THE CUSTOM TRANFORMS

/**
 * transform: scss variable names
 * example: `$namespace-item-variant-property-modifier`
 */
StyleDictionary.registerTransform({
  name: 'name/scss',
  type: 'name',
  transformer: pathToKebabCase
})

/**
 * transform: css variable names
 * example: `--namespace-item-variant-property-modifier`
 */
StyleDictionary.registerTransform({
  name: 'name/css',
  type: 'name',
  transformer: pathToKebabCase
})

/**
 * transform: js variable names
 * example: `namespace.item.variant.property.modifier`
 */
StyleDictionary.registerTransform({
  name: 'name/js',
  type: 'name',
  transformer: pathToDotNotation
})

/**
 * transform: js es6 variable names
 * example: `NamespaceItemVariantPropertyModifier`
 */
StyleDictionary.registerTransform({
  name: 'name/js/es6',
  type: 'name',
  transformer: pathToPascalCase
})

// find values with px unit
function isPx(value) {
  return /[\d.]+px$/.test(value)
}

// transform: px to rem
StyleDictionary.registerTransform({
  name: 'pxToRem',
  type: 'value',
  transformer: token => {
    if (isPx(token.value)) {
      const baseFontSize = 16
      const floatValue = parseFloat(token.value.replace('px', ''))

      if (isNaN(floatValue)) {
        return token.value
      }

      if (floatValue === 0) {
        return '0'
      }

      if (token.name.includes('lineHeight')) {
        return `${floatValue / baseFontSize}`
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
  transformer: token => {
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

// transform: composite typography to shorthands
StyleDictionary.registerTransform({
  name: 'typography/shorthand',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'typography',
  transformer: token => {
    const {value} = token

    // if lineHeight has value, include in shorthand
    if (value.lineHeight) {
      return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
    }

    return `${value.fontWeight} ${value.fontSize} ${value.fontFamily}`
  }
})

// REGISTER THE CUSTOM TRANFORM GROUPS

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['name/css', 'pxToRem', 'typography/shorthand']
})

StyleDictionary.registerTransformGroup({
  name: 'scss',
  transforms: ['name/scss', 'pxToRem', 'typography/shorthand']
})

// REGISTER A CUSTOM FORMAT

// wrap mobile tokens in media query
StyleDictionary.registerFormat({
  name: 'css/touch-target-mobile',
  formatter({dictionary, file, options}) {
    const {outputReferences} = options
    return `${fileHeader({file})}
    @media (pointer: coarse) { :root {\n${formattedVariables({
      format: 'css',
      dictionary,
      outputReferences
    })}\n}}\n`
  }
})

// wrap desktop tokens in media query
StyleDictionary.registerFormat({
  name: 'css/touch-target-desktop',
  formatter({dictionary, file, options}) {
    const {outputReferences} = options
    return `${fileHeader({file})}
    @media (pointer: fine) { :root {\n${formattedVariables({
      format: 'css',
      dictionary,
      outputReferences
    })}\n}}\n`
  }
})

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter({dictionary}) {
    return dictionary.allProperties
      .map(prop => {
        const {value, name} = prop

        return `@custom-media --${name}-viewport ${value};`
      })
      .join('\n')
  }
})

// format docs
StyleDictionary.registerFormat({
  name: 'json/docs',
  formatter({dictionary}) {
    const groupedTokens = groupBy(dictionary.allProperties, 'filePath')

    return JSON.stringify(groupedTokens, null, 2)
  }
})

/**
 * Replacement format for javascript/module
 */
StyleDictionary.registerFormat({
  name: 'javascript/module-v2',
  formatter({dictionary, file}) {
    const recursiveleyFlattenDictionary = obj => {
      const tree = {}
      if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj
      }

      if (obj.hasOwnProperty('value')) {
        return obj.value
      } else {
        for (const name in obj) {
          if (obj.hasOwnProperty(name)) {
            tree[name] = recursiveleyFlattenDictionary(obj[name])
          }
        }
      }
      return tree
    }

    return `${fileHeader({file})}
    
module.exports = ${JSON.stringify(recursiveleyFlattenDictionary(dictionary.tokens), null, 2)}`
  }
})

/**
 * Replacement format for typescript/module-declarations
 * Type schema corresponds to javascript/module-v2 format
 */
StyleDictionary.registerFormat({
  name: 'typescript/module-declarations-v2',
  formatter({dictionary, options, file}) {
    const {moduleName = `tokens`} = options

    const getType = value => {
      switch (typeof value) {
        case 'string':
          return 'string'
        case 'number':
          return 'number'
        default:
          return 'any'
      }
    }

    const recursiveTypeGeneration = obj => {
      const tree = {}
      const shortHandSizes = ['large', 'medium', 'small']
      if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj
      }

      if (obj.hasOwnProperty('value') && typeof obj.value === 'string') {
        return getType(obj.value)
      } else {
        for (const name in obj) {
          if ((obj.hasOwnProperty(name) && obj.name === 'shorthand') || shortHandSizes.includes(obj.name)) {
            for (const shorthandKey in obj.value) {
              tree[shorthandKey] = getType(obj.value[shorthandKey])
            }
            return tree
          } else if (obj.hasOwnProperty(name)) {
            tree[name] = recursiveTypeGeneration(obj[name])
          }
        }
      }
      return tree
    }

    const output = `${fileHeader({file})}
    
declare const ${moduleName}: ${JSON.stringify(recursiveTypeGeneration(dictionary.tokens), null, 2)}
export default ${moduleName};`

    return output
      .replace(/"any"/g, 'any')
      .replace(/"string"/g, 'string')
      .replace(/"number"/g, 'number')
  }
})

/**
 * @name groupBy
 * @description Equivalent to lodash _.groupBy, to avoid creating another package dependency for users
 * @param {Array|Object} The collection to iterate over.
 * @param {Function} The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
function groupBy(collection, iteratee = x => x) {
  const current = typeof iteratee === 'function' ? iteratee : ({[iteratee]: prop}) => prop

  const array = Array.isArray(collection) ? collection : Object.values(collection)

  return array.reduce((acc, item) => {
    const value = current(item)

    acc[value] = acc[value] || []

    acc[value].push(item)

    return acc
  }, {})
}

/**
 * @name build
 * @description
 *   Used to generate design tokens programmatically using StyleDictionary
 *   Called internally to build primitives and exported for self-serve use
 *
 * @param {Object} options
 * @param {string} options.source glob or file path to a JSON object of tokens
 * @param {string} options.outputPath location to write the output files
 * @param {string} options.namespace a custom namespace to use for the output files
 * @param {Platform} options.platforms add custom platform configurations to style-dictionary
 * @example
 *  buildPrimitives({
 *   source: [`src/colors.json`],
 *   outputPath: 'dist',
 *   namespace: 'primer',
 *   platforms: {...}
 *  })
 */
function buildPrimitives(
  {source, outputPath = 'tokens-v2-private', include, platforms, namespace = 'primer'},
  _StyleDictionary = StyleDictionary
) {
  // eslint-disable-next-line no-console
  console.log('Build started...')
  // eslint-disable-next-line no-console
  console.log('\n==============================================')

  const customParseConfig = {
    parsers: [
      {
        pattern: /\.json$/,
        parse: ({contents, filePath}) => {
          try {
            let mutableContent = JSON.stringify(contents)

            if (filePath.includes('/functional/')) {
              mutableContent = mutableContent.replace(/<namespace>/g, namespace)
            }

            const parsed = JSON.parse(mutableContent)

            return JSON.parse(parsed)
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
          }
        }
      }
    ]
  }

  const getConfig = files => {
    const defaultPlatformConfig = {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
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
        buildPath: `${outputPath}/css/tokens/functional/size/`,
        transformGroup: 'css',
        files: [
          {
            filter: token => token.filePath.includes('viewport'),
            format: 'custom/format/custom-media',
            destination: 'viewport.css'
          }
        ]
      },
      scss: {
        buildPath: `${outputPath}/scss/`,
        transformGroup: 'scss',
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
          return {
            format: `scss/variables`,
            destination: filePath.replace(`.json`, `.scss`),
            filter: token => token.filePath === filePath,
            options: {
              outputReferences: true
            }
          }
        })
      },
      js: {
        buildPath: `${outputPath}/js/`,
        transforms: ['name/js/es6', 'pxToRem'],
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
          return {
            format: `javascript/es6`,
            destination: filePath.replace(`.json`, `.js`),
            filter: token => token.filePath === filePath
          }
        })
      },
      jsModule: {
        buildPath: `${outputPath}/js/module/`,
        transforms: ['pxToRem'],
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
          return {
            format: `javascript/module`,
            destination: filePath.replace(`.json`, `.js`),
            filter: token => token.filePath === filePath
          }
        })
      },
      tsTypes: {
        buildPath: `${outputPath}/ts/`,
        transforms: ['pxToRem'],
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
          return {
            format: `typescript/module-declarations-v2`,
            destination: filePath.replace(`.json`, `.d.ts`),
            filter: token => token.filePath === filePath
          }
        })
      },
      ts: {
        buildPath: `${outputPath}/ts/`,
        transforms: ['pxToRem'],
        // map the array of token file paths to style dictionary output files
        files: files.map(filePath => {
          return {
            format: `javascript/module-v2`,
            destination: filePath.replace(`.json`, `.js`),
            filter: token => token.filePath === filePath
          }
        })
      }
    }

    const config = {
      ...{include: include ? [include] : undefined},
      source: files,
      ...customParseConfig,
      platforms: platforms ? platforms : defaultPlatformConfig
    }
    return config
  }

  //build all tokens
  _StyleDictionary
    .extend({
      ...getConfig(glob.sync([...source]))
    })
    .buildAllPlatforms()
}

/**
 * @name init
 * @description
 *   Triggers the build for @primer/primitive default tokens
 *   from an npm script. Internal use only. Use `build` for self-serve.
 * @private
 */
function _init() {
  const outputPath = 'tokens-v2-private'
  //build all tokens
  buildPrimitives({
    source: [`tokens/**/*.json`, `!tokens/**/size-*.json`, `!tokens/**/color/*.json`],
    outputPath
  })

  //build size fine
  buildPrimitives({
    source: [`tokens/functional/size/size-fine.json`, `tokens/base/size/size.json`],
    outputPath
  })

  //build size coarse
  buildPrimitives({
    source: [`tokens/functional/size/size-coarse.json`, `tokens/base/size/size.json`],
    outputPath
  })

  buildPrimitives({
    source: [`tokens/base/size/size.json`, `tokens/functional/size/size-fine.json`],
    outputPath,
    platforms: {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        files: [
          {
            destination: `tokens/functional/size/size-fine.css`,
            format: `css/touch-target-desktop`,
            filter: token => token.filePath.includes('fine'),
            options: {
              outputReferences: true
            }
          }
        ]
      }
    }
  })

  buildPrimitives({
    source: [`tokens/base/size/size.json`, `tokens/functional/size/size-coarse.json`],
    platforms: {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        files: [
          {
            destination: `tokens/functional/size/size-coarse.css`,
            format: `css/touch-target-mobile`,
            filter: token => token.filePath.includes('coarse'),
            options: {
              outputReferences: true
            }
          }
        ]
      }
    }
  })

  //build docs data
  buildPrimitives({
    source: [`tokens/**/*.json`, `!tokens/**/color/*.json`],
    outputPath,
    platforms: {
      docs: {
        buildPath: `${outputPath}/docs/`,
        transformGroup: 'css',
        files: [
          {
            format: 'json/docs',
            destination: 'docValues.json',
            options: {
              outputReferences: false
            }
          }
        ]
      }
    }
  })
}

module.exports = {
  buildPrimitives,
  _init,
  StyleDictionary,
  pathToKebabCase,
  pathToDotNotation,
  capitalize,
  pathToPascalCase
}

/**
 * platforms: CSS, js, ts, json
 * transforms:
 * - px to rem
 * - custom media queries (postcss)
 * - base/functional prefix
 * - camel-kebab
 * - responsive tokens (same token, different value)
 */
//  const glob = require('glob')
 import StyleDictionary from 'style-dictionary'
//  const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers
//  const tokenFiles = glob.sync(`tokens/**/*.json`)
//  const transforms = require('style-dictionary/lib/common/transforms')

 console.log('Build started...')
 console.log('\n==============================================')

const config = {
	source: [`tokens/**/*.json`],
	platforms: {
	  css: {
	    buildPath: 'test/new/css/',
	    transforms: ['name/css'],
	    files: [{format: 'css/variables', destination: 'test.css'}]
	  }
	}
      }


 StyleDictionary.registerTransform({
   name: 'name/css',
   type: 'name',
   transformer: (token, options) => {
     return token.path.join('-')
   }
 })

 function isPx(value) {
   return /[\d\.]+px$/.test(value)
 }

 StyleDictionary.registerTransform({
   name: 'pxToRem',
   type: 'value',
   transformer: (token, options) => {
//      if (isPx(token.value))
   }
 })

 StyleDictionary.extend(config).buildAllPlatforms()


 console.log('\n==============================================')
 console.log('\nBuild completed!')

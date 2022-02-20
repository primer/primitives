// const StyleDictionaryPackage = require('style-dictionary');

// // HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

// function getStyleDictionaryConfig(typ) {
//   return {
//     "source": [
//           "tokens/base/**/*.json",
//         `tokens/alias/functional/${type}/*.json`,
//     //   "tokens/**/*.json",
//     //   `tokens/functionals/${functional}/*.json`
//     ],
//     "platforms": {
//       "web": {
//         "transformGroup": "web",
//         "buildPath": `build/${type}/`,
//         "files": [{
//           "destination": "tokens.scss",
//           "format": "css/variables"
//         }]
//       },
//     //   "android": {
//     //     "transformGroup": "android",
//     //     "buildPath": `build/android/${base}/`,
//     //     "files": [{
//     //       "destination": "tokens.colors.xml",
//     //       "format": "android/colors"
//     //     },{
//     //       "destination": "tokens.dimens.xml",
//     //       "format": "android/dimens"
//     //     },{
//     //       "destination": "tokens.font_dimens.xml",
//     //       "format": "android/fontDimens"
//     //     }]
//     //   },
//     //   "ios": {
//     //     "transformGroup": "ios",
//     //     "buildPath": `build/ios/${base}/`,
//     //     "files": [{
//     //       "destination": "tokens.h",
//     //       "format": "ios/macros"
//     //     }]
//     //   }
//     }
//   };
// }

// console.log('Build started...');

// // PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND FUNCTIONALS

// ['functional'].map(function (alias) {
//   ['web'].map(function (platform) {

//     console.log('\n==============================================');
//     console.log(`\nProcessing: [${platform}] [${alias}]`);

//     const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(alias, platform));

//     StyleDictionary.buildPlatform(platform);

//     console.log('\nEnd processing');

//   })
// })

// console.log('\n==============================================');
// console.log('\nBuild completed!');

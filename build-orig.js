//

// const StyleDictionary = require("style-dictionary");
// const tokens = require("./tokens");

// module.exports = {
//   source: ["tokens/**/*.json"],
//   platforms: {
//     // Web output in scss partialformat
//     "scss/category": {
//       transformGroup: "scss",
//         buildPath: `build/scss/`,
//       transforms: ["attribute/cti", "name/cti/kebab", "size/pxToRem"],
//       files: tokens.map((tokenCategory) => ({
//         destination: `_${tokenCategory}.scss`,
//         format: "scss/variables",
//         filter: {
//           attributes: {
//             category: tokenCategory,
//           },
//         },
//       })),
//     },
//   },
// };

// StyleDictionary.registerFormat({
//   name: "custom/cjsmodule",
//   formatter: function({ dictionary }) {
//     return `module.exports = {${dictionary.allTokens.map(
//       (token) => `\n\t${token.name}: "${token.value}"`
//     )}\n};`;
//   },
// });

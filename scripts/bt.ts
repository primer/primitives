import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary.js'

const buildOptions = {
  prefix: undefined,
  buildPath: 'dist/',
}

const sizeFiles = [
  'src/tokens/base/size/size.json',
  'src/tokens/functional/size/breakpoints.json',
  'src/tokens/functional/size/size.json',
  'src/tokens/functional/size/border.json',
  // 'src/tokens/functional/size/size-fine.json',
  // 'src/tokens/functional/size/size-coarse.json',
]
//

const sizeExtended = await PrimerStyleDictionary.extend({
  log: {
    warnings: 'warn', // "error", "warn", "disabled" -> "warn" is default
    verbosity: 'verbose', // "silent", "default", "verbose" -> "default" is default
  },
  source: sizeFiles,
  include: sizeFiles,
  platforms: {
    figma: {
      prefix: 'TESTPREF',
      buildPath: 'dist/',
      transforms: [
        // 'color/rgbaFloat',
        // 'fontFamily/figma',
        // 'float/pixelUnitless',
        // 'dimension/pixelUnitless',
        // // 'border/figma',
        // // 'typography/figma',
        // 'fontWeight/number',
        // 'figma/attributes',
        // 'name/pathToFigma',
      ],
      options: {
        useDtcg: true,
        basePxFontSize: 16,
        fontFamilies: {
          'fontStack/system': 'SF Pro Text',
          'fontStack/sansSerif': 'SF Pro Text',
          'fontStack/sansSerifDisplay': 'SF Pro Display',
          'fontStack/monospace': 'SF Mono',
        },
      },
      files: [
        {
          destination: 'figma/dimension/dimension.css',
          format: 'css/advanced',
          options: {
            outputReferences: true,
            mode: '',
          },
        },
      ],
    },
  },
})
await sizeExtended.buildAllPlatforms()

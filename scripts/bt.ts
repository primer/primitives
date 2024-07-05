import type {Filter, TransformedToken} from 'style-dictionary/types'
import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary.js'
import {figma} from '../src/platforms/index.js'

const validFigmaToken: Filter['filter'] = (token: TransformedToken) => {
  console.log(token, 'WOOOO')
  // return true
  const validTypes = ['color', 'dimension', 'shadow', 'fontWeight', 'fontFamily', 'number']
  // is a siource token, not an included one
  // if (!isSource(token)) return false

  if (`${token.value}`.substring(token.value.length - 2) === 'em') return false
  // has a collection attribute
  if (
    !('$extensions' in token) ||
    !('org.primer.figma' in token.$extensions) ||
    !('collection' in token.$extensions['org.primer.figma'])
  )
    return false
  // is a color or dimension type
  return validTypes.includes(token.$type)
}

PrimerStyleDictionary.registerFilter({
  name: 'validFigmaToken',
  filter: validFigmaToken,
})

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
  source: sizeFiles,
  include: sizeFiles,
  platforms: {
    figma: {
      prefix: undefined,
      buildPath: 'dist/',
      transforms: [
        'color/rgbaFloat',
        'fontFamily/figma',
        'float/pixelUnitless',
        'dimension/pixelUnitless',
        // 'border/figma',
        // 'typography/figma',
        'fontWeight/number',
        'figma/attributes',
        'name/pathToFigma',
      ],
      options: {
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
          destination: 'figma/dimension/dimension.json',
          filter: 'validFigmaToken',
          format: `json/figma`,
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

import type {PlatformInitializer} from '../types/platformInitializer.js'
import {isSource} from '../filters/index.js'
import type {TransformedToken, PlatformConfig, Config} from 'style-dictionary/types'

const validFigmaToken = async (token: TransformedToken, options: Config) => {
  const valueProp = options.usesDtcg ? '$value' : 'value'
  const validTypes = ['color', 'dimension', 'shadow', 'fontWeight', 'fontFamily', 'number']
  // is a siource token, not an included one
  if (!isSource(token) || !token.$type) return false

  if (`${token[valueProp]}`.substring(token[valueProp].length - 2) === 'em') return false
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

export const figma: PlatformInitializer = (outputFile, prefix, buildPath, options): PlatformConfig => ({
  prefix,
  buildPath,
  preprocessors: ['themeOverrides'],
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
    // should this object be spread here?
    ...options,
    themeOverrides: {
      theme: options?.theme,
    },
  },
  files: [
    {
      destination: outputFile,
      filter: (token: TransformedToken, config: Config) => {
        return validFigmaToken(token, config)
      },
      format: `json/figma`,
      options: {
        outputReferences: true,
        theme: options?.theme,
      },
    },
  ],
})

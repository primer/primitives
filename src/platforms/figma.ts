import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '../types/PlatformInitializer'
import {isSource} from '../filters'

const validFigmaToken = (token: StyleDictionary.TransformedToken) => {
  const validTypes = ['color', 'dimension', 'shadow', 'fontWeight', 'fontFamily', 'number']
  // is a siource token, not an included one
  if (!isSource(token)) return false

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

export const figma: PlatformInitializer = (outputFile, prefix, buildPath, options): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: [
    'color/rgbaFloat',
    'name/pathToFigma',
    // 'name/pathToSlashNotation',
    'figma/attributes',
    'fontFamily/figma',
    'float/pixelUnitless',
    'dimension/pixelUnitless',
    // 'border/figma',
    // 'typography/figma',
    'fontWeight/number',
  ],
  options: {
    basePxFontSize: 16,
    fontFamilies: {
      'fontStack/system': 'SF Pro Text',
      'fontStack/sansSerif': 'SF Pro Text',
      'fontStack/sansSerifDisplay': 'SF Pro Display',
      'fontStack/monospace': 'SF Mono',
    },
    ...options,
  },
  files: [
    {
      destination: outputFile,
      filter: validFigmaToken,
      format: `json/figma`,
      options: {
        outputReferences: true,
        mode: options?.mode,
      },
    },
  ],
})

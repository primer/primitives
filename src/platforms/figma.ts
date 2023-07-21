import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'
import {isSource} from '~/src/filters'

const validFigmaToken = (token: StyleDictionary.TransformedToken) => {
  const validTypes = ['color', 'dimension']
  // is a siource token, not an included one
  if (!isSource(token)) return false
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
    'dimension/pixelUnitless',
    // 'border/figma',
    // 'typography/figma',
    'fontWeight/number',
  ],
  options: {
    basePxFontSize: 16,
    ...options,
  },
  files: [
    {
      destination: outputFile,
      filter: validFigmaToken,
      format: `json/figma`,
      options: {
        outputReferences: true,
      },
    },
  ],
})

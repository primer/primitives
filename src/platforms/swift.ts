import type StyleDictionary from 'style-dictionary'
import type {PlatformInitializer} from '~/src/types/PlatformInitializer'

export const swift: PlatformInitializer = (outputFile, prefix, buildPath, options): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: [],
  options: {
    colorsetOutputPath: 'swift/',
    colorsetName: 'Colors',
    colormode: options?.colormode,
    highContrast: options?.highContrast,
  },
  actions: ['iOS/colorsets'],
})

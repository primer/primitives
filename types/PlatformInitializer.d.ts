import StyleDictionary from 'style-dictionary'

export type PlatformInitializer = (
  outputFile: string,
  prefix: string | undefined,
  buildPath: string,
  options?: StyleDictionary.Options
) => StyleDictionary.Platform

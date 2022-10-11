import StyleDictionary from 'style-dictionary'

export type StyleDictionaryConfigGenerator = (
  outputName: string,
  source: string[],
  include: string[],
  options?: StyleDictionary.Options
) => StyleDictionary.Config

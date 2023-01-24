import type StyleDictionary from 'style-dictionary'

export type ConfigGeneratorOptions = {
  buildPath: string
  prefix?: string
  themed?: boolean
}

export type StyleDictionaryConfigGenerator = (
  outputName: string,
  source: string[],
  include: string[],
  options: ConfigGeneratorOptions,
) => StyleDictionary.Config

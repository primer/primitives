import type {Config, PlatformConfig} from 'style-dictionary/types'

export type ConfigGeneratorOptions = {
  buildPath: string
  prefix?: string
  themed?: boolean
  theme?: string | [string | undefined, string | undefined]
}

export type StyleDictionaryConfigGenerator = (
  outputName: string,
  source: string[],
  include: string[],
  options: ConfigGeneratorOptions,
  platforms?: Record<string, PlatformConfig | undefined>,
) => Config

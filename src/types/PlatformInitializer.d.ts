import type {LocalOptions, PlatformConfig} from 'style-dictionary/types'

export type PlatformInitializer = (
  // the filename including the extension (e.g. `.css`) and any subfolders after the buildPath (e.g. `functional`)
  outputFile: string,
  // the prefix is prepended to all tokens
  prefix: string | undefined,
  // the build path in which the `outputFile` is placed
  buildPath: string,
  options?: LocalOptions,
) => PlatformConfig

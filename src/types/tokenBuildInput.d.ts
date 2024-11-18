export type TokenBuildInput = {
  // The output filename WITHOUT the extension
  filename: string
  // Array of `filepaths` to token files that should be converted and included in the output. Accepts relative or glob paths.
  source: string[]
  // The mode of the theme
  theme?: string
  // Array of `filepaths` to token fils that should NOT be included in the output, but should be available to reference during compilation e.g. base color scales
  include: string[]
}

type TokenBuildInputItem = {
  // Used as the filename for the generated file (e.g. `dark`.css), extension will be appended
  outputName: string
  // Array of `filepaths` to token files that should be converted and included in the output
  source: string[]
  // Array of `filepaths` to token fils that should NOT be included in the output, but should be available to reference during compilation e.g. base color scales
  include: string[]
}

export type TokenBuildInputArray = TokenBuildInputItem[]

import type {PlatformInitializer} from '../types/platformInitializer.js'
import {hasLlmExtensions} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const llmGuidelines: PlatformInitializer = (
  outputFile: string,
  prefix: string | undefined,
  buildPath: string,
): PlatformConfig => ({
  prefix,
  buildPath,
  preprocessors: ['inheritGroupProperties'],
  transforms: ['name/pathToKebabCase'],
  files: [
    {
      destination: outputFile,
      format: 'json/llm-guidelines',
      filter: hasLlmExtensions,
      options: {
        outputReferences: false,
      },
    },
  ],
})

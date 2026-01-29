import {PrimerStyleDictionary} from '../src/primerStyleDictionary.js'
import {llmGuidelines} from '../src/platforms/index.js'

/**
 * Configuration for the design token spec file
 */
export const DESIGN_TOKENS_SPEC_FILE = 'DESIGN_TOKENS_SPEC.md'

/**
 * Header comment to be added to CSS output files
 */
export const CSS_SPEC_HEADER = `/**
 * @spec See /${DESIGN_TOKENS_SPEC_FILE} for naming logic and semantic pairings.
 * @rule Never use raw values (hex/px). Use semantic tokens ONLY.
 */
`

/**
 * Source files for LLM guidelines build
 * Uses glob patterns - tokens are filtered by hasLlmExtensions filter
 */
export const LLM_SOURCE_FILES = [
  'src/tokens/base/**/*.json5',
  'src/tokens/functional/**/*.json5',
  'src/tokens/component/*.json5',
]

/**
 * Include files for LLM guidelines build (for resolving references)
 */
export const LLM_INCLUDE_FILES = ['src/tokens/base/**/*.json5']

/**
 * Build LLM guidelines markdown file
 * @param buildPath - Output directory path (default: './')
 */
export const buildLlmGuidelines = async (buildPath = './'): Promise<void> => {
  try {
    const llmSD = await PrimerStyleDictionary.extend({
      source: LLM_SOURCE_FILES,
      include: LLM_INCLUDE_FILES,
      platforms: {
        llmGuidelines: llmGuidelines(DESIGN_TOKENS_SPEC_FILE, undefined, buildPath),
      },
      log: {
        warnings: 'disabled',
        verbosity: 'silent',
        errors: {brokenReferences: 'throw'},
      },
    })
    await llmSD.buildAllPlatforms()
    console.log(`✅ LLM guidelines built: ${buildPath}${DESIGN_TOKENS_SPEC_FILE}`)
  } catch (e) {
    console.error('🛑 Error trying to build LLM guidelines output:', e)
  }
}

/** -----------------------------------
 * Run build script
 * ----------------------------------- */
await buildLlmGuidelines()

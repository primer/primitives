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
 * Build LLM guidelines markdown file
 */
export const buildLlmGuidelines = async (): Promise<void> => {
  try {
    const llmSD = await PrimerStyleDictionary.extend({
      source: [
        'src/tokens/functional/size/border.json5',
        'src/tokens/functional/size/radius.json5',
        'src/tokens/functional/shadow/shadow.json5',
        'src/tokens/functional/color/bgColor.json5',
        'src/tokens/functional/typography/font-stack.json5',
        'src/tokens/functional/typography/typography.json5',
        'src/tokens/base/motion/easing.json5',
        'src/tokens/functional/border/border.json5',
        'src/tokens/functional/color/control.json5',
        'src/tokens/functional/size/size.json5',
      ],
      include: [
        'src/tokens/base/**/*.json5',
        'src/tokens/functional/color/*.json5',
        'src/tokens/functional/border/*.json5',
        'src/tokens/functional/typography/*.json5',
        'src/tokens/component/*.json5',
      ],
      platforms: {
        llmGuidelines: llmGuidelines(DESIGN_TOKENS_SPEC_FILE, undefined, './'),
      },
      log: {
        warnings: 'disabled',
        verbosity: 'silent',
        errors: {brokenReferences: 'throw'},
      },
    })
    await llmSD.buildAllPlatforms()
  } catch (e) {
    console.error('🛑 Error trying to build LLM guidelines output:', e)
  }
}

/** -----------------------------------
 * Run build script
 * ----------------------------------- */
await buildLlmGuidelines()

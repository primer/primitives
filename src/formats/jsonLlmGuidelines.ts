import {format} from 'prettier'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {sortByName} from 'style-dictionary/utils'

interface LlmGuideline {
  description?: string
  usage?: string[]
  rules?: string
}

/**
 * @description Outputs a flat JSON file with LLM token guidelines, extracting
 * description from $description and usage/rules from $extensions['org.primer.llm']
 * @param FormatFnArguments
 * @returns formatted json `string`
 */
export const jsonLlmGuidelines: FormatFn = async ({dictionary}: FormatFnArguments) => {
  const tokens = dictionary.allTokens.sort(sortByName)

  const llmGuidelines: Record<string, LlmGuideline> = {}

  for (const token of tokens) {
    const llmExt = token.$extensions?.['org.primer.llm'] as {usage?: string[]; rules?: string} | undefined
    if (!llmExt) continue

    const guideline: LlmGuideline = {}

    if (token.$description && typeof token.$description === 'string') {
      guideline.description = token.$description
    }
    if (llmExt.usage && Array.isArray(llmExt.usage)) {
      guideline.usage = llmExt.usage
    }
    if (llmExt.rules && typeof llmExt.rules === 'string') {
      guideline.rules = llmExt.rules
    }

    if (Object.keys(guideline).length > 0) {
      llmGuidelines[token.name] = guideline
    }
  }

  const output = JSON.stringify(llmGuidelines, null, 2)
  return format(output, {parser: 'json', printWidth: 120})
}

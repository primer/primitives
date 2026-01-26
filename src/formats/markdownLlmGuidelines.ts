import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {sortByName} from 'style-dictionary/utils'

interface LlmGuideline {
  name: string
  category: string
  description?: string
  usage?: string[]
  rules?: string
}

/**
 * Extracts category from token name
 * - For "base-*" tokens, uses second word (e.g., "base-easing-ease" -> "easing")
 * - Otherwise uses first word (e.g., "bgColor-danger-emphasis" -> "bgColor")
 */
function extractCategory(tokenName: string): string {
  const parts = tokenName.split('-')
  if (parts[0] === 'base' && parts[1]) {
    return parts[1]
  }
  return parts[0] || 'other'
}

/**
 * Formats category name for display
 */
function formatCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    bgColor: 'background color',
    fgColor: 'text and foreground color',
  }
  if (categoryMap[category]) {
    return categoryMap[category]
  }
  // Capitalize first letter
  return category.charAt(0).toUpperCase() + category.slice(1)
}

/**
 * @description Outputs a markdown file with LLM token guidelines, extracting
 * description from $description and usage/rules from $extensions['org.primer.llm']
 * @param FormatFnArguments
 * @returns formatted markdown `string`
 */
export const markdownLlmGuidelines: FormatFn = async ({dictionary}: FormatFnArguments) => {
  const tokens = dictionary.allTokens.sort(sortByName)

  const guidelines: LlmGuideline[] = []

  for (const token of tokens) {
    const llmExt = token.$extensions?.['org.primer.llm'] as {usage?: string[]; rules?: string} | undefined
    if (!llmExt) continue

    const guideline: LlmGuideline = {
      name: token.name,
      category: extractCategory(token.name),
    }

    if (token.$description && typeof token.$description === 'string') {
      guideline.description = token.$description
    }
    if (llmExt.usage && Array.isArray(llmExt.usage)) {
      guideline.usage = llmExt.usage
    }
    if (llmExt.rules && typeof llmExt.rules === 'string') {
      guideline.rules = llmExt.rules
    }

    guidelines.push(guideline)
  }

  // Group by category
  const grouped: Record<string, LlmGuideline[]> = {}
  for (const guideline of guidelines) {
    if (!Object.hasOwn(grouped, guideline.category)) {
      grouped[guideline.category] = []
    }
    grouped[guideline.category].push(guideline)
  }

  // Build markdown output
  const lines: string[] = ['# Token Guidelines', '']

  for (const category of Object.keys(grouped).sort()) {
    lines.push(`## ${formatCategoryName(category)}`, '')

    for (const guideline of grouped[category]) {
      lines.push(`### ${guideline.name}`)
      if (guideline.description) {
        lines.push(guideline.description)
      }
      if (guideline.usage && guideline.usage.length > 0) {
        lines.push(`**Usage:** ${guideline.usage.join(', ')}`)
      }
      if (guideline.rules) {
        lines.push(`**Rules:** ${guideline.rules}`)
      }
      lines.push('')
    }
  }

  return lines.join('\n')
}

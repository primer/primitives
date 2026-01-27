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
 * Creates a unique key for grouping tokens with identical guidelines
 */
function createGuidelineKey(guideline: LlmGuideline): string {
  return JSON.stringify({
    description: guideline.description || '',
    usage: guideline.usage?.sort() || [],
    rules: guideline.rules || '',
  })
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
 * description from $description and usage/rules from $extensions['org.primer.llm'].
 * Tokens with identical guidelines (from group-level inheritance) are consolidated
 * into a single entry listing all token names.
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

    const categoryGuidelines = grouped[category]

    // Group tokens with identical guidelines
    const consolidatedGroups: Map<string, LlmGuideline[]> = new Map()
    for (const guideline of categoryGuidelines) {
      const key = createGuidelineKey(guideline)
      if (!consolidatedGroups.has(key)) {
        consolidatedGroups.set(key, [])
      }
      consolidatedGroups.get(key)!.push(guideline)
    }

    for (const [, guidelinesGroup] of consolidatedGroups) {
      const first = guidelinesGroup[0]

      if (guidelinesGroup.length > 1) {
        // Multiple tokens share the same guidelines - consolidate
        if (first.description) {
          lines.push(first.description)
          lines.push('')
        }
        if (first.usage && first.usage.length > 0) {
          lines.push(`**Usage:** ${first.usage.join(', ')}`)
        }
        if (first.rules) {
          lines.push(`**Rules:** ${first.rules}`)
        }
        lines.push('')
        lines.push(`**Tokens:** ${guidelinesGroup.map(g => g.name).join(', ')}`)
        lines.push('')
      } else {
        // Single token - output individually
        lines.push(`### ${first.name}`)
        if (first.description) {
          lines.push(first.description)
        }
        if (first.usage && first.usage.length > 0) {
          lines.push(`**Usage:** ${first.usage.join(', ')}`)
        }
        if (first.rules) {
          lines.push(`**Rules:** ${first.rules}`)
        }
        lines.push('')
      }
    }
  }

  return lines.join('\n')
}

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
 * Creates a key for grouping by usage and rules only (not description)
 */
function createUsageRulesKey(guideline: LlmGuideline): string {
  return JSON.stringify({
    usage: guideline.usage?.sort() || [],
    rules: guideline.rules || '',
  })
}

/**
 * Extracts a subcategory name from token names for headings
 * e.g., "border-accent-emphasis" -> "accent"
 */
function extractSubcategory(tokenNames: string[]): string | null {
  if (tokenNames.length < 2) return null

  // Get the second part of each token name
  const subcategories = tokenNames.map(name => {
    const parts = name.split('-')
    return parts[1] || null
  })

  // Check if all tokens share the same subcategory
  const uniqueSubcats = [...new Set(subcategories.filter(Boolean))]
  if (uniqueSubcats.length === 1) {
    return uniqueSubcats[0]!
  }
  return null
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

    // Check if all tokens in category share the same usage/rules AND there are multiple tokens
    const usageRulesKeys = new Set(categoryGuidelines.map(createUsageRulesKey))
    const sharedUsageRules = usageRulesKeys.size === 1 && categoryGuidelines.length > 1

    // If shared, output usage/rules once at category level
    if (sharedUsageRules) {
      const first = categoryGuidelines[0]
      if (first.usage && first.usage.length > 0) {
        lines.push(`**Usage:** ${first.usage.join(', ')}`)
      }
      if (first.rules) {
        lines.push(`**Rules:** ${first.rules}`)
      }
      lines.push('')
    }

    // Group tokens with identical guidelines (description + usage + rules)
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
      const tokenNames = guidelinesGroup.map(g => g.name)

      if (guidelinesGroup.length > 1) {
        // Multiple tokens share the same guidelines - consolidate
        const subcategory = extractSubcategory(tokenNames)
        if (subcategory) {
          lines.push(`### ${subcategory}`)
        } else {
          // No common subcategory - use "general" or skip heading if description serves as intro
          if (first.description && consolidatedGroups.size > 1) {
            lines.push(`### general`)
          }
        }
        if (first.description) {
          lines.push(first.description)
        }
        // Only show usage/rules if not already shown at category level
        if (!sharedUsageRules) {
          if (first.usage && first.usage.length > 0) {
            lines.push(`**Usage:** ${first.usage.join(', ')}`)
          }
          if (first.rules) {
            lines.push(`**Rules:** ${first.rules}`)
          }
        }
        lines.push(`**Tokens:** ${tokenNames.join(', ')}`)
        lines.push('')
      } else {
        // Single token - output individually
        lines.push(`### ${first.name}`)
        if (first.description) {
          lines.push(first.description)
        }
        // Only show usage/rules if not already shown at category level
        if (!sharedUsageRules) {
          if (first.usage && first.usage.length > 0) {
            lines.push(`**Usage:** ${first.usage.join(', ')}`)
          }
          if (first.rules) {
            lines.push(`**Rules:** ${first.rules}`)
          }
        }
        lines.push('')
      }
    }
  }

  return lines.join('\n')
}

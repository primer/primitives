import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {sortByName} from 'style-dictionary/utils'

interface LlmGuideline {
  name: string
  category: string
  description?: string
  usage?: string[]
  rules?: string
}

// Semantic sets that should be grouped into tables
const SEMANTIC_SETS = [
  'accent',
  'danger',
  'success',
  'attention',
  'severe',
  'open',
  'closed',
  'done',
  'neutral',
  'sponsors',
  'upsell',
]

// Categories that can be merged with wildcard patterns
const MERGEABLE_CATEGORIES = ['bgColor', 'borderColor', 'fgColor']

// Global semantic key definitions - these explain what each semantic color means
// so we don't repeat this info in every table row
const SEMANTIC_KEY: Record<string, {meaning: string; usage: string; textPairing: string}> = {
  danger: {
    meaning: 'Errors, destructive actions, critical warnings',
    usage: 'delete buttons, error messages, validation errors',
    textPairing: 'fg.danger (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  success: {
    meaning: 'Positive states, confirmations, completed actions',
    usage: 'merge buttons, success messages, confirmations',
    textPairing: 'fg.success (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  attention: {
    meaning: 'Warnings, caution states requiring user awareness',
    usage: 'warning banners, caution labels, pending states',
    textPairing: 'fg.attention (muted bg) or fg.default (emphasis bg, due to yellow contrast)',
  },
  severe: {
    meaning: 'High-priority warnings, more urgent than attention',
    usage: 'urgent messages, escalations, high-priority indicators',
    textPairing: 'fg.severe (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  accent: {
    meaning: 'Selected, focused, or highlighted interactive elements',
    usage: 'active states, selected rows, focus indicators',
    textPairing: 'fg.accent (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  neutral: {
    meaning: 'Non-semantic, secondary UI elements',
    usage: 'secondary buttons, tags, labels without status meaning',
    textPairing: 'fg.default (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  open: {
    meaning: 'Open/active state indicators (GitHub issues, PRs)',
    usage: 'open issues, open PRs, active discussions',
    textPairing: 'fg.open (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  closed: {
    meaning: 'Closed/declined state indicators (GitHub issues, PRs)',
    usage: 'closed issues, closed PRs, declined items',
    textPairing: 'fg.closed (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  done: {
    meaning: 'Completed/merged state indicators',
    usage: 'merged PRs, completed tasks, finished items',
    textPairing: 'fg.done (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  sponsors: {
    meaning: 'GitHub Sponsors content only',
    usage: 'sponsor buttons, funding prompts, sponsor cards',
    textPairing: 'fg.sponsors (muted bg) or fg.onEmphasis (emphasis bg)',
  },
  upsell: {
    meaning: 'Upgrade prompts, premium features, promotional content',
    usage: 'upgrade buttons, premium badges, promotional banners',
    textPairing: 'fg.upsell (muted bg) or fg.onEmphasis (emphasis bg)',
  },
}

// Typography role groupings for better LLM comprehension
const TYPOGRAPHY_ROLES: {role: string; description: string; patterns: string[]}[] = [
  {
    role: 'Headings',
    description: 'Title and display text styles for headings and hero sections.',
    patterns: ['text-title-', 'text-display-', 'text-subtitle-'],
  },
  {
    role: 'Body',
    description: 'Body text and caption styles for content and UI labels.',
    patterns: ['text-body-', 'text-caption-'],
  },
  {
    role: 'Code',
    description: 'Monospace text styles for code blocks and inline code.',
    patterns: ['text-code'],
  },
]

// Size scales for pattern-based compression
const SIZE_SCALES = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const DENSITY_SCALES = ['condensed', 'normal', 'spacious']

// Categories that use pattern-based compression for size tokens
const PATTERN_COMPRESSED_CATEGORIES: Record<
  string,
  {
    scaleNote: string
    sizeScale?: string[]
    densityScale?: string[]
    stateGroups?: string[] // Groups like 'checked', 'transparent' for control
  }
> = {
  control: {
    scaleNote: 'Use xsmall/small for dense layouts, medium for default UI, large/xlarge for prominent CTAs.',
    sizeScale: SIZE_SCALES,
    densityScale: DENSITY_SCALES,
    stateGroups: ['checked', 'transparent'],
  },
  controlStack: {
    scaleNote: 'Match gap size to control size. Use condensed for tight groupings, spacious for separated actions.',
    sizeScale: ['small', 'medium', 'large'],
    densityScale: ['condensed', 'spacious'],
  },
  overlay: {
    scaleNote:
      'Use xsmall/small for menus and tooltips, medium for dialogs, large/xlarge for complex modals or sheets.',
    sizeScale: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    densityScale: ['condensed', 'normal'],
  },
  spinner: {
    scaleNote: 'Use small for inline loading, medium for buttons/cards, large for full-page states.',
    sizeScale: ['small', 'medium', 'large'],
  },
  stack: {
    scaleNote: 'Use condensed for dense lists, normal for standard layouts, spacious for prominent sections.',
    densityScale: DENSITY_SCALES,
  },
}

/**
 * Outputs pattern-compressed tokens for a category
 */
function outputPatternCompressedCategory(
  category: string,
  tokens: LlmGuideline[],
  config: (typeof PATTERN_COMPRESSED_CATEGORIES)[string],
  lines: string[],
): void {
  const tokenNames = tokens.map(t => t.name)

  // Output scale note
  lines.push(`**Scale:** ${config.scaleNote}`)
  lines.push('')

  // Categorize tokens
  const sizeTokens: string[] = []
  const stateTokens: Map<string, string[]> = new Map()
  const otherTokens: string[] = []

  for (const name of tokenNames) {
    const rest = name.replace(`${category}-`, '')

    // Check if it's a state token (checked, transparent)
    let isStateToken = false
    if (config.stateGroups) {
      for (const state of config.stateGroups) {
        if (rest.startsWith(`${state}-`)) {
          if (!stateTokens.has(state)) {
            stateTokens.set(state, [])
          }
          stateTokens.get(state)!.push(rest.replace(`${state}-`, ''))
          isStateToken = true
          break
        }
      }
    }

    if (isStateToken) continue

    // Check if it's a size token (exact match on part, not substring)
    const parts = rest.split('-')
    const hasSizeScale = config.sizeScale?.some(s => parts.includes(s))
    if (hasSizeScale) {
      sizeTokens.push(name)
    } else {
      otherTokens.push(name)
    }
  }

  // Output size patterns
  if (sizeTokens.length > 0 && config.sizeScale) {
    // Group by property - handle both prefix-size and size-suffix patterns
    // e.g., control-medium-gap (size first) vs overlay-width-medium (size last)
    const byPattern: Map<string, Set<string>> = new Map()

    for (const name of sizeTokens) {
      const rest = name.replace(`${category}-`, '')
      const parts = rest.split('-')

      // Find exact size match in parts
      for (const size of config.sizeScale) {
        const sizeIdx = parts.indexOf(size)
        if (sizeIdx >= 0) {
          const prefix = parts.slice(0, sizeIdx).join('-')
          const suffix = parts.slice(sizeIdx + 1).join('-')

          // Create pattern key with placeholder for size
          let patternKey: string
          if (prefix && suffix) {
            patternKey = `${prefix}-[size]-${suffix}`
          } else if (prefix) {
            patternKey = `${prefix}-[size]`
          } else if (suffix) {
            patternKey = `[size]-${suffix}`
          } else {
            patternKey = '[size]'
          }

          if (!byPattern.has(patternKey)) {
            byPattern.set(patternKey, new Set())
          }
          byPattern.get(patternKey)!.add(size)
          break
        }
      }
    }

    // Group patterns by their size sets for compact output
    const bySizeSet: Map<string, string[]> = new Map()
    for (const [pattern, sizes] of byPattern) {
      const sizeKey = [...sizes].sort((a, b) => config.sizeScale!.indexOf(a) - config.sizeScale!.indexOf(b)).join(',')
      if (!bySizeSet.has(sizeKey)) {
        bySizeSet.set(sizeKey, [])
      }
      bySizeSet.get(sizeKey)!.push(pattern)
    }

    lines.push('**Size patterns:**')
    for (const [sizeKey, patterns] of bySizeSet) {
      const sizes = sizeKey.split(',')
      const sizeNotation = sizes.length > 1 ? `[${sizes.join(', ')}]` : sizes[0]

      // Replace [size] placeholder with actual size notation
      const formattedPatterns = patterns.map(p => p.replace('[size]', sizeNotation)).sort()

      // Try to merge patterns with same size but different properties
      if (formattedPatterns.length > 1) {
        // Check if they share a common structure
        const suffixes = formattedPatterns.map(p => {
          const escapedSizeNotation = sizeNotation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const match = p.match(new RegExp(`${escapedSizeNotation}-(.+)$`))
          return match ? match[1] : null
        })

        if (suffixes.every(s => s !== null)) {
          const uniqueSuffixes = [...new Set(suffixes)].sort()
          if (uniqueSuffixes.length > 1) {
            lines.push(`- \`${category}-${sizeNotation}-[${uniqueSuffixes.join(', ')}]\``)
          } else {
            lines.push(`- \`${category}-${sizeNotation}-${uniqueSuffixes[0]}\``)
          }
        } else {
          // Output each pattern separately
          for (const pattern of formattedPatterns) {
            lines.push(`- \`${category}-${pattern}\``)
          }
        }
      } else {
        lines.push(`- \`${category}-${formattedPatterns[0]}\``)
      }
    }
    lines.push('')
  }

  // Output state tokens
  if (stateTokens.size > 0) {
    lines.push('**State variants:**')
    for (const [state, suffixes] of stateTokens) {
      const sortedSuffixes = [...new Set(suffixes)].sort()
      const suffixNotation = sortedSuffixes.length > 1 ? `[${sortedSuffixes.join(', ')}]` : sortedSuffixes[0]
      lines.push(`- \`${category}-${state}-${suffixNotation}\``)
    }
    lines.push('')
  }

  // Output other tokens (colors, misc)
  if (otherTokens.length > 0) {
    // Group by type (bgColor, fgColor, etc.)
    const byType: Map<string, string[]> = new Map()

    for (const name of otherTokens) {
      const rest = name.replace(`${category}-`, '')
      const parts = rest.split('-')

      // Find the type (bgColor, fgColor, borderColor, etc.)
      let type = parts[0]
      let variant = parts.slice(1).join('-') || 'default'

      // Handle compound types like minTarget
      if (parts.length >= 2 && !['bgColor', 'fgColor', 'borderColor', 'iconColor'].includes(type)) {
        type = parts.slice(0, -1).join('-')
        variant = parts[parts.length - 1]
      }

      if (!byType.has(type)) {
        byType.set(type, [])
      }
      byType.get(type)!.push(variant)
    }

    lines.push('**Other tokens:**')
    for (const [type, variants] of [...byType.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      const sortedVariants = [...new Set(variants)].sort()
      if (sortedVariants.length > 1) {
        lines.push(`- \`${category}-${type}-[${sortedVariants.join(', ')}]\``)
      } else {
        lines.push(`- \`${category}-${type}-${sortedVariants[0]}\``)
      }
    }
    lines.push('')
  }
}

/**
 * Outputs pattern-compressed display color tokens
 * Extracts unique colors and properties to show as display-[color]-[property] pattern
 */
function outputDisplayColorPattern(tokens: LlmGuideline[], lines: string[]): void {
  const tokenNames = tokens.map(t => t.name)

  // Extract unique colors and properties
  const colors = new Set<string>()
  const properties = new Set<string>()
  const hasScale = new Set<string>()

  for (const name of tokenNames) {
    // Parse: display-{color}-{property} or display-{color}-scale-{n}
    const parts = name.replace('display-', '').split('-')
    if (parts.length < 2) continue

    const color = parts[0]
    colors.add(color)

    // Check for scale tokens (display-blue-scale-0)
    if (parts[1] === 'scale' && parts.length >= 3) {
      hasScale.add(parts[2])
    } else {
      // Property tokens (display-blue-bgColor-emphasis, display-blue-fgColor)
      const property = parts.slice(1).join('-')
      properties.add(property)
    }
  }

  // Sort colors alphabetically
  const sortedColors = [...colors].sort()
  const sortedProperties = [...properties].sort((a, b) => {
    // Sort by type first (bgColor, borderColor, fgColor)
    const typeOrder = ['bgColor-emphasis', 'bgColor-muted', 'borderColor-emphasis', 'borderColor-muted', 'fgColor']
    const aIdx = typeOrder.indexOf(a)
    const bIdx = typeOrder.indexOf(b)
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
    if (aIdx !== -1) return -1
    if (bIdx !== -1) return 1
    return a.localeCompare(b)
  })

  // Output pattern with variables
  lines.push('**Pattern:** `display-[color]-[property]`')
  lines.push('')
  lines.push('**Variables:**')
  lines.push(`- **color:** ${sortedColors.join(' | ')}`)
  lines.push(`- **property:** ${sortedProperties.join(' | ')}`)
  lines.push('')

  // Output scale pattern if present
  if (hasScale.size > 0) {
    const sortedScales = [...hasScale].sort((a, b) => parseInt(a) - parseInt(b))
    lines.push('**Scale pattern:** `display-[color]-scale-[n]`')
    lines.push(`- **n:** ${sortedScales.join(' | ')}`)
    lines.push('')
    lines.push('*Scale 0-2: lighter (backgrounds), 3-5: mid-tones, 6-9: darker (foregrounds/borders)*')
    lines.push('')
  }
}

// Human-readable category names and descriptions
const CATEGORY_INFO: Record<string, {name: string; description: string}> = {
  bgColor: {
    name: 'Background Colors',
    description: 'Background color tokens for surfaces, containers, and UI elements.',
  },
  borderColor: {
    name: 'Border Colors',
    description: 'Border color tokens for boundaries, dividers, and outlines.',
  },
  fgColor: {
    name: 'Foreground Colors',
    description: 'Text and icon color tokens.',
  },
  borderRadius: {name: 'Border Radius', description: 'Corner radius tokens for rounded elements.'},
  borderWidth: {name: 'Border Width', description: 'Border thickness tokens.'},
  border: {name: 'Border', description: 'Composite border tokens combining color, width, and style.'},
  control: {name: 'Controls', description: 'Tokens for interactive controls like buttons, inputs, and selects.'},
  controlKnob: {
    name: 'Control Knob',
    description: 'Tokens for toggle switch knobs (the circular handle that moves along the track).',
  },
  controlStack: {
    name: 'Control Stack',
    description: 'Gap tokens for groups of controls arranged in a row or column.',
  },
  controlTrack: {
    name: 'Control Track',
    description: 'Tokens for toggle switch tracks (the background rail that the knob slides along).',
  },
  data: {
    name: 'Data Visualization',
    description:
      'Color tokens for charts, graphs, and diagrams. Use emphasis variants for lines/bars, muted variants for fills.',
  },
  display: {
    name: 'Display Colors',
    description:
      'Decorative colors for categorization without semantic meaning. Use for labels, tags, avatars, and user-assigned colors. Do NOT use for success/error/warning—use semantic colors instead.',
  },
  easing: {name: 'Easing', description: 'Animation easing function tokens.'},
  focus: {name: 'Focus', description: 'Focus ring and outline tokens for keyboard navigation accessibility.'},
  fontStack: {name: 'Font Stacks', description: 'Font family tokens.'},
  outline: {name: 'Outline', description: 'Outline tokens for focus indicators.'},
  overlay: {name: 'Overlay', description: 'Tokens for modals, dialogs, popovers, and dropdown menus.'},
  selection: {name: 'Selection', description: 'Tokens for text selection highlights.'},
  shadow: {name: 'Shadow', description: 'Box shadow tokens for elevation and depth.'},
  spinner: {name: 'Spinner', description: 'Loading spinner size and stroke tokens.'},
  stack: {name: 'Stack', description: 'Spacing tokens for Stack layout components.'},
  text: {name: 'Typography', description: 'Text style shorthand tokens for consistent typography across the UI.'},
}

/**
 * Densifies description by removing filler words
 */
function densifyDescription(description: string): string {
  return description
    .replace(/^Use this for\s+/i, 'For ')
    .replace(/^This is used for\s+/i, 'For ')
    .replace(/^Used for\s+/i, 'For ')
    .replace(/^Use for\s+/i, 'For ')
    .replace(/^This is\s+/i, '')
    .replace(/^This\s+/i, '')
}

/**
 * Shortens rules by applying key shorthands
 */
function shortenRules(rules: string): string {
  return rules
    .replace(/Pair with\s+/gi, 'Pair -> ')
    .replace(/\bfgColor\./g, 'fg.')
    .replace(/\bbgColor\./g, 'bg.')
    .replace(/\bborderColor\./g, 'border.')
}

/**
 * Limits usage to max 3 most relevant items
 */
function limitUsage(usage: string[]): string[] {
  if (usage.length <= 3) return usage
  return usage.slice(0, 3)
}

/**
 * Creates a unique key for grouping tokens with identical guidelines within a category
 */
function createGuidelineKey(guideline: LlmGuideline): string {
  return JSON.stringify({
    category: guideline.category,
    description: guideline.description || '',
    usage: guideline.usage?.sort() || [],
    rules: guideline.rules || '',
  })
}

/**
 * Extracts category from token name
 */
function extractCategory(tokenName: string): string {
  const parts = tokenName.split('-')
  if (parts[0] === 'base' && parts[1]) {
    return parts[1]
  }
  return parts[0] || 'other'
}

/**
 * Extracts semantic subcategory from token name (e.g., "bgColor-danger-emphasis" -> "danger")
 */
function extractSemanticSubcategory(tokenName: string): string | null {
  const parts = tokenName.split('-')
  if (parts.length >= 2) {
    const subcat = parts[1]
    if (SEMANTIC_SETS.includes(subcat)) {
      return subcat
    }
  }
  return null
}

/**
 * Extracts variant from token name (e.g., "bgColor-danger-emphasis" -> "emphasis")
 */
function extractVariant(tokenName: string): string | null {
  const parts = tokenName.split('-')
  if (parts.length >= 3) {
    return parts.slice(2).join('-')
  }
  return null
}

/**
 * Formats category name for display
 */
function formatCategoryName(category: string): string {
  if (category in CATEGORY_INFO) {
    return CATEGORY_INFO[category].name
  }
  return category.charAt(0).toUpperCase() + category.slice(1)
}

/**
 * Gets category description if available
 */
function getCategoryDescription(category: string): string | null {
  if (category in CATEGORY_INFO) {
    return CATEGORY_INFO[category].description
  }
  return null
}

/**
 * Creates a key for grouping by usage and rules only
 */
function createUsageRulesKey(guideline: LlmGuideline): string {
  return JSON.stringify({
    usage: guideline.usage?.sort() || [],
    rules: guideline.rules || '',
  })
}

/**
 * Creates a key for cross-category pattern matching
 */
function createPatternKey(description: string, rules: string): string {
  const normalizedDesc = description
    .replace(/background/gi, 'COLOR_TYPE')
    .replace(/border/gi, 'COLOR_TYPE')
    .replace(/text/gi, 'COLOR_TYPE')
    .replace(/foreground/gi, 'COLOR_TYPE')
  const normalizedRules = rules
    .replace(/bgColor/g, 'COLOR_TOKEN')
    .replace(/borderColor/g, 'COLOR_TOKEN')
    .replace(/fgColor/g, 'COLOR_TOKEN')
  return JSON.stringify({description: normalizedDesc, rules: normalizedRules})
}

/**
 * Extracts a subcategory name from token names for headings
 */
function extractSubcategory(tokenNames: string[]): string | null {
  if (tokenNames.length < 2) return null
  const subcategories = tokenNames.map(name => {
    const parts = name.split('-')
    return parts[1] || null
  })
  const uniqueSubcats = [...new Set(subcategories.filter(Boolean))]
  if (uniqueSubcats.length === 1) {
    return uniqueSubcats[0]!
  }
  return null
}

/**
 * Outputs typography tokens grouped by role (Headings, Body, Code)
 */
function outputTypographyByRole(tokens: LlmGuideline[], lines: string[]): void {
  for (const {role, description, patterns} of TYPOGRAPHY_ROLES) {
    const roleTokens = tokens.filter(t => patterns.some(p => t.name.startsWith(p)))
    if (roleTokens.length === 0) continue

    lines.push(`### ${role}`)
    lines.push('')
    lines.push(description)
    lines.push('')

    // Create table for role tokens
    const headers = ['Token', 'Description', 'U:', 'R:']
    lines.push(`| ${headers.join(' | ')} |`)
    lines.push(`|${headers.map(() => '---').join('|')}|`)

    for (const token of roleTokens.sort((a, b) => a.name.localeCompare(b.name))) {
      const cells = [
        `**${token.name}**`,
        escapeTableCell(token.description || '-'),
        token.usage?.join(', ') || '-',
        escapeTableCell(token.rules || '-'),
      ]
      lines.push(`| ${cells.join(' | ')} |`)
    }
    lines.push('')
  }
}

/**
 * Escapes pipe characters for markdown tables
 */
function escapeTableCell(text: string): string {
  // First escape backslashes, then escape pipe characters, to avoid
  // existing backslashes altering how pipes are interpreted.
  return text.replace(/\\/g, '\\\\').replace(/\|/g, '\\|')
}

/**
 * @description Outputs a hyper-optimized markdown file with LLM token guidelines.
 * Optimizations:
 * - Bracket notation for tokens with identical guidelines
 * - Global category rules extracted to paragraph
 * - Shortened keys (U:, R:, Pair ->)
 * - Max 3 usage items
 * - No boilerplate
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
      guideline.description = densifyDescription(token.$description)
    }
    if (llmExt.usage && Array.isArray(llmExt.usage)) {
      guideline.usage = limitUsage(llmExt.usage)
    }
    if (llmExt.rules && typeof llmExt.rules === 'string') {
      guideline.rules = shortenRules(llmExt.rules)
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

  const lines: string[] = [
    '# Primer Design Token Guidelines',
    '',
    '> Metadata: This file is a Dictionary of tokens. For usage rules, contrast requirements, and motion logic, refer to DESIGN_TOKENS_GUIDE.md.',
    '',
    'Reference for using GitHub Primer design tokens.',
    '',
    '## Legend',
    '',
    '- **U:** Use cases',
    '- **R:** Token-specific rules (see Semantic Key for general meaning)',
    '- **emphasis** variant: Strong/prominent version, use `fg.onEmphasis` for text',
    '- **muted** variant: Subtle version, use matching `fg.*` color for text',
    '- **[a, b]** Bracket notation groups related tokens',
    '',
    '## Semantic Key',
    '',
    'These semantic meanings apply across all token types (bgColor, borderColor, fgColor, border).',
    '',
    '| Semantic | Meaning | Example Usage | Text Pairing |',
    '|---|---|---|---|',
  ]

  // Output semantic key table
  for (const [key, info] of Object.entries(SEMANTIC_KEY)) {
    lines.push(`| **${key}** | ${info.meaning} | ${info.usage} | ${info.textPairing} |`)
  }
  lines.push('')

  // Collect semantic tokens across mergeable categories for cross-category patterns
  const semanticTokensByPattern: Map<
    string,
    {subcategory: string; variant: string; categories: string[]; guideline: LlmGuideline}[]
  > = new Map()

  for (const category of MERGEABLE_CATEGORIES) {
    if (!(category in grouped)) continue
    for (const guideline of grouped[category]) {
      const subcategory = extractSemanticSubcategory(guideline.name)
      const variant = extractVariant(guideline.name)
      if (subcategory && variant) {
        const patternKey = createPatternKey(guideline.description || '', guideline.rules || '')
        const key = `${subcategory}-${variant}-${patternKey}`
        if (!semanticTokensByPattern.has(key)) {
          semanticTokensByPattern.set(key, [])
        }
        semanticTokensByPattern.get(key)!.push({subcategory, variant, categories: [category], guideline})
      }
    }
  }

  // Find patterns spanning multiple categories (must have entries from at least 2 different categories)
  const mergedEntries: {subcategory: string; variant: string; guideline: LlmGuideline}[] = []
  const mergedTokens = new Set<string>()

  for (const [, entries] of semanticTokensByPattern) {
    // Get unique categories in this pattern
    const uniqueCategories = new Set(entries.map(e => e.categories[0]))
    if (uniqueCategories.size > 1) {
      // Only merge if pattern spans multiple categories
      mergedEntries.push({
        subcategory: entries[0].subcategory,
        variant: entries[0].variant,
        guideline: entries[0].guideline,
      })
      for (const e of entries) {
        mergedTokens.add(`${e.categories[0]}-${e.subcategory}-${e.variant}`)
      }
    }
  }

  // Output compact semantic color reference
  // Group by variant (emphasis/muted) and list all applicable semantics
  if (mergedEntries.length > 0) {
    lines.push('## Semantic Colors')
    lines.push('')
    lines.push('Apply to `bgColor-*`, `borderColor-*`, `fgColor-*`, and `border-*` tokens.')
    lines.push('Refer to Semantic Key above for meaning and text pairings.')
    lines.push('')

    // Group entries by variant
    const byVariant: Map<string, string[]> = new Map()
    for (const entry of mergedEntries) {
      if (!byVariant.has(entry.variant)) {
        byVariant.set(entry.variant, [])
      }
      byVariant.get(entry.variant)!.push(entry.subcategory)
    }

    // Output as compact list
    lines.push('| Pattern | Semantics |')
    lines.push('|---|---|')
    for (const [variant, semantics] of byVariant) {
      const sortedSemantics = [...new Set(semantics)].sort()
      lines.push(`| **\\*-[${sortedSemantics.join(', ')}]-${variant}** | See Semantic Key |`)
    }
    lines.push('')

    // Add special notes for tokens with unique constraints
    lines.push('**Special cases:**')
    lines.push('- `*-attention-emphasis`: Use `fg.default` for text (yellow has poor contrast)')
    lines.push('- `*-sponsors-*`: GitHub Sponsors only, not for general pink UI')
    lines.push('- `*-upsell-*`: Promotional content only, not for regular features')
    lines.push('- `*-open/*-closed/*-done`: GitHub issue/PR states specifically')
    lines.push('')
  }

  for (const category of Object.keys(grouped).sort()) {
    const categoryGuidelines = grouped[category]

    // Separate semantic and non-semantic tokens
    const semanticTokens: LlmGuideline[] = []
    const nonSemanticTokens: LlmGuideline[] = []

    for (const guideline of categoryGuidelines) {
      if (mergedTokens.has(guideline.name)) continue
      const subcategory = extractSemanticSubcategory(guideline.name)
      if (subcategory) {
        semanticTokens.push(guideline)
      } else {
        nonSemanticTokens.push(guideline)
      }
    }

    if (semanticTokens.length === 0 && nonSemanticTokens.length === 0) continue

    lines.push(`## ${formatCategoryName(category)}`)

    // Special handling for typography - group by role
    if (category === 'text') {
      const categoryDesc = getCategoryDescription(category)
      if (categoryDesc) {
        lines.push('')
        lines.push(categoryDesc)
      }
      lines.push('')
      outputTypographyByRole(nonSemanticTokens, lines)
      continue
    }

    // Special handling for display colors - use pattern compression
    if (category === 'display') {
      const categoryDesc = getCategoryDescription(category)
      if (categoryDesc) {
        lines.push('')
        lines.push(categoryDesc)
      }
      lines.push('')

      // Get usage and rules from the first token with LLM metadata
      const firstWithMeta = nonSemanticTokens.find(t => t.usage || t.rules)
      if (firstWithMeta) {
        if (firstWithMeta.usage && firstWithMeta.usage.length > 0) {
          lines.push(`**U:** ${firstWithMeta.usage.join(', ')}`)
        }
        if (firstWithMeta.rules) {
          lines.push(`**R:** ${firstWithMeta.rules}`)
        }
        lines.push('')
      }

      outputDisplayColorPattern(nonSemanticTokens, lines)
      continue
    }

    // Special handling for pattern-compressed categories (control, overlay, stack, spinner)
    if (category in PATTERN_COMPRESSED_CATEGORIES) {
      const categoryDesc = getCategoryDescription(category)
      if (categoryDesc) {
        lines.push('')
        lines.push(categoryDesc)
      }
      lines.push('')

      // Include semantic tokens in the output for pattern compression
      const allTokens = [...semanticTokens, ...nonSemanticTokens]
      outputPatternCompressedCategory(category, allTokens, PATTERN_COMPRESSED_CATEGORIES[category], lines)
      continue
    }

    // Determine best category description: prefer token description for single-group categories
    const consolidatedGroupsPreview: Map<string, LlmGuideline[]> = new Map()
    for (const guideline of nonSemanticTokens) {
      const key = createGuidelineKey(guideline)
      if (!consolidatedGroupsPreview.has(key)) {
        consolidatedGroupsPreview.set(key, [])
      }
      consolidatedGroupsPreview.get(key)!.push(guideline)
    }

    // Use token description if there's only one group with multiple tokens that has a description
    const singleGroupWithDesc =
      consolidatedGroupsPreview.size === 1 &&
      nonSemanticTokens.length > 1 &&
      nonSemanticTokens[0].description &&
      semanticTokens.length === 0
    const categoryDesc = singleGroupWithDesc ? nonSemanticTokens[0].description : getCategoryDescription(category)

    if (categoryDesc) {
      lines.push('')
      lines.push(categoryDesc)
    }
    lines.push('')

    // Output semantic tokens as compact reference (details in Semantic Key)
    // Track if we've output shared usage/rules to avoid duplication
    let outputSharedUsage = false
    let outputSharedRules = false

    if (semanticTokens.length > 0) {
      // Group semantic tokens by variant for compact display
      const byVariant: Map<string, string[]> = new Map()
      const noVariantTokens: string[] = [] // For single-level semantic tokens like fgColor-danger

      for (const token of semanticTokens) {
        const subcategory = extractSemanticSubcategory(token.name)
        const variant = extractVariant(token.name)
        if (subcategory) {
          if (variant) {
            if (!byVariant.has(variant)) {
              byVariant.set(variant, [])
            }
            byVariant.get(variant)!.push(subcategory)
          } else {
            noVariantTokens.push(subcategory)
          }
        }
      }

      // Output compact semantic reference
      if (byVariant.size > 0 || noVariantTokens.length > 0) {
        lines.push('**Semantic tokens** (see Semantic Key for meaning):')
        // Tokens with variants (bgColor-danger-emphasis, etc.)
        for (const [variant, semantics] of byVariant) {
          const uniqueSemantics = [...new Set(semantics)].sort()
          lines.push(`- \`${category}-[${uniqueSemantics.join(', ')}]-${variant}\``)
        }
        // Single-level semantic tokens (fgColor-danger, etc.)
        if (noVariantTokens.length > 0) {
          const uniqueSemantics = [...new Set(noVariantTokens)].sort()
          lines.push(`- \`${category}-[${uniqueSemantics.join(', ')}]\``)
        }
        lines.push('')
        outputSharedUsage = true
        outputSharedRules = true
      }
    }

    // Check shared usage/rules for non-semantic tokens
    const usageRulesKeys = new Set(nonSemanticTokens.map(createUsageRulesKey))
    const sharedUsageRules = usageRulesKeys.size === 1 && nonSemanticTokens.length > 1

    // Only output if not already output for semantic tokens and content is different
    if (sharedUsageRules && nonSemanticTokens.length > 0) {
      const first = nonSemanticTokens[0]
      const shouldOutputUsage = first.usage && first.usage.length > 0 && !outputSharedUsage
      const shouldOutputRules = first.rules && !outputSharedRules

      if (shouldOutputUsage || shouldOutputRules) {
        if (shouldOutputUsage) {
          lines.push(`**U:** ${first.usage!.join(', ')}`)
        }
        if (shouldOutputRules) {
          lines.push(`**R:** ${first.rules}`)
        }
        lines.push('')
      }
    }

    // Group non-semantic tokens with identical guidelines (reuse preview)
    const consolidatedGroups = consolidatedGroupsPreview

    for (const [, guidelinesGroup] of consolidatedGroups) {
      const first = guidelinesGroup[0]
      const tokenNames = guidelinesGroup.map(g => g.name)

      if (guidelinesGroup.length > 1) {
        const subcategory = extractSubcategory(tokenNames)
        // Only add heading if there's a meaningful subcategory and multiple groups
        if (subcategory && consolidatedGroups.size > 1) {
          lines.push(`### ${subcategory}`)
        }
        // Only output description if no category description was already shown
        if (first.description && !categoryDesc) {
          lines.push(first.description)
        }
        if (!sharedUsageRules) {
          if (first.usage && first.usage.length > 0) {
            lines.push(`**U:** ${first.usage.join(', ')}`)
          }
          if (first.rules) {
            lines.push(`**R:** ${first.rules}`)
          }
        }
        lines.push(`**Tokens:** ${tokenNames.join(', ')}`)
        lines.push('')
      } else {
        lines.push(`### ${first.name}`)
        if (first.description) {
          lines.push(first.description)
        }
        if (!sharedUsageRules) {
          if (first.usage && first.usage.length > 0) {
            lines.push(`**U:** ${first.usage.join(', ')}`)
          }
          if (first.rules) {
            lines.push(`**R:** ${first.rules}`)
          }
        }
        lines.push('')
      }
    }
  }

  // Add final directive for AI
  lines.push('---')
  lines.push('')
  lines.push('**Final Directive for AI**:')
  lines.push(
    'Always cross-reference the `Semantic Key` at the top of this SPEC before confirming a token choice. If a specific component token is missing, derive it using the `[category]-[semantic]-[variant]` pattern.',
  )

  return lines.join('\n')
}

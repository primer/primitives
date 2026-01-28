import type {PreprocessedTokens, Preprocessor, DesignToken} from 'style-dictionary/types'

interface GroupProperties {
  $description?: string
  $extensions?: Record<string, unknown>
}

/**
 * Recursively walks tokens and inherits group-level properties to child tokens.
 * Group properties ($description, $extensions at group level) are merged into child tokens
 * that don't have their own values for those properties.
 *
 * Per W3C Design Tokens spec: https://www.designtokens.org/tr/drafts/format/#group-properties
 */
function inheritProperties(
  tokens: Record<string, unknown>,
  inheritedProps: GroupProperties = {},
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  // Extract group-level properties from current level
  const currentGroupProps: GroupProperties = {}
  if (typeof tokens.$description === 'string') {
    currentGroupProps.$description = tokens.$description
  }
  if (tokens.$extensions && typeof tokens.$extensions === 'object') {
    currentGroupProps.$extensions = tokens.$extensions as Record<string, unknown>
  }

  // Merge inherited with current (current takes precedence)
  const mergedProps: GroupProperties = {
    ...inheritedProps,
    ...currentGroupProps,
  }

  // Merge $extensions deeply
  if (inheritedProps.$extensions || currentGroupProps.$extensions) {
    mergedProps.$extensions = {
      ...inheritedProps.$extensions,
      ...currentGroupProps.$extensions,
    }
  }

  for (const [key, value] of Object.entries(tokens)) {
    // Skip group-level properties (they're inherited, not copied)
    if (key === '$description' || key === '$extensions') {
      continue
    }

    if (typeof value !== 'object' || value === null) {
      result[key] = value
      continue
    }

    const tokenValue = value as Record<string, unknown>

    // Check if this is a design token (has $value or value)
    if ('$value' in tokenValue || 'value' in tokenValue) {
      // It's a token - merge inherited properties
      const token = tokenValue as DesignToken

      // Only inherit $description if token doesn't have its own
      const inheritedDescription =
        !token.$description && mergedProps.$description ? mergedProps.$description : undefined

      // Merge $extensions (token-level takes precedence over inherited)
      let mergedExtensions = token.$extensions
      if (mergedProps.$extensions) {
        const inheritedLlm = mergedProps.$extensions['org.primer.llm'] as Record<string, unknown> | undefined
        const tokenLlm = token.$extensions?.['org.primer.llm'] as Record<string, unknown> | undefined

        if (inheritedLlm && !tokenLlm) {
          // Token has no LLM extension, inherit from group
          mergedExtensions = {
            ...token.$extensions,
            'org.primer.llm': inheritedLlm,
          }
        }
      }

      result[key] = {
        ...token,
        ...(inheritedDescription ? {$description: inheritedDescription} : {}),
        ...(mergedExtensions ? {$extensions: mergedExtensions} : {}),
      }
    } else {
      // It's a nested group - recurse with merged properties
      result[key] = inheritProperties(tokenValue, mergedProps)
    }
  }

  return result
}

/**
 * Preprocessor that inherits group-level $description and $extensions to child tokens.
 * This enables W3C Design Tokens group properties to be available on individual tokens
 * during formatting.
 */
export const inheritGroupProperties: Preprocessor = {
  name: 'inheritGroupProperties',
  preprocessor: (dictionary: PreprocessedTokens): PreprocessedTokens => {
    return inheritProperties(dictionary) as PreprocessedTokens
  },
}

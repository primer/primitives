/**
 * Extract token names (dot-separated paths) from a parsed JSON5 token object.
 * A token is a leaf node that has a `$value` property.
 */
export function extractTokenNames(obj: Record<string, unknown>, prefix = ''): Set<string> {
  const tokens = new Set<string>()

  for (const key of Object.keys(obj)) {
    // skip design token meta-properties
    if (key.startsWith('$')) continue

    const value = obj[key]
    if (typeof value !== 'object' || value === null) continue

    const fullPath = prefix ? `${prefix}.${key}` : key
    const record = value as Record<string, unknown>

    if ('$value' in record) {
      tokens.add(fullPath)
    } else {
      for (const name of extractTokenNames(record, fullPath)) {
        tokens.add(name)
      }
    }
  }

  return tokens
}

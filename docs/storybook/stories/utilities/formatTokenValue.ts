/**
 * Converts a token value to a display string.
 * Token values can be primitives (string, number) or objects like {value, unit}.
 */
export function formatTokenValue(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>
    if ('value' in obj && 'unit' in obj) return `${obj.value}${obj.unit}`
    if ('hex' in obj) return String(obj.hex)
    return JSON.stringify(value)
  }
  return String(value)
}

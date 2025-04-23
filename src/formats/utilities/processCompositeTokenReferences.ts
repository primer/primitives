export function processCompositeTokenReferences(
  value: string,
  originalValue: Record<string, string | boolean>,
  properties: string[],
  refs: Array<{path: string[]; isSource: boolean}>,
  sanitizeValue: string[] = [],
): string {
  // Copy the value to avoid mutating it
  const sanitizedValue = removeStringsFromString(value, sanitizeValue) // Remove the sanitized value from the original value
  const transformedValues = sanitizedValue.split(/(?<!,)\s+/)

  // Map over the properties and process each one
  return properties
    .map((prop, index) => {
      if (
        typeof originalValue[prop] === 'string' &&
        originalValue[prop].startsWith('{') && // Check if the original value is a reference
        refs.find(ref => ref.path.join('.') === (originalValue[prop] as string).replace(/[{}]/g, ''))?.isSource === true // Validate the reference
      ) {
        return originalValue[prop] // Return the valid reference
      }
      return transformedValues[index] // Otherwise, return the default value
    })
    .join(' ') // Join the processed values back into a single string
}

/**
 * Removes any string from the given array from the input string.
 *
 * @param input - The input string to process.
 * @param stringsToRemove - An array of strings to remove from the input string.
 * @returns The resulting string with the specified strings removed.
 */
export function removeStringsFromString(input: string, stringsToRemove: string[]): string {
  // Create a regex pattern to match any of the strings in the array
  const pattern = new RegExp(stringsToRemove.map(str => escapeRegExp(str)).join('|'), 'g')

  // Replace the matching strings with an empty string
  return input.replace(pattern, '').trim()
}

/**
 * Escapes special characters in a string for use in a regular expression.
 *
 * @param str - The string to escape.
 * @returns The escaped string.
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapes special regex characters
}

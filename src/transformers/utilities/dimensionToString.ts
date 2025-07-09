/**
 * Converts a dimension object with value and unit to a CSS string
 * @param dimension - The dimension object with value and unit properties
 * @returns CSS dimension string (e.g., "0px", "1rem")
 */
export const dimensionToString = (dimension: {value: number; unit: string} | string): string => {
  // If it's already a string, return as is (backward compatibility)
  if (typeof dimension === 'string') {
    return dimension
  }

  // Handle the new object format
  if (typeof dimension === 'object' && 'value' in dimension && 'unit' in dimension) {
    const {value, unit} = dimension
    return `${value}${unit}`
  }

  throw new Error(`Invalid dimension value: ${JSON.stringify(dimension)}`)
}

import type {DimensionTokenValue} from '../../types/dimensionTokenValue.js'

/**
 * Parsed dimension result
 */
export type ParsedDimension = {
  value: number
  unit: 'px' | 'rem'
}

/**
 * @description Parses a dimension value from W3C DTCG object format
 * @param input - The dimension value in W3C object format { value: number, unit: "px" | "rem" }
 * @returns ParsedDimension with numeric value and unit
 * @throws Error if the input is not a valid W3C dimension object
 *
 * W3C DTCG format: { value: 16, unit: "px" }
 * @link https://www.designtokens.org/tr/drafts/format/#dimension
 */
export const parseDimension = (input: DimensionTokenValue): ParsedDimension => {
  // Runtime validation for W3C DTCG object format
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (typeof input !== 'object' || input === null) {
    throw new Error(
      `Invalid dimension value: ${JSON.stringify(input)} - must be a W3C DTCG dimension object with "value" and "unit" properties`,
    )
  }

  const inputObj = input as Record<string, unknown>
  if (!('value' in inputObj) || !('unit' in inputObj)) {
    throw new Error(
      `Invalid dimension value: ${JSON.stringify(input)} - must be a W3C DTCG dimension object with "value" and "unit" properties`,
    )
  }

  const {value, unit} = input

  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`Invalid dimension value: ${JSON.stringify(input)} - value must be a finite number`)
  }

  // Runtime check - unit could be invalid at runtime even if types say otherwise
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (unit !== 'px' && unit !== 'rem') {
    throw new Error(`Invalid dimension unit: ${String(unit)} - must be "px" or "rem"`)
  }

  return {value, unit}
}

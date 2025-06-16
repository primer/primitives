import {z} from 'zod'
import {schemaErrorMessage} from '../utilities/index.js'

// New object-based dimension format
const dimensionObjectValue = z.object({
  value: z.number(),
  unit: z.enum(['px', 'rem', 'em']),
})

// Legacy string-based dimension format (for backward compatibility)
const dimensionStringValue = z.union([
  z.string().refine(
    dim => /(^-?[0-9]+(px|rem)$|^-?[0-9]+\.?[0-9]*em$)/.test(dim),
    val => ({
      message: schemaErrorMessage(
        `Invalid dimension: "${val}"`,
        `Dimension must be a string with a unit (px, rem or em) or 0`,
      ),
    }),
  ),
  z.literal('0'),
  z.literal(0),
])

export const dimensionValue = z.union([
  dimensionObjectValue,
  dimensionStringValue,
])

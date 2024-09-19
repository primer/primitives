import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {colorHexValue} from './colorHexValue.js'
import {dimensionValue} from './dimensionValue.js'
import {tokenType} from './tokenType.js'

export const borderValue = z.object({
  color: z.union([colorHexValue, referenceValue]),
  style: z.enum(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'outset', 'inset']),
  width: z.union([dimensionValue, referenceValue]),
})

export const borderToken = baseToken
  .extend({
    $value: z.union([borderValue, referenceValue]),
    $type: tokenType('border'),
  })
  .strict()

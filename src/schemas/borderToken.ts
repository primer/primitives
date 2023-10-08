import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {colorHexValue} from './colorHexValue'
import {dimensionValue} from './dimensionValue'
import {tokenType} from './tokenType'

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

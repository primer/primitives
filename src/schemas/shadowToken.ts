import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {colorHexValue} from './colorHexValue'
import {alphaValue} from './alphaValue'
import {dimensionValue} from './dimensionValue'
import {tokenType} from './tokenType'

export const shadowValue = z
  .object({
    color: z.union([colorHexValue, referenceValue]),
    alpha: z.union([alphaValue, referenceValue]),
    offsetX: z.union([dimensionValue, referenceValue]),
    offsetY: z.union([dimensionValue, referenceValue]),
    blur: z.union([dimensionValue, referenceValue]),
    spread: z.union([dimensionValue, referenceValue]),
    inset: z.boolean().optional(),
  })
  .strict()

export const shadowToken = baseToken
  .extend({
    $value: z.union([shadowValue, z.array(shadowValue), referenceValue]),
    $type: tokenType('shadow'),
  })
  .strict()

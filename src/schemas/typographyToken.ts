import {z} from 'zod'
import {referenceValue} from './referenceValue'
import {dimensionValue} from './dimensionValue'
import {baseToken} from './baseToken'
import {fontWeightValue} from './fontWeightValue'
import {tokenType} from './tokenType'

export const typographyValue = z.object({
  fontSize: z.union([dimensionValue, referenceValue]),
  lineHeight: z.union([dimensionValue, referenceValue]).optional(),
  fontWeight: z.union([fontWeightValue, referenceValue]),
  fontFamily: z.union([z.string().min(1), referenceValue]),
})

export const typographyToken = baseToken
  .extend({
    $value: z.union([typographyValue, referenceValue]),
    $type: tokenType('typography'),
  })
  .strict()

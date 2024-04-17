import {z} from 'zod'
import {referenceValue} from './referenceValue'
import {baseToken} from './baseToken'
import {tokenType} from './tokenType'

export const fontFamilyToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('fontFamily'),
  })
  .strict()

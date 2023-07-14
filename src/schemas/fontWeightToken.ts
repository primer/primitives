import {z} from 'zod'
import {fontWeightValue} from './fontWeightValue'
import {referenceValue} from './referenceValue'
import {baseToken} from './baseToken'
import {tokenType} from './tokenType'

export const fontWeightToken = baseToken
  .extend({
    $type: tokenType('fontWeight'),
    $value: z.union([fontWeightValue, referenceValue]),
  })
  .strict()

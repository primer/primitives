import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {durationValue} from './durationValue'
import {tokenType} from './tokenType'

export const durationToken = baseToken
  .extend({
    $value: z.union([durationValue, referenceValue]),
    $type: tokenType('duration'),
  })
  .strict()

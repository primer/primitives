import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {durationValue} from './durationValue.js'
import {tokenType} from './tokenType.js'

export const durationToken = baseToken
  .extend({
    $value: z.union([durationValue, referenceValue]),
    $type: tokenType('duration'),
  })
  .strict()

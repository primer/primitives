import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {tokenType} from './tokenType'

export const numberToken = baseToken
  .extend({
    $value: z.union([z.number(), referenceValue]),
    $type: tokenType('number'),
  })
  .strict()

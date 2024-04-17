import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {tokenType} from './tokenType'

export const stringToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('string'),
  })
  .strict()

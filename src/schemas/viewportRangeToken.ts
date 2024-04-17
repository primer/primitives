import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {tokenType} from './tokenType'

export const viewportRangeToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('custom-viewportRange'),
  })
  .strict()

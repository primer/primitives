import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'

export const viewportRangeToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('custom-viewportRange'),
  })
  .strict()

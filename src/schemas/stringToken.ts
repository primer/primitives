import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'

export const stringToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('string'),
  })
  .strict()

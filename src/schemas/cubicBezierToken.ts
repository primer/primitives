import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'

export const cubicBezierToken = baseToken.extend({
  $value: z.union([z.array(z.number()).length(4), referenceValue]),
  $type: tokenType('cubicBezier'),
})

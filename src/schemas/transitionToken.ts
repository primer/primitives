import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {durationToken} from './durationToken.js'
import {cubicBezierToken} from './cubicBezierToken.js'
import {tokenType} from './tokenType.js'

export const transitionToken = baseToken
  .extend({
    $value: z.union([
      z.object({
        duration: z.union([durationToken.shape.$value, referenceValue]),
        timingFunction: z.union([cubicBezierToken.shape.$value, referenceValue]),
        delay: z.union([durationToken.shape.$value, referenceValue]).optional(),
      }),
      referenceValue,
    ]),
    $type: tokenType('transition'),
  })
  .strict()

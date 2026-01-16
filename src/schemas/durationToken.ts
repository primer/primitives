import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {durationValue} from './durationValue.js'
import {tokenType} from './tokenType.js'
import {llmExtension} from './llmExtension.js'

export const durationToken = baseToken
  .extend({
    $value: z.union([durationValue, referenceValue]),
    $type: tokenType('duration'),
    $extensions: z
      .object({
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

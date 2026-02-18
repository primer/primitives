import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'
import {llmExtension} from './llmExtension.js'

export const stringToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('custom-string'),
    $extensions: z
      .object({
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

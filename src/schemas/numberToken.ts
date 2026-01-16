import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'
import {scopes} from './scopes.js'
import {collection} from './collections.js'
import {llmExtension} from './llmExtension.js'

export const numberToken = baseToken
  .extend({
    $value: z.union([z.number(), referenceValue]),
    $type: tokenType('number'),
    $extensions: z
      .object({
        'org.primer.data': z
          .object({
            fontSize: z.number().optional(),
          })
          .optional(),
        'org.primer.figma': z
          .object({
            collection: collection(['typography']).optional(),
            scopes: scopes(['fontWeight', 'lineHeight']).optional(),
          })
          .optional(),
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

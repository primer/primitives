import {z} from 'zod'
import {referenceValue} from './referenceValue.js'
import {baseToken} from './baseToken.js'
import {tokenType} from './tokenType.js'
import {collection} from './collections.js'
import {scopes} from './scopes.js'
import {llmExtension} from './llmExtension.js'

export const fontFamilyToken = baseToken
  .extend({
    $value: z.union([z.string(), referenceValue]),
    $type: tokenType('fontFamily'),
    $extensions: z
      .object({
        'org.primer.figma': z.object({
          collection: collection(['base/typography', 'typography']).optional(),
          scopes: scopes(['fontFamily']).optional(),
        }),
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

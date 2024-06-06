import {z} from 'zod'
import {referenceValue} from './referenceValue'
import {baseToken} from './baseToken'
import {tokenType} from './tokenType'
import {collection} from './collections'
import {scopes} from './scopes'

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
      })
      .optional(),
  })
  .strict()

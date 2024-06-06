import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {tokenType} from './tokenType'
import {scopes} from './scopes'
import {collection} from './collections'

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
      })
      .optional(),
  })
  .strict()

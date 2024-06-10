import {z} from 'zod'
import {fontWeightValue} from './fontWeightValue'
import {referenceValue} from './referenceValue'
import {baseToken} from './baseToken'
import {tokenType} from './tokenType'
import {collection} from './collections'
import {scopes} from './scopes'

export const fontWeightToken = baseToken
  .extend({
    $type: tokenType('fontWeight'),
    $value: z.union([fontWeightValue, referenceValue]),
    $extensions: z
      .object({
        'org.primer.figma': z.object({
          collection: collection(['base/typography', 'typography']).optional(),
          scopes: scopes(['fontWeight']).optional(),
        }),
      })
      .optional(),
  })
  .strict()

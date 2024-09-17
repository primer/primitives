import {z} from 'zod'
import {fontWeightValue} from './fontWeightValue.js'
import {referenceValue} from './referenceValue.js'
import {baseToken} from './baseToken.js'
import {tokenType} from './tokenType.js'
import {collection} from './collections.js'
import {scopes} from './scopes.js'

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

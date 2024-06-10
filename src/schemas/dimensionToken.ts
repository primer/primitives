import {z} from 'zod'
import {baseToken} from './baseToken'
import {referenceValue} from './referenceValue'
import {collection} from './collections'
import {scopes} from './scopes'
import {dimensionValue} from './dimensionValue'
import {tokenType} from './tokenType'

export const dimensionToken = baseToken
  .extend({
    $value: z.union([dimensionValue, referenceValue]),
    $type: tokenType('dimension'),
    $extensions: z
      .object({
        'org.primer.figma': z.object({
          collection: collection(['base/size', 'functional/size', 'pattern/size', 'typography']),
          scopes: scopes([
            'all',
            'size',
            'gap',
            'radius',
            'borderColor',
            'fontSize',
            'letterSpacing',
            'lineHeight',
            'paragraphSpacing',
            'paragraphIndent',
          ]),
        }),
      })
      .optional(),
  })
  .strict()

import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {collection} from './collections.js'
import {scopes} from './scopes.js'
import {dimensionValue} from './dimensionValue.js'
import {tokenType} from './tokenType.js'

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
            'effectFloat',
            'fontSize',
            'letterSpacing',
            'lineHeight',
            'paragraphSpacing',
            'paragraphIndent',
          ]),
          group: z.string().optional(),
        }),
      })
      .optional(),
  })
  .strict()

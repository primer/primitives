import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {colorHexValue} from './colorHexValue.js'
import {colorW3cValue} from './colorW3cValue.js'
import {dimensionValue} from './dimensionValue.js'
import {tokenType} from './tokenType.js'
import {llmExtension} from './llmExtension.js'

export const borderValue = z.object({
  color: z.union([colorHexValue, colorW3cValue, referenceValue]),
  style: z.enum(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'outset', 'inset']),
  width: z.union([dimensionValue, referenceValue]),
})

export const borderToken = baseToken
  .extend({
    $value: z.union([borderValue, referenceValue]),
    $type: tokenType('border'),
    $extensions: z
      .object({
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

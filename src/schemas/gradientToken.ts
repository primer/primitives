import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {tokenType} from './tokenType.js'
import {colorHexValue} from './colorHexValue.js'
import {colorW3cValue} from './colorW3cValue.js'
import {llmExtension} from './llmExtension.js'

export const gradientToken = baseToken
  .extend({
    $value: z.union([
      z
        .array(
          z.object({
            color: z.union([colorHexValue, colorW3cValue, referenceValue]),
            position: z.number().min(0).max(1),
          }),
        )
        .min(2),
      referenceValue,
    ]),
    $type: tokenType('gradient'),
    $extensions: z
      .object({
        'org.primer.gradient': z.object({
          angle: z.number().int().min(0).max(360).optional(),
        }),
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

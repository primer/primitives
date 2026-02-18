import {z} from 'zod'
import {referenceValue} from './referenceValue.js'
import {dimensionValue} from './dimensionValue.js'
import {baseToken} from './baseToken.js'
import {fontWeightValue} from './fontWeightValue.js'
import {tokenType} from './tokenType.js'
import {llmExtension} from './llmExtension.js'

export const typographyValue = z.object({
  fontSize: z.union([dimensionValue, referenceValue]),
  lineHeight: z.union([z.number(), referenceValue]).optional(),
  fontWeight: z.union([fontWeightValue, referenceValue]),
  fontFamily: z.union([z.string().min(1), referenceValue]),
})

export const typographyToken = baseToken
  .extend({
    $value: z.union([typographyValue, referenceValue]),
    $type: tokenType('typography'),
    $extensions: z
      .object({
        'org.primer.llm': llmExtension,
      })
      .optional(),
  })
  .strict()

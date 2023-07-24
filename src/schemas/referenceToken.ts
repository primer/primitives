import {z} from 'zod'
import {referenceValue} from './referenceValue'
import {tokenType} from './tokenType'

export const referenceToken = z
  .object({
    $value: referenceValue,
    $description: z.string().optional(),
    $type: tokenType(),
  })
  .strict()

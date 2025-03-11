import {z} from 'zod'
import {joinFriendly, schemaErrorMessage} from '../utilities/index.js'

const validTypes = [
  'color',
  'cubicBezier',
  'typography',
  'dimension',
  'duration',
  'border',
  'shadow',
  'fontFamily',
  'fontWeight',
  'gradient',
  'number',
  'string',
  'custom-viewportRange',
] as const

export type TokenType = (typeof validTypes)[number]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TODO: fix this
export const validateType = z.record(
  z.string(),
  z.lazy((): z.ZodTypeAny => {
    return z.union([
      z
        .object({
          $value: z.any(),
          $type: z.string().refine(
            type => validTypes.includes(type as TokenType),
            val => ({
              message: schemaErrorMessage(
                `Invalid token $type: "${val}"`,
                `Must be one of the following: ${joinFriendly([...validTypes], 'or')}`,
              ),
            }),
          ),
        })
        .required(),
      validateType,
    ])
  }),
)

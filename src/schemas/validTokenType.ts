import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'
import {tokenName} from './tokenName'

const validTypes = [
  'color',
  'typography',
  'dimension',
  'border',
  'duration',
  'shadow',
  'fontFamily',
  'fontWeight',
  'number',
  'string',
  'custom-viewportRange',
] as const

export type TokenType = (typeof validTypes)[number]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TODO: fix this
export const validateType = z.record(
  tokenName,
  z.lazy(() => {
    return z.union([
      z
        .object({
          $value: z.any(),
          $type: z.string().refine(
            type => validTypes.includes(type as TokenType),
            val => ({
              message: `Invalid token $type: "${val}", must be one of the following: ${joinFriendly(
                [...validTypes],
                'or',
              )}`,
            }),
          ),
        })
        .required(),
      validateType,
    ])
  }),
)

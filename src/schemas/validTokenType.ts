import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'

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
  'reference',
] as const

export type TokenType = (typeof validTypes)[number]

export const validTokenType = z
  .object({
    $type: z.string().refine(
      val => validTypes.includes(val as TokenType),
      val => ({
        message: `Invalid token $type: "${val}", must be one of the following: ${joinFriendly([...validTypes], 'or')}`,
      }),
    ),
  })
  .required()

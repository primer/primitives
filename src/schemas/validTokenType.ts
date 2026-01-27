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
  'transition',
  'custom-viewportRange',
] as const

export type TokenType = (typeof validTypes)[number]

/**
 * Token schema that validates $type property
 */
const tokenWithType = z
  .object({
    $value: z.any(),
    $type: z.string().superRefine((value, ctx) => {
      if (!validTypes.includes(value as TokenType)) {
        ctx.addIssue({
          code: 'custom',
          message: schemaErrorMessage(
            `Invalid token $type: "${value}"`,
            `Must be one of the following: ${joinFriendly([...validTypes], 'or')}`,
          ),
        })
      }
    }),
  })
  .required()

/**
 * Recursively validates $type properties in token structure
 * Allows group-level properties ($description, $extensions) per W3C Design Tokens spec
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TODO: fix this
export const validateType: z.ZodType<unknown> = z
  .record(z.string(), z.unknown())
  .superRefine((obj, ctx) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key === '$description') {
        // Group-level $description must be a string
        if (typeof value !== 'string') {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `$description must be a string`,
            path: [key],
          })
        }
      } else if (key === '$extensions') {
        // Group-level $extensions must be an object
        if (typeof value !== 'object' || value === null) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `$extensions must be an object`,
            path: [key],
          })
        }
      } else if (key.startsWith('$')) {
        // Unknown $-prefixed keys are not allowed
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Unknown group property: ${key}`,
          path: [key],
        })
      } else if (typeof value === 'object' && value !== null) {
        // Check if it's a token (has $type) or a nested group
        if ('$type' in value) {
          const result = tokenWithType.safeParse(value)
          if (!result.success) {
            for (const issue of result.error.issues) {
              ctx.addIssue({
                ...issue,
                path: [key, ...issue.path],
              })
            }
          }
        } else {
          // Recursively validate nested group
          const result = validateType.safeParse(value)
          if (!result.success) {
            for (const issue of result.error.issues) {
              ctx.addIssue({
                ...issue,
                path: [key, ...issue.path],
              })
            }
          }
        }
      }
    }
  })

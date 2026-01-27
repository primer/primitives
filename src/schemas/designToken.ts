import {z} from 'zod'
import {tokenName} from './tokenName.js'
import {stringToken} from './stringToken.js'
import {viewportRangeToken} from './viewportRangeToken.js'
import {numberToken} from './numberToken.js'
import {fontWeightToken} from './fontWeightToken.js'
import {typographyToken} from './typographyToken.js'
import {borderToken} from './borderToken.js'
import {dimensionToken} from './dimensionToken.js'
import {colorToken} from './colorToken.js'
import {fontFamilyToken} from './fontFamilyToken.js'
import {shadowToken} from './shadowToken.js'
import {durationToken} from './durationToken.js'
import {cubicBezierToken} from './cubicBezierToken.js'
import {gradientToken} from './gradientToken.js'
import {transitionToken} from './transitionToken.js'
import {llmExtension} from './llmExtension.js'

/**
 * Group-level extensions schema (W3C Design Tokens spec)
 * https://www.designtokens.org/tr/drafts/format/#group-properties
 */
const groupExtensions = z
  .object({
    'org.primer.llm': llmExtension,
  })
  .passthrough()

/**
 * All valid token types with $type discriminator
 */
const tokenTypes = z.discriminatedUnion('$type', [
  colorToken,
  cubicBezierToken,
  dimensionToken,
  shadowToken,
  borderToken,
  fontFamilyToken,
  fontWeightToken,
  gradientToken,
  typographyToken,
  viewportRangeToken,
  numberToken,
  durationToken,
  stringToken,
  transitionToken,
])

/**
 * Validates a record allowing both token names and group properties ($description, $extensions)
 * Recursively validates nested groups
 */
const createDesignTokenSchema = (): z.ZodType<unknown> => {
  return z.record(z.string(), z.unknown()).superRefine((obj, ctx) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key === '$description') {
        // Group-level $description must be a string
        if (typeof value !== 'string') {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `$description must be a string, got ${typeof value}`,
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
        } else {
          const result = groupExtensions.safeParse(value)
          if (!result.success) {
            for (const issue of result.error.issues) {
              ctx.addIssue({
                ...issue,
                path: [key, ...issue.path],
              })
            }
          }
        }
      } else if (key.startsWith('$')) {
        // Unknown $-prefixed keys at group level are not allowed
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Unknown group property: ${key}. Only $description and $extensions are allowed.`,
          path: [key],
        })
      } else {
        // Validate token name
        const nameResult = tokenName.safeParse(key)
        if (!nameResult.success) {
          for (const issue of nameResult.error.issues) {
            ctx.addIssue({
              ...issue,
              path: [key],
            })
          }
        }

        // Validate value as either a token or nested group
        if (typeof value === 'object' && value !== null) {
          // Check if it's a token (has $type) or a nested group
          if ('$type' in value) {
            const tokenResult = tokenTypes.safeParse(value)
            if (!tokenResult.success) {
              for (const issue of tokenResult.error.issues) {
                ctx.addIssue({
                  ...issue,
                  path: [key, ...issue.path],
                })
              }
            }
          } else {
            // Recursively validate nested group
            const nestedResult = designToken.safeParse(value)
            if (!nestedResult.success) {
              for (const issue of nestedResult.error.issues) {
                ctx.addIssue({
                  ...issue,
                  path: [key, ...issue.path],
                })
              }
            }
          }
        } else {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Expected token or group object, got ${typeof value}`,
            path: [key],
          })
        }
      }
    }
  })
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TODO: fix this
export const designToken: z.ZodType<unknown> = createDesignTokenSchema()

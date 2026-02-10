import {z} from 'zod'

/**
 * W3C DTCG color spaces
 * @see https://www.designtokens.org/tr/drafts/format/#color
 */
const colorSpace = z.enum([
  'srgb',
  'srgb-linear',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'lab',
  'oklab',
  'xyz',
  'xyz-d50',
  'xyz-d65',
])

/**
 * W3C DTCG color value schema
 * @see https://www.designtokens.org/tr/drafts/format/#color
 */
export const colorW3cValue = z.object({
  colorSpace: colorSpace,
  components: z.tuple([z.number(), z.number(), z.number()]),
  alpha: z.number().min(0).max(1).optional(),
  hex: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
    .optional(),
})

export type ColorW3cValue = z.infer<typeof colorW3cValue>

import {z} from 'zod'

/**
 * W3C DTCG color spaces
 * @see https://www.designtokens.org/tr/drafts/color/#supported-color-spaces
 */
const colorSpace = z.enum([
  'srgb',
  'srgb-linear',
  'hsl',
  'hwb',
  'lab',
  'lch',
  'oklab',
  'oklch',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz',
  'xyz-d50',
  'xyz-d65',
])

/**
 * A color component: a number, or the 'none' keyword for missing components.
 * @see https://www.designtokens.org/tr/drafts/color/#the-none-keyword
 */
const colorComponent = z.union([z.number(), z.literal('none')])

/**
 * W3C DTCG color value schema
 * @see https://www.designtokens.org/tr/drafts/color/#color-type
 */
export const colorW3cValue = z.object({
  colorSpace: colorSpace,
  components: z.tuple([colorComponent, colorComponent, colorComponent]),
  alpha: z.number().min(0).max(1).optional(),
  hex: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .optional(),
})

export type ColorW3cValue = z.infer<typeof colorW3cValue>

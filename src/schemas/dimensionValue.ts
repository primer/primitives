import {z} from 'zod'

export const dimensionValue = z.union([
  z.string().regex(/(^-?[0-9]+(px|rem)$|^-?[0-9]+\.?[0-9]*em$)/, {
    message: `Dimension must be a string with a unit (px, rem or em) or 0`,
  }),
  z.literal('0'),
  z.literal(0),
])

import {z} from 'zod'

export const dimensionValue = z.object({
  value: z.number(),
  unit: z.enum(['px', 'rem', 'em']),
})

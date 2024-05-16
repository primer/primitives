import {z} from 'zod'

export const baseToken = z
  .object({
    $description: z.string().optional(),
    deprecated: z.union([z.string(), z.boolean()]).optional(),
  })
  .strict()

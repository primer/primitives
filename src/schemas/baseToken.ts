import {z} from 'zod'

export const baseToken = z
  .object({
    $description: z.string().optional(),
  })
  .strict()

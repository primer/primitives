import {z} from 'zod'

export const baseToken = z
  .object({
    $description: z.string().optional(),
    $extensions: z
      .object({
        'org.primer.figma': z.object({
          collection: z.string(),
          scopes: z.array(z.enum(['all'])),
        }),
      })
      .optional(),
  })
  .strict()

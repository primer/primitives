import {z} from 'zod'

/**
 * Schema for org.primer.llm extension
 * Used to provide LLM-friendly metadata for tokens
 */
export const llmExtension = z
  .object({
    usage: z.array(z.string()).optional(),
    rules: z.string().optional(),
  })
  .optional()

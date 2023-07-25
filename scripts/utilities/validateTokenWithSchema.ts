import type {ZodIssue, ZodSchema} from 'zod'
import {fromZodError} from 'zod-validation-error'

export type validationErrors = {
  fileName: string
  errorMessage: string
  errorsByPath: Record<string, ZodIssue[]>
}

export const validateTokenWithSchema = (
  fileName: string,
  tokens: unknown,
  schema: ZodSchema,
): validationErrors | undefined => {
  // validate token schema
  const validateTypes = schema.safeParse(tokens)
  // return if error
  if (!validateTypes.success) {
    return {
      fileName,
      errorMessage: fromZodError(validateTypes.error, {prefix: '', prefixSeparator: '- '}).message.replace(/;/g, '\n-'),
      errorsByPath: fromZodError(validateTypes.error).details.reduce((acc, item) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!acc[item.path.join('.')]) acc[item.path.join('.')] = []
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        acc[item.path.join('.')].push(item)
        return acc
      }, {}),
    }
  }
}

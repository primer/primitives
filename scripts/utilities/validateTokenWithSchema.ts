import type {ZodIssue, ZodSchema} from 'zod'
import {fromZodError} from 'zod-validation-error'

export type validationErrors = {
  fileName: string
  errorsByPath: Record<string, ZodIssue[]>
}

const unpackErrorDetails = details => {
  const errorObjectByCode = {
    //eslint-disable-next-line camelcase
    invalid_union: 'unionErrors',
  }
  return {
    ...details,
    errors: details[errorObjectByCode[details.code]] || [],
  }
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
      errorsByPath: fromZodError(validateTypes.error).details.reduce((acc, item) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!acc[item.path.join('.')]) acc[item.path.join('.')] = []
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        acc[item.path.join('.')].push(unpackErrorDetails(item))
        return acc
      }, {}),
    }
  }
}

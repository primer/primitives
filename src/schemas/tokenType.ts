import {z} from 'zod'

export const tokenTypes = z.enum([
  'color',
  'typography',
  'dimension',
  'border',
  'duration',
  'shadow',
  'fontFamily',
  'fontWeight',
  'number',
  'string',
  'custom-viewportRange',
])
export const tokenType = ($type?: z.infer<typeof tokenTypes>) => z.literal($type)

// export const tokenType = ($type?: z.infer<typeof tokenTypes>) => {
//   if ($type)
//     return z.string().refine(
//       value => value === $type,
//       value => ({message: `Invalid token $type: "${value}", the correct $type is "${$type}"`}),
//     )
//   return tokenTypes
// }

import {z} from 'zod'

const allowed = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
export const fontWeightValue = z.number().refine(
  value => allowed.includes(value),
  value => ({message: `Invalid font weight value "${value}", must be one of ${allowed.join(', ')}`}),
)

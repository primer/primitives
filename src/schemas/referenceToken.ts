import {z} from 'zod'
import {referenceValue} from './referenceValue'

export const referenceToken = z.object({$value: referenceValue, $description: z.string().optional()}).strict()

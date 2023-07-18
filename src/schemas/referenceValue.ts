import {z} from 'zod'

export const referenceValue = z.string().regex(/^{\w+\.(\w+\.)*\w+}$/)

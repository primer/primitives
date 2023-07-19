import {z} from 'zod'
import type {TokenType} from './validTokenType'

export const tokenType = ($type: TokenType) => z.literal($type)

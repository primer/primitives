import {z} from 'zod'
import type {TokenType} from './validTokenType.js'

export const tokenType = ($type: TokenType) => z.literal($type)

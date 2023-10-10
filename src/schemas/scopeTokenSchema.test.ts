import type {ValidScope} from './scopes'
import {scopes} from './scopes'

const validScopes: ValidScope[] = ['all', 'bgColor', 'fgColor', 'borderColor', 'size', 'gap', 'radius']
const scopeSchema = scopes(validScopes)

describe('Schema: scopes', () => {
  it('parses valid scopes', () => {
    expect(scopeSchema.safeParse(['all']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['bgColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fgColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['borderColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['size']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['gap']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['radius']).success).toStrictEqual(true)
    expect(
      scopeSchema.safeParse(['all', 'bgColor', 'fgColor', 'borderColor', 'size', 'gap', 'radius']).success,
    ).toStrictEqual(true)
    expect(scopeSchema.safeParse([]).success).toStrictEqual(true)
  })

  it('fails on invalid scope', () => {
    expect(scopeSchema.safeParse(['invalid']).success).toStrictEqual(false)
    expect(scopeSchema.safeParse(['']).success).toStrictEqual(false)
    expect(scopeSchema.safeParse([1]).success).toStrictEqual(false)
    expect(scopeSchema.safeParse([false]).success).toStrictEqual(false)
    expect(scopeSchema.safeParse([undefined]).success).toStrictEqual(false)
  })
})

import type {ValidScope} from './scopes.js'
import {scopes} from './scopes.js'

const validScopes: ValidScope[] = [
  'all',
  'bgColor',
  'fgColor',
  'borderColor',
  'borderWidth',
  'size',
  'gap',
  'radius',
  'effectColor',
  'effectFloat',
  'opacity',
  'fontFamily',
  'fontStyle',
  'fontWeight',
  'fontSize',
  'lineHeight',
  'letterSpacing',
  'paragraphSpacing',
  'paragraphIndent',
]
const scopeSchema = scopes(validScopes)

describe('Schema: scopes', () => {
  it('parses valid scopes', () => {
    expect(scopeSchema.safeParse(['all']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['bgColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fgColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['borderColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['borderWidth']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['size']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['gap']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['radius']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['effectColor']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['effectFloat']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['opacity']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fontFamily']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fontStyle']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fontWeight']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['fontSize']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['lineHeight']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['letterSpacing']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['paragraphSpacing']).success).toStrictEqual(true)
    expect(scopeSchema.safeParse(['paragraphIndent']).success).toStrictEqual(true)
    expect(
      scopeSchema.safeParse([
        'all',
        'bgColor',
        'fgColor',
        'borderColor',
        'borderWidth',
        'size',
        'gap',
        'radius',
        'effectColor',
        'effectFloat',
        'opacity',
        'fontFamily',
        'fontStyle',
        'fontWeight',
        'fontSize',
        'lineHeight',
        'letterSpacing',
        'paragraphSpacing',
        'paragraphIndent',
      ]).success,
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

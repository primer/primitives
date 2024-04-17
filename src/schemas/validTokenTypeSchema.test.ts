import {validateType} from './validTokenType'

const token = (type: string) => ({
  tokenName: {$value: 1, $type: type},
})

describe('Schema: validateType', () => {
  it('parses valid token types', () => {
    expect(validateType.safeParse(token('color')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('typography')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('dimension')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('duration')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('border')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('shadow')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('fontFamily')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('fontWeight')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('number')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('string')).success).toStrictEqual(true)
    expect(validateType.safeParse(token('custom-viewportRange')).success).toStrictEqual(true)
  })

  it('fails on invalid token types', () => {
    expect(validateType.safeParse(token('invalid')).success).toStrictEqual(false)
    expect(validateType.safeParse(token('')).success).toStrictEqual(false)
    // @ts-expect-error: needed for test case
    expect(validateType.safeParse(token(0)).success).toStrictEqual(false)
    // @ts-expect-error: needed for test case
    expect(validateType.safeParse(token(undefined)).success).toStrictEqual(false)
    // @ts-expect-error: needed for test case
    expect(validateType.safeParse(token(false)).success).toStrictEqual(false)
  })
})

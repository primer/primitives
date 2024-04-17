import {referenceValue} from './referenceValue'

describe('Schema: referenceValue', () => {
  it('returns success on valid reference', () => {
    expect(referenceValue.safeParse('{color.token}').success).toStrictEqual(true)
    expect(referenceValue.safeParse('{color.token.900}').success).toStrictEqual(true)
    expect(referenceValue.safeParse('{color.@}').success).toStrictEqual(true)
  })

  it('fails on invalid reference', () => {
    expect(referenceValue.safeParse('color.token').success).toStrictEqual(false)
    expect(referenceValue.safeParse('{color}').success).toStrictEqual(false)
    expect(referenceValue.safeParse('{color.@.token}').success).toStrictEqual(false)
    expect(referenceValue.safeParse('{}').success).toStrictEqual(false)
    expect(referenceValue.safeParse('').success).toStrictEqual(false)
    expect(referenceValue.safeParse(100).success).toStrictEqual(false)
    expect(referenceValue.safeParse(false).success).toStrictEqual(false)
    expect(referenceValue.safeParse(undefined).success).toStrictEqual(false)
  })
})

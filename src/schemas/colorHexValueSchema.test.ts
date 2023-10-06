import {colorHexValue} from './colorHexValue'

describe('Schema: colorHexValue', () => {
  it('passes on valid colorHexValue values', () => {
    expect(colorHexValue.safeParse('#333').success).toStrictEqual(true)
    // expect(colorHexValue.safeParse('#3456').success).toStrictEqual(true)
    expect(colorHexValue.safeParse('#33ff55').success).toStrictEqual(true)
    expect(colorHexValue.safeParse('#33aa5566').success).toStrictEqual(true)
  })

  it('fails on invalid colorHexValue values', () => {
    expect(colorHexValue.safeParse('#3456').success).toStrictEqual(false)
    expect(colorHexValue.safeParse(0).success).toStrictEqual(false)
    expect(colorHexValue.safeParse('345').success).toStrictEqual(false)
    expect(colorHexValue.safeParse('334455').success).toStrictEqual(false)
    expect(colorHexValue.safeParse('blue').success).toStrictEqual(false)
    expect(colorHexValue.safeParse('rgb(255,125,0)').success).toStrictEqual(false)
    expect(colorHexValue.safeParse('').success).toStrictEqual(false)
  })

  it('fails on non-string values', () => {
    expect(colorHexValue.safeParse(undefined).success).toStrictEqual(false)
    expect(colorHexValue.safeParse(null).success).toStrictEqual(false)
    expect(colorHexValue.safeParse(1).success).toStrictEqual(false)
  })
})

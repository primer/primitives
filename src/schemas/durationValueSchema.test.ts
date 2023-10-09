import {durationValue} from './durationValue'

describe('Schema: durationValue', () => {
  it('passes on valid duration values', () => {
    expect(durationValue.safeParse('0ms').success).toStrictEqual(true)
    expect(durationValue.safeParse('100ms').success).toStrictEqual(true)
    expect(durationValue.safeParse('20000ms').success).toStrictEqual(true)
  })

  it('fails on invalid duration values', () => {
    expect(durationValue.safeParse(-1).success).toStrictEqual(false)
    expect(durationValue.safeParse(0).success).toStrictEqual(false)
    expect(durationValue.safeParse(1.1).success).toStrictEqual(false)
    expect(durationValue.safeParse('0').success).toStrictEqual(false)
    expect(durationValue.safeParse('10').success).toStrictEqual(false)
    expect(durationValue.safeParse('10s').success).toStrictEqual(false)
    expect(durationValue.safeParse('').success).toStrictEqual(false)
  })

  it('fails on non-string values', () => {
    expect(durationValue.safeParse(undefined).success).toStrictEqual(false)
    expect(durationValue.safeParse(null).success).toStrictEqual(false)
    expect(durationValue.safeParse(1).success).toStrictEqual(false)
  })
})

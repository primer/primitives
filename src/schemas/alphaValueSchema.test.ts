import {alphaValue} from './alphaValue'

describe('Schema: alphaValue', () => {
  it('passes on valid alpha values', () => {
    expect(alphaValue.safeParse(0).success).toStrictEqual(true)
    expect(alphaValue.safeParse(0.5).success).toStrictEqual(true)
    expect(alphaValue.safeParse(0.23455).success).toStrictEqual(true)
    expect(alphaValue.safeParse(1).success).toStrictEqual(true)
    expect(alphaValue.safeParse(1.0).success).toStrictEqual(true)
  })

  it('fails on invalid alpha values', () => {
    expect(alphaValue.safeParse(-1).success).toStrictEqual(false)
    expect(alphaValue.safeParse(-0.1).success).toStrictEqual(false)
    expect(alphaValue.safeParse(1.1).success).toStrictEqual(false)
  })

  it('fails on non-numeric values', () => {
    expect(alphaValue.safeParse('1').success).toStrictEqual(false)
    expect(alphaValue.safeParse(undefined).success).toStrictEqual(false)
    expect(alphaValue.safeParse(null).success).toStrictEqual(false)
    expect(alphaValue.safeParse('').success).toStrictEqual(false)
  })
})

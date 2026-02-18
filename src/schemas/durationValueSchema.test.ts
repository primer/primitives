import {durationValue} from './durationValue.js'

describe('Schema: durationValue', () => {
  it('passes on valid W3C DTCG duration values', () => {
    expect(durationValue.safeParse({value: 0, unit: 'ms'}).success).toStrictEqual(true)
    expect(durationValue.safeParse({value: 100, unit: 'ms'}).success).toStrictEqual(true)
    expect(durationValue.safeParse({value: 20000, unit: 'ms'}).success).toStrictEqual(true)
    expect(durationValue.safeParse({value: 1.5, unit: 's'}).success).toStrictEqual(true)
    expect(durationValue.safeParse({value: 0, unit: 's'}).success).toStrictEqual(true)
  })

  it('fails on invalid unit values', () => {
    expect(durationValue.safeParse({value: 100, unit: 'sec'}).success).toStrictEqual(false)
    expect(durationValue.safeParse({value: 100, unit: ''}).success).toStrictEqual(false)
    expect(durationValue.safeParse({value: 100, unit: 'minutes'}).success).toStrictEqual(false)
  })

  it('fails on invalid value types', () => {
    expect(durationValue.safeParse({value: '100', unit: 'ms'}).success).toStrictEqual(false)
    expect(durationValue.safeParse({value: null, unit: 'ms'}).success).toStrictEqual(false)
    expect(durationValue.safeParse({value: undefined, unit: 'ms'}).success).toStrictEqual(false)
  })

  it('fails on legacy string format', () => {
    expect(durationValue.safeParse('0ms').success).toStrictEqual(false)
    expect(durationValue.safeParse('100ms').success).toStrictEqual(false)
    expect(durationValue.safeParse('10s').success).toStrictEqual(false)
  })

  it('fails on missing properties', () => {
    expect(durationValue.safeParse({value: 100}).success).toStrictEqual(false)
    expect(durationValue.safeParse({unit: 'ms'}).success).toStrictEqual(false)
    expect(durationValue.safeParse({}).success).toStrictEqual(false)
  })

  it('fails on non-object values', () => {
    expect(durationValue.safeParse(undefined).success).toStrictEqual(false)
    expect(durationValue.safeParse(null).success).toStrictEqual(false)
    expect(durationValue.safeParse(1).success).toStrictEqual(false)
  })

  it('fails on extra properties (strict mode)', () => {
    expect(durationValue.safeParse({value: 100, unit: 'ms', extra: 'prop'}).success).toStrictEqual(false)
  })
})

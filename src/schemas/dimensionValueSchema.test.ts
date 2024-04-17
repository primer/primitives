import {dimensionValue} from './dimensionValue'

describe('Schema: dimensionValue', () => {
  it('passes on valid values', () => {
    expect(dimensionValue.safeParse('1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('-1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1em').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('0').success).toStrictEqual(true)
    expect(dimensionValue.safeParse(0).success).toStrictEqual(true)
  })

  it('fails on invalid value', () => {
    expect(dimensionValue.safeParse('1%').success).toStrictEqual(false)
    expect(dimensionValue.safeParse(1).success).toStrictEqual(false)
    expect(dimensionValue.safeParse('small').success).toStrictEqual(false)
    expect(dimensionValue.safeParse('').success).toStrictEqual(false)
    expect(dimensionValue.safeParse(false).success).toStrictEqual(false)
    expect(dimensionValue.safeParse(undefined).success).toStrictEqual(false)
  })
})

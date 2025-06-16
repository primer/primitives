import {dimensionValue} from './dimensionValue.js'

describe('Schema: dimensionValue', () => {
  it('passes on valid string values (legacy format)', () => {
    expect(dimensionValue.safeParse('1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('-1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1em').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('0').success).toStrictEqual(true)
    expect(dimensionValue.safeParse(0).success).toStrictEqual(true)
  })

  it('passes on valid object values (new format)', () => {
    expect(dimensionValue.safeParse({value: 1, unit: 'px'}).success).toStrictEqual(true)
    expect(dimensionValue.safeParse({value: -1, unit: 'px'}).success).toStrictEqual(true)
    expect(dimensionValue.safeParse({value: 16, unit: 'rem'}).success).toStrictEqual(true)
    expect(dimensionValue.safeParse({value: 1.5, unit: 'em'}).success).toStrictEqual(true)
    expect(dimensionValue.safeParse({value: 0, unit: 'px'}).success).toStrictEqual(true)
  })

  it('fails on invalid string values', () => {
    expect(dimensionValue.safeParse('1%').success).toStrictEqual(false)
    expect(dimensionValue.safeParse(1).success).toStrictEqual(false)
    expect(dimensionValue.safeParse('small').success).toStrictEqual(false)
    expect(dimensionValue.safeParse('').success).toStrictEqual(false)
    expect(dimensionValue.safeParse(false).success).toStrictEqual(false)
    expect(dimensionValue.safeParse(undefined).success).toStrictEqual(false)
  })

  it('fails on invalid object values', () => {
    expect(dimensionValue.safeParse({value: 1, unit: '%'}).success).toStrictEqual(false)
    expect(dimensionValue.safeParse({value: 'small', unit: 'px'}).success).toStrictEqual(false)
    expect(dimensionValue.safeParse({value: 1}).success).toStrictEqual(false)
    expect(dimensionValue.safeParse({unit: 'px'}).success).toStrictEqual(false)
    expect(dimensionValue.safeParse({}).success).toStrictEqual(false)
  })
})

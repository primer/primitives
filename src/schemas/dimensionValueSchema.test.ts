import {dimensionValue} from './dimensionValue.js'

describe('Schema: dimensionValue', () => {
  it('passes on valid values', () => {
    expect(dimensionValue.safeParse('1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('-1px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1em').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('0').success).toStrictEqual(true)
    expect(dimensionValue.safeParse(0).success).toStrictEqual(true)
  })

  it('passes on decimal rem values', () => {
    expect(dimensionValue.safeParse('0.75rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('0.875rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('1.25rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('2.5rem').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('-0.5rem').success).toStrictEqual(true)
  })

  it('passes on decimal px values', () => {
    expect(dimensionValue.safeParse('2.5px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('0.5px').success).toStrictEqual(true)
    expect(dimensionValue.safeParse('-1.5px').success).toStrictEqual(true)
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

import {dimensionValue, dimensionValueObject} from './dimensionValue.js'

describe('Schema: dimensionValue', () => {
  describe('W3C DTCG object format', () => {
    it('passes on valid W3C dimension objects', () => {
      expect(dimensionValue.safeParse({value: 16, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 1, unit: 'rem'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 0, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: -2, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 0.5, unit: 'rem'}).success).toStrictEqual(true)
    })

    it('fails on invalid W3C dimension objects', () => {
      expect(dimensionValue.safeParse({value: 16, unit: 'em'}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({value: '16', unit: 'px'}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({value: 16}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({unit: 'px'}).success).toStrictEqual(false)
    })
  })

  describe('dimensionValueObject (strict W3C format)', () => {
    it('passes on valid W3C dimension objects', () => {
      expect(dimensionValueObject.safeParse({value: 16, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValueObject.safeParse({value: 1, unit: 'rem'}).success).toStrictEqual(true)
    })

    it('fails on extra properties', () => {
      expect(dimensionValueObject.safeParse({value: 16, unit: 'px', extra: true}).success).toStrictEqual(false)
    })
  })

  describe('legacy string format (deprecated)', () => {
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
})

import {dimensionValue} from './dimensionValue.js'

describe('Schema: dimensionValue', () => {
  describe('W3C DTCG object format', () => {
    it('passes on valid W3C dimension objects', () => {
      expect(dimensionValue.safeParse({value: 16, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 1, unit: 'rem'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 0.9285, unit: 'em'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 0, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: -2, unit: 'px'}).success).toStrictEqual(true)
      expect(dimensionValue.safeParse({value: 0.5, unit: 'rem'}).success).toStrictEqual(true)
    })

    it('fails on invalid W3C dimension objects', () => {
      expect(dimensionValue.safeParse({value: 16, unit: 'pt'}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({value: '16', unit: 'px'}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({value: 16}).success).toStrictEqual(false)
      expect(dimensionValue.safeParse({unit: 'px'}).success).toStrictEqual(false)
    })

    it('fails on extra properties', () => {
      expect(dimensionValue.safeParse({value: 16, unit: 'px', extra: true}).success).toStrictEqual(false)
    })
  })

  describe('legacy string format (rejected)', () => {
    it('fails on legacy string values', () => {
      expect(dimensionValue.safeParse('1px').success).toStrictEqual(false)
      expect(dimensionValue.safeParse('-1px').success).toStrictEqual(false)
      expect(dimensionValue.safeParse('1em').success).toStrictEqual(false)
      expect(dimensionValue.safeParse('1rem').success).toStrictEqual(false)
      expect(dimensionValue.safeParse('0').success).toStrictEqual(false)
      expect(dimensionValue.safeParse(0).success).toStrictEqual(false)
    })

    it('fails on invalid value types', () => {
      expect(dimensionValue.safeParse('1%').success).toStrictEqual(false)
      expect(dimensionValue.safeParse(1).success).toStrictEqual(false)
      expect(dimensionValue.safeParse('small').success).toStrictEqual(false)
      expect(dimensionValue.safeParse('').success).toStrictEqual(false)
      expect(dimensionValue.safeParse(false).success).toStrictEqual(false)
      expect(dimensionValue.safeParse(undefined).success).toStrictEqual(false)
    })
  })
})

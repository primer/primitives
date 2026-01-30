import {parseDimension} from './parseDimension.js'

describe('Utility: parseDimension', () => {
  describe('W3C DTCG object format', () => {
    it('parses px dimension object', () => {
      expect(parseDimension({value: 16, unit: 'px'})).toEqual({value: 16, unit: 'px'})
    })

    it('parses rem dimension object', () => {
      expect(parseDimension({value: 1, unit: 'rem'})).toEqual({value: 1, unit: 'rem'})
    })

    it('parses zero dimension object', () => {
      expect(parseDimension({value: 0, unit: 'px'})).toEqual({value: 0, unit: 'px'})
    })

    it('parses negative dimension object', () => {
      expect(parseDimension({value: -2, unit: 'px'})).toEqual({value: -2, unit: 'px'})
    })

    it('parses decimal dimension object', () => {
      expect(parseDimension({value: 0.5, unit: 'rem'})).toEqual({value: 0.5, unit: 'rem'})
    })

    it('parses em dimension object', () => {
      expect(parseDimension({value: 0.9285, unit: 'em'})).toEqual({value: 0.9285, unit: 'em'})
    })

    it('throws on invalid unit', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension({value: 16, unit: 'pt'})).toThrow('Invalid dimension unit')
    })

    it('throws on non-finite value', () => {
      expect(() => parseDimension({value: Infinity, unit: 'px'})).toThrow('must be a finite number')
      expect(() => parseDimension({value: NaN, unit: 'px'})).toThrow('must be a finite number')
    })
  })

  describe('invalid inputs', () => {
    it('throws on string input', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension('16px')).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on number input', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension(16)).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on null', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension(null)).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on undefined', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension(undefined)).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on array', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension([16, 'px'])).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on object missing value property', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension({unit: 'px'})).toThrow('must be a W3C DTCG dimension object')
    })

    it('throws on object missing unit property', () => {
      // @ts-expect-error testing invalid input
      expect(() => parseDimension({value: 16})).toThrow('must be a W3C DTCG dimension object')
    })
  })
})

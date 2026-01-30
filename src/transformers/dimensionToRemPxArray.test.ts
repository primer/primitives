import {getMockToken} from '../test-utilities/index.js'
import {dimensionToRemPxArray} from './dimensionToRemPxArray.js'

describe('Transformer: dimensionToRemPxArray', () => {
  describe('W3C DTCG object format', () => {
    it('transforms px dimension object to [rem, px] array', () => {
      const input = [
        getMockToken({
          value: {value: 16, unit: 'px'},
        }),
      ]
      const expectedOutput = [['1rem', '16px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms rem dimension object to [rem, px] array', () => {
      const input = [
        getMockToken({
          value: {value: 1, unit: 'rem'},
        }),
      ]
      const expectedOutput = [['1rem', '16px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms zero dimension object to [0, 0] array', () => {
      const input = [
        getMockToken({
          value: {value: 0, unit: 'px'},
        }),
        getMockToken({
          value: {value: 0, unit: 'rem'},
        }),
      ]
      const expectedOutput = [
        ['0', '0'],
        ['0', '0'],
      ]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms decimal px dimension object', () => {
      const input = [
        getMockToken({
          value: {value: 8, unit: 'px'},
        }),
      ]
      const expectedOutput = [['0.5rem', '8px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms decimal rem dimension object', () => {
      const input = [
        getMockToken({
          value: {value: 0.5, unit: 'rem'},
        }),
      ]
      const expectedOutput = [['0.5rem', '8px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('respects custom basePxFontSize for px to rem conversion', () => {
      const input = [
        getMockToken({
          value: {value: 20, unit: 'px'},
        }),
      ]
      const expectedOutput = [['2rem', '20px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {basePxFontSize: 10}, {}))).toStrictEqual(
        expectedOutput,
      )
    })

    it('respects custom basePxFontSize for rem to px conversion', () => {
      const input = [
        getMockToken({
          value: {value: 2, unit: 'rem'},
        }),
      ]
      const expectedOutput = [['2rem', '20px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {basePxFontSize: 10}, {}))).toStrictEqual(
        expectedOutput,
      )
    })

    it('transforms em dimension object to [em, em] array (cannot convert)', () => {
      const input = [
        getMockToken({
          value: {value: 0.9285, unit: 'em'},
        }),
      ]
      const expectedOutput = [['0.9285em', '0.9285em']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms negative dimension object', () => {
      const input = [
        getMockToken({
          value: {value: -16, unit: 'px'},
        }),
      ]
      const expectedOutput = [['-1rem', '-16px']]
      expect(input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })
  })

  describe('invalid inputs', () => {
    it('throws on legacy string format', () => {
      const input = [
        getMockToken({
          value: '16px',
        }),
      ]
      expect(() => input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toThrow()
    })

    it('throws on legacy number format', () => {
      const input = [
        getMockToken({
          value: 16,
        }),
      ]
      expect(() => input.map(item => dimensionToRemPxArray.transform(item, {}, {}))).toThrow()
    })

    it('throws on null or undefined', () => {
      expect(() =>
        dimensionToRemPxArray.transform(
          getMockToken({
            value: null,
          }),
          {},
          {},
        ),
      ).toThrow()

      expect(() =>
        dimensionToRemPxArray.transform(
          getMockToken({
            value: undefined,
          }),
          {},
          {},
        ),
      ).toThrow()
    })
  })
})

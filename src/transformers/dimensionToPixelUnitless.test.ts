import {getMockToken} from '../test-utilities/index.js'
import {dimensionToPixelUnitless} from './dimensionToPixelUnitless.js'

describe('Transformer: dimensionToPixelUnitless', () => {
  describe('W3C DTCG object format', () => {
    it('transforms px dimension object to number', () => {
      const input = [
        getMockToken({
          value: {value: 16, unit: 'px'},
        }),
      ]
      const expectedOutput = [16]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms rem dimension object to px number', () => {
      const input = [
        getMockToken({
          value: {value: 1, unit: 'rem'},
        }),
      ]
      const expectedOutput = [16]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms rem dimension object with custom basePxFontSize', () => {
      const input = [
        getMockToken({
          value: {value: 2, unit: 'rem'},
        }),
      ]
      const expectedOutput = [20]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {basePxFontSize: 10}, {}))).toStrictEqual(
        expectedOutput,
      )
    })

    it('transforms zero dimension object to 0', () => {
      const input = [
        getMockToken({
          value: {value: 0, unit: 'px'},
        }),
        getMockToken({
          value: {value: 0, unit: 'rem'},
        }),
      ]
      const expectedOutput = [0, 0]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms decimal dimension object', () => {
      const input = [
        getMockToken({
          value: {value: 8.5, unit: 'px'},
        }),
      ]
      const expectedOutput = [8.5]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms em dimension object to em string (cannot convert)', () => {
      const input = [
        getMockToken({
          value: {value: 0.9285, unit: 'em'},
        }),
      ]
      const expectedOutput = ['0.9285em']
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms negative dimension object', () => {
      const input = [
        getMockToken({
          value: {value: -16, unit: 'px'},
        }),
      ]
      const expectedOutput = [-16]
      expect(input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })
  })

  describe('invalid inputs', () => {
    it('throws on legacy string format', () => {
      const input = [
        getMockToken({
          value: '16px',
        }),
      ]
      expect(() => input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toThrow()
    })

    it('throws on legacy number format', () => {
      const input = [
        getMockToken({
          value: 16,
        }),
      ]
      expect(() => input.map(item => dimensionToPixelUnitless.transform(item, {}, {}))).toThrow()
    })

    it('throws on null or undefined', () => {
      expect(() =>
        dimensionToPixelUnitless.transform(
          getMockToken({
            value: null,
          }),
          {},
          {},
        ),
      ).toThrow()

      expect(() =>
        dimensionToPixelUnitless.transform(
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

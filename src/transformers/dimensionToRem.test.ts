import {getMockToken} from '../test-utilities/index.js'
import {dimensionToRem} from './dimensionToRem.js'

describe('Transformer: dimensionToRem', () => {
  describe('W3C DTCG object format', () => {
    it('transforms px dimension object to rem', () => {
      const input = [
        getMockToken({
          value: {value: 16, unit: 'px'},
        }),
      ]
      const expectedOutput = ['1rem']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms rem dimension object to rem', () => {
      const input = [
        getMockToken({
          value: {value: 1, unit: 'rem'},
        }),
      ]
      const expectedOutput = ['1rem']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
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
      const expectedOutput = ['0', '0']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms decimal dimension object', () => {
      const input = [
        getMockToken({
          value: {value: 8, unit: 'px'},
        }),
      ]
      const expectedOutput = ['0.5rem']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('respects custom basePxFontSize', () => {
      const input = [
        getMockToken({
          value: {value: 20, unit: 'px'},
        }),
      ]
      const expectedOutput = ['2rem']
      expect(input.map(item => dimensionToRem.transform(item, {basePxFontSize: 10}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms em dimension object to em (pass through)', () => {
      const input = [
        getMockToken({
          value: {value: 0.9285, unit: 'em'},
        }),
      ]
      const expectedOutput = ['0.9285em']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms negative dimension object', () => {
      const input = [
        getMockToken({
          value: {value: -16, unit: 'px'},
        }),
      ]
      const expectedOutput = ['-1rem']
      expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })
  })

  describe('invalid inputs', () => {
    it('throws on legacy string format', () => {
      const input = [
        getMockToken({
          value: '16px',
        }),
      ]
      expect(() => input.map(item => dimensionToRem.transform(item, {}, {}))).toThrow()
    })

    it('throws on legacy number format', () => {
      const input = [
        getMockToken({
          value: 16,
        }),
      ]
      expect(() => input.map(item => dimensionToRem.transform(item, {}, {}))).toThrow()
    })

    it('throws on null or undefined', () => {
      expect(() =>
        dimensionToRem.transform(
          getMockToken({
            value: null,
          }),
          {},
          {},
        ),
      ).toThrow()

      expect(() =>
        dimensionToRem.transform(
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

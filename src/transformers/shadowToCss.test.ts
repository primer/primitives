import {getMockToken} from '../test-utilities/index.js'
import {shadowToCss} from './shadowToCss.js'

describe('Transformer: shadowToCss', () => {
  describe('W3C DTCG object format', () => {
    it('transforms W3C dimension objects to css shadow string', () => {
      const input = [
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 2, unit: 'px'},
            blur: {value: 1, unit: 'px'},
            spread: {value: 0, unit: 'px'},
          },
        }),
      ]
      const expectedOutput = ['0 2px 1px 0 #000000']
      expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms W3C inset shadow with dimension objects', () => {
      const input = [
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 1, unit: 'px'},
            blur: {value: 0, unit: 'px'},
            spread: {value: 0, unit: 'px'},
            inset: true,
          },
        }),
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 2, unit: 'px'},
            blur: {value: 1, unit: 'px'},
            spread: {value: 0, unit: 'px'},
            inset: false,
          },
        }),
      ]
      const expectedOutput = ['inset 0 1px 0 0 #000000', '0 2px 1px 0 #000000']
      expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms W3C shadow with alpha', () => {
      const input = [
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 2, unit: 'px'},
            blur: {value: 1, unit: 'px'},
            spread: {value: 0, unit: 'px'},
            alpha: 0.5,
          },
        }),
      ]
      const expectedOutput = ['0 2px 1px 0 #00000080']
      expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms W3C shadow with alpha: 0 to fully transparent', () => {
      const input = getMockToken({
        $value: {
          color: '#000000',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0,
        },
      })
      expect(shadowToCss.transform(input, {}, {})).toBe('0 2px 1px 0 #00000000')
    })

    it('preserves color as-is when alpha is omitted', () => {
      const input = getMockToken({
        $value: {
          color: '#ff000080',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
        },
      })
      expect(shadowToCss.transform(input, {}, {})).toBe('0 2px 1px 0 #ff000080')
    })

    it('transforms W3C multi-layer shadow', () => {
      const item = getMockToken({
        $value: [
          {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 1, unit: 'px'},
            blur: {value: 1, unit: 'px'},
            spread: {value: 0, unit: 'px'},
            alpha: 0.06,
          },
          {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 3, unit: 'px'},
            blur: {value: 6, unit: 'px'},
            spread: {value: 0, unit: 'px'},
            alpha: 0.12,
          },
        ],
      })

      const expectedOutput = '0 1px 1px 0 #0000000f, 0 3px 6px 0 #0000001f'
      expect(shadowToCss.transform(item, {}, {})).toStrictEqual(expectedOutput)
    })

    it('transforms W3C shadow with negative spread', () => {
      const input = [
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'px'},
            offsetY: {value: 6, unit: 'px'},
            blur: {value: 12, unit: 'px'},
            spread: {value: -3, unit: 'px'},
          },
        }),
      ]
      const expectedOutput = ['0 6px 12px -3px #000000']
      expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })

    it('transforms W3C shadow with rem units', () => {
      const input = [
        getMockToken({
          $value: {
            color: '#000000',
            offsetX: {value: 0, unit: 'rem'},
            offsetY: {value: 0.5, unit: 'rem'},
            blur: {value: 1, unit: 'rem'},
            spread: {value: 0, unit: 'rem'},
          },
        }),
      ]
      const expectedOutput = ['0 0.5rem 1rem 0 #000000']
      expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
    })
  })

  describe('error handling', () => {
    it('throws an error when required values are missing', () => {
      // missing spread
      expect(() =>
        shadowToCss.transform(
          getMockToken({
            $value: {
              color: '#000000',
              offsetX: {value: 2, unit: 'px'},
              offsetY: {value: 2, unit: 'px'},
              blur: {value: 1, unit: 'px'},
            },
          }),
          {},
          {},
        ),
      ).toThrowError()

      // missing blur
      expect(() =>
        shadowToCss.transform(
          getMockToken({
            $value: {
              color: '#000000',
              offsetX: {value: 2, unit: 'px'},
              offsetY: {value: 2, unit: 'px'},
              spread: {value: 0, unit: 'px'},
            },
          }),
          {},
          {},
        ),
      ).toThrowError()

      // missing offsetY
      expect(() =>
        shadowToCss.transform(
          getMockToken({
            $value: {
              color: '#000000',
              offsetX: {value: 2, unit: 'px'},
              spread: {value: 0, unit: 'px'},
              blur: {value: 1, unit: 'px'},
            },
          }),
          {},
          {},
        ),
      ).toThrowError()

      // missing offsetX
      expect(() =>
        shadowToCss.transform(
          getMockToken({
            $value: {
              color: '#000000',
              offsetY: {value: 2, unit: 'px'},
              spread: {value: 0, unit: 'px'},
              blur: {value: 1, unit: 'px'},
            },
          }),
          {},
          {},
        ),
      ).toThrowError()

      // missing color
      expect(() =>
        shadowToCss.transform(
          getMockToken({
            $value: {
              offsetX: {value: 0, unit: 'px'},
              offsetY: {value: 2, unit: 'px'},
              spread: {value: 0, unit: 'px'},
              blur: {value: 1, unit: 'px'},
            },
          }),
          {},
          {},
        ),
      ).toThrowError()
    })
  })

  describe('W3C color object support', () => {
    it('transforms shadow with W3C color object', () => {
      const input = getMockToken({
        $value: {
          color: {colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000'},
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
        },
      })
      expect(shadowToCss.transform(input, {}, {})).toBe('0 2px 1px 0 #000000')
    })

    it('transforms shadow with W3C color object and alpha', () => {
      const input = getMockToken({
        $value: {
          color: {colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000'},
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.5,
        },
      })
      expect(shadowToCss.transform(input, {}, {})).toBe('0 2px 1px 0 #00000080')
    })

    it('produces same output for hex string and W3C color object', () => {
      const hexInput = getMockToken({
        $value: {
          color: '#000000',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.5,
        },
      })
      const w3cInput = getMockToken({
        $value: {
          color: {colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000'},
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.5,
        },
      })

      expect(shadowToCss.transform(hexInput, {}, {})).toStrictEqual(shadowToCss.transform(w3cInput, {}, {}))
    })
  })
})

import {getMockToken} from '../test-utilities/index.js'
import {shadowToCss} from './shadowToCss.js'

describe('Transformer: shadowToCss', () => {
  it('transforms `shadow` token to css shadow string', () => {
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
    const expectedOutput = ['0px 2px 1px 0px #000000']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms inset `shadow` token to css shadow string', () => {
    const input = [
      getMockToken({
        $value: {
          color: '#000000',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
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
    const expectedOutput = ['inset 0px 2px 1px 0px #000000', '0px 2px 1px 0px #000000']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('throws an error when required values are missing', () => {
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

    // missing offsets
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

  it('transforms `shadow` token alpha value to css shadow string', () => {
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
      getMockToken({
        $value: {
          color: '#22222266',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.5,
        },
      }),
    ]
    const expectedOutput = ['0px 2px 1px 0px #00000080', '0px 2px 1px 0px #22222280']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms multi-layer `shadow` token to css shadow string', () => {
    const item = getMockToken({
      $value: [
        {
          color: '#000000',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 2, unit: 'px'},
          blur: {value: 1, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.5,
        },
        {
          color: '#22222266',
          offsetX: {value: 0, unit: 'px'},
          offsetY: {value: 8, unit: 'px'},
          blur: {value: 16, unit: 'px'},
          spread: {value: 0, unit: 'px'},
          alpha: 0.2,
        },
      ],
    })

    const expectedOutput = '0px 2px 1px 0px #00000080, 0px 8px 16px 0px #22222233'
    expect(shadowToCss.transform(item, {}, {})).toStrictEqual(expectedOutput)
  })

  it('maintains backward compatibility with string dimension values', () => {
    const input = [
      getMockToken({
        $value: {
          color: '#000000',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0px',
        },
      }),
    ]
    const expectedOutput = ['0px 2px 1px 0px #000000']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })
})

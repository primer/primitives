import {getMockToken} from '../test-utilities/index.js'
import {shadowToCss} from './shadowToCss.js'

describe('Transformer: shadowToCss', () => {
  it('transforms `shadow` token to css shadow string', () => {
    const input = [
      getMockToken({
        $value: {
          color: '#000000',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0',
        },
      }),
    ]
    const expectedOutput = ['0px 2px 1px 0 #000000']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms inset `shadow` token to css shadow string', () => {
    const input = [
      getMockToken({
        $value: {
          color: '#000000',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0px',
          inset: true,
        },
      }),
      getMockToken({
        $value: {
          color: '#000000',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0px',
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
            offsetX: '2px',
            offsetY: '2px',
            blur: '1px',
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
            offsetX: '2px',
            offsetY: '2px',
            blur: '1px',
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
            offsetX: '2px',
            spread: '0px',
            blur: '1px',
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
            offsetY: '2px',
            spread: '0px',
            blur: '1px',
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
            offsetX: '0px',
            offsetY: '2px',
            spread: '0px',
            blur: '1px',
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
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0',
          alpha: 0.5,
        },
      }),
      getMockToken({
        $value: {
          color: '#22222266',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0',
          alpha: 0.5,
        },
      }),
    ]
    const expectedOutput = ['0px 2px 1px 0 #00000080', '0px 2px 1px 0 #22222280']
    expect(input.map(item => shadowToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms multi-layer `shadow` token to css shadow string', () => {
    const item = getMockToken({
      $value: [
        {
          color: '#000000',
          offsetX: '0px',
          offsetY: '2px',
          blur: '1px',
          spread: '0',
          alpha: 0.5,
        },
        {
          color: '#22222266',
          offsetX: '0px',
          offsetY: '8px',
          blur: '16px',
          spread: '0',
          alpha: 0.2,
        },
      ],
    })

    const expectedOutput = '0px 2px 1px 0 #00000080, 0px 8px 16px 0 #22222233'
    expect(shadowToCss.transform(item, {}, {})).toStrictEqual(expectedOutput)
  })
})

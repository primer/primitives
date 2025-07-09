import {getMockToken} from '../test-utilities/index.js'
import {borderToCss} from './borderToCss.js'

describe('Transformer: borderToCss', () => {
  it('transforms `border` token to css border string with string width', () => {
    const input = getMockToken({
      $value: {
        color: '#000000',
        style: 'solid',
        width: '1px',
      },
    })

    const expectedOutput = '1px solid #000000'
    expect(borderToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms `border` token to css border string with dimension object width', () => {
    const input = getMockToken({
      $value: {
        color: '#000000',
        style: 'solid',
        width: {value: 2, unit: 'px'},
      },
    })

    const expectedOutput = '2px solid #000000'
    expect(borderToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms `border` token to css border string with array width from dimension/remPxArray', () => {
    const input = getMockToken({
      $value: {
        color: '#000000',
        style: 'solid',
        width: ['0.125rem', '2px'], // Array from dimension/remPxArray transformer
      },
    })

    const expectedOutput = '2px solid #000000' // Should use px value for styleLint
    expect(borderToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('returns already transformed string values as-is', () => {
    const input = getMockToken({
      $value: '1px solid #000000',
    })

    const expectedOutput = '1px solid #000000'
    expect(borderToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('throws an error when required values are missing', () => {
    // missing width
    expect(() =>
      borderToCss.transform(
        getMockToken({
          $value: {
            color: '#000000',
            style: 'solid',
          },
        }),
        {},
        {},
      ),
    ).toThrowError()

    // missing style
    expect(() =>
      borderToCss.transform(
        getMockToken({
          $value: {
            color: '#000000',
            width: '1px',
          },
        }),
        {},
        {},
      ),
    ).toThrowError()

    // missing color
    expect(() =>
      borderToCss.transform(
        getMockToken({
          $value: {
            style: 'solid',
            width: '1px',
          },
        }),
        {},
        {},
      ),
    ).toThrowError()
  })

  it('throws an error for invalid width values', () => {
    expect(() =>
      borderToCss.transform(
        getMockToken({
          $value: {
            color: '#000000',
            style: 'solid',
            width: 123, // Invalid: number instead of string or object
          },
        }),
        {},
        {},
      ),
    ).toThrowError('Invalid width value')
  })
})

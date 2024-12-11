import {getMockToken} from '../test-utilities/index.js'
import {borderToCss} from './borderToCss.js'

describe('Transformer: borderToCss', () => {
  it('transforms `border` token to css border string', () => {
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

  it('throws an error when required values are missing', () => {
    // missing blur
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

    // missing spread
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

    // missing offsets
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
})

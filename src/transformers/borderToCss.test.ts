import {getMockToken} from '~/src/test-utilities'
import {borderToCss} from './borderToCss'

describe('Transformer: borderToCss', () => {
  it('transforms `border` token to css border string', () => {
    const input = getMockToken({
      value: {
        color: '#000000',
        style: 'solid',
        width: '1px',
      },
    })

    const expectedOutput = '#000000 solid 1px'
    expect(borderToCss.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('throws an error when required values are missing', () => {
    // missing blur
    expect(() =>
      borderToCss.transformer(
        getMockToken({
          value: {
            color: '#000000',
            style: 'solid',
          },
        }),
        {},
      ),
    ).toThrowError()

    // missing spread
    expect(() =>
      borderToCss.transformer(
        getMockToken({
          value: {
            color: '#000000',
            width: '1px',
          },
        }),
        {},
      ),
    ).toThrowError()

    // missing offsets
    expect(() =>
      borderToCss.transformer(
        getMockToken({
          value: {
            style: 'solid',
            width: '1px',
          },
        }),
        {},
      ),
    ).toThrowError()
  })
})

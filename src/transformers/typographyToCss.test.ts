import {getMockToken} from '~/src/test-utilities'
import {typographyToCss} from './typographyToCss'

describe('Transformer: typographyToCss', () => {
  it('transforms `typography` token to css typography string', () => {
    const input = getMockToken({
      value: {
        fontFamily: 'Roboto',
        fontSize: '42px',
        fontWeight: 700,
        letterSpacing: '0.1px',
        lineHeight: '1.2',
      },
    })
    const expectedOutput = '700 42px/1.2 Roboto'
    expect(typographyToCss.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('transforms `typography` with custom `fontStyle` prop token to css typography string', () => {
    const input = getMockToken({
      value: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: 700,
        fontStyle: 'italic',
        lineHeight: '1.2',
      },
    })

    const expectedOutput = 'italic 700 2rem/1.2 Roboto'
    expect(typographyToCss.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('transforms fontWeight string to number', () => {
    const input = [
      getMockToken({
        value: {
          fontFamily: 'Roboto',
          fontSize: '42px',
          fontWeight: '500',
          letterSpacing: '0.1px',
          lineHeight: '1.2',
        },
      }),
      getMockToken({
        value: {
          fontFamily: 'Roboto',
          fontSize: '42px',
          fontWeight: 'black',
          letterSpacing: '0.1px',
          lineHeight: '1.2',
        },
      }),
    ]
    const expectedOutput = ['500 42px/1.2 Roboto', '900 42px/1.2 Roboto']
    expect(input.map(item => typographyToCss.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms fontFamily string and array', () => {
    const input = [
      getMockToken({
        value: {
          fontFamily: 'Roboto, Noto Sans',
          fontSize: '42px',
          fontWeight: '700',
          letterSpacing: '0.1px',
          lineHeight: '1.2',
        },
      }),
      getMockToken({
        value: {
          fontFamily: ['Roboto', 'Noto Sans'],
          fontSize: '42px',
          fontWeight: '700',
          letterSpacing: '0.1px',
          lineHeight: '1.2',
        },
      }),
    ]
    const expectedOutput = ['700 42px/1.2 Roboto, Noto Sans', "700 42px/1.2 Roboto, 'Noto Sans'"]
    expect(input.map(item => typographyToCss.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms lineHeight string to number', () => {
    const input = [
      getMockToken({
        value: {
          fontFamily: 'Roboto',
          fontSize: '42px',
          fontWeight: '700',
          letterSpacing: '0.1px',
          lineHeight: '1.2',
        },
      }),
      getMockToken({
        value: {
          fontFamily: 'Roboto',
          fontSize: '42px',
          fontWeight: '700',
          letterSpacing: '0.1px',
          lineHeight: '1rem',
        },
      }),
      getMockToken({
        value: {
          fontFamily: 'Roboto',
          fontSize: '42px',
          fontWeight: '700',
          letterSpacing: '0.1px',
          lineHeight: '20px',
        },
      }),
    ]
    const expectedOutput = ['700 42px/1.2 Roboto', '700 42px/1rem Roboto', '700 42px/20px Roboto']
    expect(input.map(item => typographyToCss.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('throws an error when required values are missing', () => {
    // missing fontFamily
    expect(() =>
      typographyToCss.transformer(
        getMockToken({
          value: {
            fontSize: '42px',
            fontWeight: '700',
            letterSpacing: '0.1px',
            lineHeight: '1.2',
          },
        }),
        {},
      ),
    ).toThrowError()

    // missing fontSize
    expect(() =>
      typographyToCss.transformer(
        getMockToken({
          value: {
            fontFamily: 'Roboto',
            fontWeight: '700',
            letterSpacing: '0.1px',
            lineHeight: '1.2',
          },
        }),
        {},
      ),
    ).toThrowError()

    // missing fontWeight
    expect(() =>
      typographyToCss.transformer(
        getMockToken({
          value: {
            fontFamily: 'Roboto',
            fontSize: '42px',
            letterSpacing: '0.1px',
            lineHeight: '1.2',
          },
        }),
        {},
      ),
    ).toThrowError()
  })
})

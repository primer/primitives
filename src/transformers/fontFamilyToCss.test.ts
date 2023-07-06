import {getMockToken} from '~/src/test-utilities'
import {fontFamilyToCss} from './fontFamilyToCss'

describe('Transformer: fontFamilyToCss', () => {
  it('transforms fontFamily string', () => {
    const input = [
      getMockToken({
        value: 'Roboto, Noto Sans',
      }),
      getMockToken({
        value: 'Roboto',
      }),
    ]
    const expectedOutput = ['Roboto, Noto Sans', 'Roboto']
    expect(input.map(item => fontFamilyToCss.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms fontFamily array', () => {
    const input = [
      getMockToken({
        value: ['Roboto', 'Noto Sans'],
      }),
      getMockToken({
        value: ['Roboto'],
      }),
    ]
    const expectedOutput = ["Roboto, 'Noto Sans'", 'Roboto']
    expect(input.map(item => fontFamilyToCss.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('throws on invalid value', () => {
    expect(() =>
      fontFamilyToCss.transformer(
        getMockToken({
          value: {
            fontFamily: 'Roboto',
            fontSize: '42px',
          },
        }),
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transformer(
        getMockToken({
          value: 42,
        }),
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transformer(
        getMockToken({
          value: undefined,
        }),
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transformer(
        getMockToken({
          value: [42, 'Roboto'],
        }),
        {},
      ),
    ).toThrowError()
  })
})

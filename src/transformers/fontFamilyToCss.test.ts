import {getMockToken} from '../test-utilities/index.js'
import {fontFamilyToCss} from './fontFamilyToCss.js'

describe('Transformer: fontFamilyToCss', () => {
  it('transforms fontFamily string', () => {
    const input = [
      getMockToken({
        $value: 'Roboto, Noto Sans',
      }),
      getMockToken({
        $value: 'Roboto',
      }),
    ]
    const expectedOutput = ['Roboto, Noto Sans', 'Roboto']
    expect(input.map(item => fontFamilyToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms fontFamily array', () => {
    const input = [
      getMockToken({
        $value: ['Roboto', 'Noto Sans'],
      }),
      getMockToken({
        $value: ['Roboto'],
      }),
    ]
    const expectedOutput = ["Roboto, 'Noto Sans'", 'Roboto']
    expect(input.map(item => fontFamilyToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('throws on invalid value', () => {
    expect(() =>
      fontFamilyToCss.transform(
        getMockToken({
          $value: {
            fontFamily: 'Roboto',
            fontSize: '42px',
          },
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transform(
        getMockToken({
          $value: 42,
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transform(
        getMockToken({
          $value: undefined,
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToCss.transform(
        getMockToken({
          $value: [42, 'Roboto'],
        }),
        {},
        {},
      ),
    ).toThrowError()
  })
})

import {getMockToken} from '../test-utilities'
import {fontFamilyToFigma} from './fontFamilyToFigma'

describe('Transformer: fontFamilyToFigma', () => {
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
    expect(input.map(item => fontFamilyToFigma.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it.skip('transforms fontFamily array', () => {
    const input = [
      getMockToken({
        value: ['Roboto', 'Noto Sans'],
      }),
      getMockToken({
        value: ['Roboto'],
      }),
    ]
    const expectedOutput = ["Roboto, 'Noto Sans'", 'Roboto']
    expect(input.map(item => fontFamilyToFigma.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms fontFamily with platform options', () => {
    const input = [
      getMockToken({
        name: 'Sans',
      }),
      getMockToken({
        name: 'Serif',
      }),
    ]

    const platform = {
      options: {
        fontFamilies: {
          Sans: 'Inter',
          Serif: 'Slab Serif',
        },
      },
    }

    const expectedOutput = ['Inter', 'Slab Serif']
    expect(input.map(item => fontFamilyToFigma.transformer(item, platform))).toStrictEqual(expectedOutput)
  })

  it('throws on invalid value', () => {
    expect(() =>
      fontFamilyToFigma.transformer(
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
      fontFamilyToFigma.transformer(
        getMockToken({
          value: 42,
        }),
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToFigma.transformer(
        getMockToken({
          value: undefined,
        }),
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontFamilyToFigma.transformer(
        getMockToken({
          value: [42, 'Roboto'],
        }),
        {},
      ),
    ).toThrowError()
  })
})

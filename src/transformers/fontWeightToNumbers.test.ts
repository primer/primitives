import {getMockToken} from '../test-utilities/index.js'
import {fontWeightToNumber} from './fontWeightToNumber.js'

describe('Transformer: fontWeightToNumbers', () => {
  it('keeps number if within range of 1-1000', () => {
    const input = [
      getMockToken({
        $value: 100,
      }),
      getMockToken({
        $value: 1000,
      }),
    ]
    const expectedOutput = [100, 1000]
    expect(input.map(item => fontWeightToNumber.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms string of number to number', () => {
    const input = getMockToken({
      $value: '100',
    })
    const expectedOutput = 100
    expect(fontWeightToNumber.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms font strings to number', () => {
    const testCases: [fontWeightNumber: number, fontWeightString: string][] = [
      [100, 'thin'],
      [100, 'hairline'],
      [200, 'extra-light'],
      [200, 'ultra-light'],
      [300, 'light'],
      [400, 'normal'],
      [400, 'regular'],
      [400, 'book'],
      [500, 'medium'],
      [600, 'semi-bold'],
      [600, 'demi-bold'],
      [700, 'bold'],
      [800, 'extra-bold'],
      [800, 'ultra-bold'],
      [900, 'black'],
      [900, 'heavy'],
      [950, 'extra-black'],
      [950, 'ultra-black'],
    ]

    for (const [fontWeightNumber, fontWeightString] of testCases) {
      const input = getMockToken({
        $value: fontWeightString,
      })
      try {
        expect(fontWeightToNumber.transform(input, {}, {})).toStrictEqual(fontWeightNumber)
      } catch (error) {
        throw new Error(`❌ Expects ${fontWeightString} to be transformed to ${fontWeightNumber}. Error: ${error}`)
      }
    }
  })

  it('throws on invalid value', () => {
    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: 1001,
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: 0,
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: undefined,
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: 'Roboto',
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: ['Roboto'],
        }),
        {},
        {},
      ),
    ).toThrowError()

    expect(() =>
      fontWeightToNumber.transform(
        getMockToken({
          $value: {
            fontWeight: 300,
          },
        }),
        {},
        {},
      ),
    ).toThrowError()
  })
})

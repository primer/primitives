import {getMockToken} from '~/src/test-utilities'
import {durationToCss} from './durationToCss'

describe('Transformer: durationToCss', () => {
  it('transforms `duration` token to css duration', () => {
    const input = getMockToken({
      value: '100ms',
    })

    const expectedOutput = '100ms'
    expect(durationToCss.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('transforms `ms` to `s`', () => {
    const input = getMockToken({
      value: '1252ms',
    })

    const expectedOutput = '1.252s'
    expect(durationToCss.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('throws an error when unit is missing or invalid', () => {
    // missing unit
    expect(() =>
      durationToCss.transformer(
        getMockToken({
          value: '1000',
        }),
        {},
      ),
    ).toThrowError()

    // only ms unit is supported
    expect(() =>
      durationToCss.transformer(
        getMockToken({
          value: '1s',
        }),
        {},
      ),
    ).toThrowError()
  })

  it('throws an error when value is number', () => {
    // missing unit
    expect(() =>
      durationToCss.transformer(
        getMockToken({
          value: 1000,
        }),
        {},
      ),
    ).toThrowError()
  })
})

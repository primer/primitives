import {getMockToken} from '../test-utilities/index.js'
import {cubicBezierToCss} from './cubicBezierToCss.js'

describe('Transformer: cubicBezierToCss', () => {
  it('transforms `cubicBezier` token to css cubicBezier function', () => {
    const input = getMockToken({
      $value: [0, 0, 1, 1],
    })

    const expectedOutput = 'cubic-bezier(0,0,1,1)'
    expect(cubicBezierToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('throws an error when required values are missing', () => {
    // missing blur
    expect(() =>
      cubicBezierToCss.transform(
        getMockToken({
          $value: [0, 0, 1],
        }),
        {},
        {},
      ),
    ).toThrowError()

    // missing spread
    expect(() =>
      cubicBezierToCss.transform(
        getMockToken({
          $value: [0, 0, 1, 1, 1, 1],
        }),
        {},
        {},
      ),
    ).toThrowError()

    // missing offsets
    expect(() =>
      cubicBezierToCss.transform(
        getMockToken({
          $value: [0, 0, 1, '1'],
        }),
        {},
        {},
      ),
    ).toThrowError()
  })
})

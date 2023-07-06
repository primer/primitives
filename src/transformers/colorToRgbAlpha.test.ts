import {getMockToken} from '~/src/test-utilities'
import {colorToRgbAlpha} from './colorToRgbAlpha'

describe('Transformer: colorToRgbAlpha', () => {
  it('transforms hex3, hex6 `color` tokens with alpha value', () => {
    const input = [getMockToken({value: '#123', alpha: 0.2}), getMockToken({value: '#343434', alpha: 0.4})]
    const expectedOutput = ['rgba(17, 34, 51, 0.2)', 'rgba(52, 52, 52, 0.4)']
    expect(input.map(item => colorToRgbAlpha.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms hex8 `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({value: '#34343466', alpha: 0.6})
    const expectedOutput = 'rgba(52, 52, 52, 0.6)'
    expect(colorToRgbAlpha.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('transforms rgb `color` tokens with alpha value', () => {
    const input = getMockToken({value: 'rgb(100,200,255)', alpha: 0.6})
    const expectedOutput = 'rgba(100, 200, 255, 0.6)'
    expect(colorToRgbAlpha.transformer(input, {})).toStrictEqual(expectedOutput)
  })

  it('transforms rgba `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({value: 'rgba(100,200,255, 0.2)', alpha: 0.6})
    const expectedOutput = 'rgba(100, 200, 255, 0.6)'
    expect(colorToRgbAlpha.transformer(input, {})).toStrictEqual(expectedOutput)
  })
})

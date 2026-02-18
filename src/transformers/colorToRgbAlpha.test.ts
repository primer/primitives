import {getMockToken} from '../test-utilities/index.js'
import {colorToRgbAlpha} from './colorToRgbAlpha.js'

describe('Transformer: colorToRgbAlpha', () => {
  it('transforms hex3, hex6 `color` tokens with alpha value', () => {
    const input = [getMockToken({$value: '#123', alpha: 0.2}), getMockToken({$value: '#343434', alpha: 0.4})]
    const expectedOutput = ['rgba(17, 34, 51, 0.2)', 'rgba(52, 52, 52, 0.4)']
    expect(input.map(item => colorToRgbAlpha.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms hex8 `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({$value: '#34343466', alpha: 0.6})
    const expectedOutput = 'rgba(52, 52, 52, 0.6)'
    expect(colorToRgbAlpha.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms rgb `color` tokens with alpha value', () => {
    const input = getMockToken({$value: 'rgb(100,200,255)', alpha: 0.6})
    const expectedOutput = 'rgba(100, 200, 255, 0.6)'
    expect(colorToRgbAlpha.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms rgba `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({$value: 'rgba(100,200,255, 0.2)', alpha: 0.6})
    const expectedOutput = 'rgba(100, 200, 255, 0.6)'
    expect(colorToRgbAlpha.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })
  it('transforms rgba `color` tokens with alpha null, ignoring alpha', () => {
    const input = getMockToken({$value: 'rgba(100,200,255, 0.5)', alpha: null})
    const expectedOutput = 'rgba(100,200,255, 0.5)'
    expect(colorToRgbAlpha.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms W3C color object with alpha property', () => {
    const input = getMockToken({
      $value: {
        colorSpace: 'srgb',
        components: [0.5, 0.5, 0.5],
        hex: '#808080',
      },
      alpha: 0.5,
    })
    expect(colorToRgbAlpha.transform(input, {}, {})).toBe('rgba(128, 128, 128, 0.5)')
  })

  it('transforms W3C color object with alpha null', () => {
    const input = getMockToken({
      $value: {
        colorSpace: 'srgb',
        components: [0.5, 0.5, 0.5],
        hex: '#808080',
      },
      alpha: null,
    })
    expect(colorToRgbAlpha.transform(input, {}, {})).toBe('#808080')
  })

  it('produces same output for hex string and W3C color object with alpha', () => {
    const hexInput = getMockToken({$value: '#808080', alpha: 0.5})
    const w3cInput = getMockToken({
      $value: {colorSpace: 'srgb', components: [0.502, 0.502, 0.502], hex: '#808080'},
      alpha: 0.5,
    })
    expect(colorToRgbAlpha.transform(hexInput, {}, {})).toStrictEqual(colorToRgbAlpha.transform(w3cInput, {}, {}))
  })
})

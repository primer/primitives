import {getMockToken} from '../test-utilities/index.js'
import {colorAlphaToCss} from './colorAlphaToCss.js'

describe('Transformer: colorAlphaToCss', () => {
  it('transforms hex3, hex6, hex8 `color` tokens without alpha value', () => {
    const input = [
      getMockToken({$value: '#123'}),
      getMockToken({$value: '#343434'}),
      getMockToken({$value: '#34343455'}),
    ]
    const expectedOutput = ['#123', '#343434', '#34343455']
    expect(input.map(item => colorAlphaToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms hex3, hex6, hex8 `color` tokens with alpha value', () => {
    const input = [
      getMockToken({$value: '#123', alpha: 0.25}),
      getMockToken({$value: '#343434', alpha: 0.6}),
      getMockToken({$value: '#34343466', alpha: 0.1}),
    ]
    const expectedOutput = [
      'color-mix(in srgb, #123, transparent 75%)',
      'color-mix(in srgb, #343434, transparent 40%)',
      'color-mix(in srgb, #34343466, transparent 90%)',
    ]
    expect(input.map(item => colorAlphaToCss.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms references with and without alpha value', () => {
    const input = [
      getMockToken({$value: '{base.color.green.5}'}),
      getMockToken({$value: '{base.color.red.5}', alpha: 0.25}),
    ]
    const expectedOutput = ['{base.color.green.5}', 'color-mix(in srgb, {base.color.red.5}, transparent 75%)']
    expect(input.map(item => colorAlphaToCss.transform(item as TransformedToken, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms color-mix with and without alpha value', () => {
    const input = [
      getMockToken({$value: 'color-mix(in srgb, {base.color.red.5}, transparent 25%)'}),
      getMockToken({$value: 'color-mix(in srgb, {base.color.red.5}, transparent 25%)', alpha: 0.35}),
    ]
    const expectedOutput = [
      'color-mix(in srgb, {base.color.red.5}, transparent 25%)',
      'color-mix(in srgb, color-mix(in srgb, {base.color.red.5}, transparent 25%), transparent 65%)',
    ]
    expect(input.map(item => colorAlphaToCss.transform(item as TransformedToken, {}, {}))).toStrictEqual(expectedOutput)
  })
})

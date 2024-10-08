import {getMockToken} from '../test-utilities/index.js'
import {colorToHex} from './colorToHex.js'

describe('Transform: colorToHex', () => {
  it('transforms `hex3`, `hex6`, and `hex8` tokens to hex value', () => {
    const input = [
      getMockToken({$value: '#123'}),
      getMockToken({$value: '#343434'}),
      getMockToken({$value: '#34343466'}),
    ]
    const expectedOutput = ['#112233', '#343434', '#34343466']
    expect(input.map(item => colorToHex.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms `rgb` and `rgba` to hex value', () => {
    const input = [getMockToken({$value: 'rgb(100,200,255)'}), getMockToken({$value: 'rgba(100,200,255, .4)'})]
    const expectedOutput = ['#64c8ff', '#64c8ff66']
    expect(input.map(item => colorToHex.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms hex3, hex6 `color` tokens with alpha value', () => {
    const input = [getMockToken({$value: '#123', alpha: 0.2}), getMockToken({$value: '#343434', alpha: 0.4})]
    const expectedOutput = ['#11223333', '#34343466']
    expect(input.map(item => colorToHex.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms hex8 `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({$value: '#34343466', alpha: 0.6})
    expect(colorToHex.transform(input, {}, {})).toStrictEqual('#34343499')
  })

  it('transforms rgb `color` tokens with alpha value', () => {
    const input = getMockToken({$value: 'rgb(100,200,255)', alpha: 0.6})
    expect(colorToHex.transform(input, {}, {})).toStrictEqual('#64c8ff99')
  })

  it('transforms rgba `color` tokens with alpha value, ignoring the initial alpha from the hex8', () => {
    const input = getMockToken({$value: 'rgba(100,200,255, 0.2)', alpha: 0.6})
    expect(colorToHex.transform(input, {}, {})).toStrictEqual('#64c8ff99')
  })

  it('transforms rgba `color` tokens with alpha null, ignoring alpha', () => {
    const input = getMockToken({$value: 'rgba(100,200,255, 0.5)', alpha: null})
    expect(colorToHex.transform(input, {}, {})).toStrictEqual('#64c8ff80')
  })
})

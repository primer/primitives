import {getMockToken} from '~/src/test-utilities'
import {colorToHexMix} from './colorToHexMix'

describe('Transformer: colorToHexMix', () => {
  it('transforms hex3, hex6 `color` tokens with mix', () => {
    const input = [
      getMockToken({
        value: '#567',
        mix: {
          color: '#000',
          weight: 0.5,
        },
      }),
      getMockToken({
        value: '#556677',
        mix: {
          color: '#000',
          weight: 0.5,
        },
      }),
    ]
    const expectedOutput = ['#2b333c', '#2b333c']
    expect(input.map(item => colorToHexMix.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms color with mix but ignores alpha property of token', () => {
    const input = [
      getMockToken({
        value: '#556677',
        alpha: 0.4,
        mix: {
          color: '#000',
          weight: 0.2,
        },
      }),
    ]
    const expectedOutput = ['#44525f']
    expect(input.map(item => colorToHexMix.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms color with mix and merges alpha from hex8', () => {
    const input = [
      getMockToken({
        value: '#55667755',
        mix: {
          color: '#000',
          weight: 0.2,
        },
      }),
      getMockToken({
        value: '#55667755',
        mix: {
          color: '#00000022',
          weight: 0.2,
        },
      }),
    ]
    const expectedOutput = ['#15191d77', '#4c5b6a4b']
    expect(input.map(item => colorToHexMix.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('ignore mix if undefined or weight or color is undefined', () => {
    const input = [
      getMockToken({
        value: '#556677',
      }),
      getMockToken({
        value: '#556677',
        mix: {
          weight: 0.2,
        },
      }),
      getMockToken({
        value: '#556677',
        mix: {
          color: '#000000',
        },
      }),
    ]
    const expectedOutput = ['#556677', '#556677', '#556677']
    expect(input.map(item => colorToHexMix.transformer(item, {}))).toStrictEqual(expectedOutput)
  })
})

import {getMockToken} from '../test-utilities/index.js'
import {gradientToCss} from './gradientToCss.js'

describe('Transformer: gradientToCss', () => {
  it('transforms a simple `gradient` token to css gradient string', () => {
    const input = getMockToken({
      $value: [
        {
          color: '#000000',
          position: 0,
        },
        {
          color: '#ffffff',
          position: 1,
        },
      ],
      $type: 'gradient',
    })

    const expectedOutput = 'linear-gradient(180deg, #000000 0%, #ffffff 100%)'
    expect(gradientToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms complex `gradient` token to css gradient string', () => {
    const input = getMockToken({
      $value: [
        {
          color: '#000000',
          position: 0,
        },
        {
          color: '#555',
          position: 0.3,
        },
        {
          color: '#ffffff',
          position: 0.5,
        },
      ],
      $type: 'gradient',
      $extensions: {
        'org.primer.gradient': {
          angle: 45,
        },
      },
    })

    const expectedOutput = 'linear-gradient(45deg, #000000 0%, #555555 30%, #ffffff 50%)'
    expect(gradientToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('transforms gradient with W3C color objects', () => {
    const input = getMockToken({
      $value: [
        {
          color: {colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000'},
          position: 0,
        },
        {
          color: {colorSpace: 'srgb', components: [1, 1, 1], hex: '#ffffff'},
          position: 1,
        },
      ],
      $type: 'gradient',
    })

    const expectedOutput = 'linear-gradient(180deg, #000000 0%, #ffffff 100%)'
    expect(gradientToCss.transform(input, {}, {})).toStrictEqual(expectedOutput)
  })

  it('produces same output for hex string and W3C color object', () => {
    const hexInput = getMockToken({
      $value: [
        {color: '#ff0000', position: 0},
        {color: '#0000ff', position: 1},
      ],
      $type: 'gradient',
    })
    const w3cInput = getMockToken({
      $value: [
        {color: {colorSpace: 'srgb', components: [1, 0, 0], hex: '#ff0000'}, position: 0},
        {color: {colorSpace: 'srgb', components: [0, 0, 1], hex: '#0000ff'}, position: 1},
      ],
      $type: 'gradient',
    })

    expect(gradientToCss.transform(hexInput, {}, {})).toStrictEqual(gradientToCss.transform(w3cInput, {}, {}))
  })
})

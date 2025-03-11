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
})

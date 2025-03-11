import {gradientToken} from './gradientToken.js'

describe('Schema: gradientToken', () => {
  it('parses valid value', () => {
    const validGradientTokens = [
      {
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
      },
      {
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
      },
    ]

    for (const gradient of validGradientTokens) {
      expect(gradientToken.safeParse(gradient).success).toStrictEqual(true)
    }
  })

  it('fails on invalid values', () => {
    const invalidGradientTokens = [
      {
        $value: [
          {
            color: '#000000',
            position: 0,
          },
        ],
        $type: 'gradient',
      },
      {
        $value: [
          {
            color: '#000000',
            position: 0,
          },
          {
            color: '#ffffff',
            position: 2,
          },
        ],
        $type: 'gradient',
      },
    ]

    for (const gradient of invalidGradientTokens) {
      expect(gradientToken.safeParse(gradient).success).toStrictEqual(false)
    }
  })
})

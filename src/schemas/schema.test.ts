import {designToken} from './designToken.js'

describe('Schema validation', () => {
  const validTokenJson = {
    parent: {
      color: {
        $value: '#000000',
        $type: 'color',
        $description: 'The color black',
      },
      duration: {
        $value: {value: 1000, unit: 'ms'},
        $type: 'duration',
        $description: '1000 milliseconds',
      },
    },
  }

  it('returns success on valid schema', () => {
    const parsedToken = designToken.safeParse(validTokenJson)
    expect(parsedToken.success).toStrictEqual(true)
  })

  it('returns success false on invalid schema', () => {
    const parsedToken = designToken.safeParse({
      color: {
        $value: '#000000',
        $type: 'colors',
      },
    })
    expect(parsedToken.success).toStrictEqual(false)
  })

  describe('Group-level properties (W3C Design Tokens spec)', () => {
    it('accepts $description at group level', () => {
      const parsedToken = designToken.safeParse({
        colors: {
          $description: 'Color tokens for the design system',
          primary: {
            $value: '#0066cc',
            $type: 'color',
          },
        },
      })
      expect(parsedToken.success).toStrictEqual(true)
    })

    it('accepts $extensions with org.primer.llm at group level', () => {
      const parsedToken = designToken.safeParse({
        data: {
          $description: 'Data visualization colors',
          $extensions: {
            'org.primer.llm': {
              usage: ['chart-series', 'graph-line'],
              rules: 'Use for data visualizations only.',
            },
          },
          blue: {
            $value: '#0066cc',
            $type: 'color',
          },
        },
      })
      expect(parsedToken.success).toStrictEqual(true)
    })

    it('accepts nested groups with group-level properties', () => {
      const parsedToken = designToken.safeParse({
        colors: {
          $description: 'All color tokens',
          semantic: {
            $description: 'Semantic color tokens',
            $extensions: {
              'org.primer.llm': {
                usage: ['ui-elements'],
                rules: 'Use semantic colors for UI.',
              },
            },
            success: {
              $value: '#28a745',
              $type: 'color',
            },
          },
        },
      })
      expect(parsedToken.success).toStrictEqual(true)
    })
  })
})

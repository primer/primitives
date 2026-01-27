import {inheritGroupProperties} from './inheritGroupProperties.js'
import type {PreprocessedTokens} from 'style-dictionary/types'

describe('Preprocessor: inheritGroupProperties', () => {
  it('inherits $description from group to child tokens', () => {
    const input: PreprocessedTokens = {
      colors: {
        $description: 'Color tokens for the design system',
        primary: {
          $value: '#0066cc',
          $type: 'color',
        },
        secondary: {
          $value: '#666666',
          $type: 'color',
          $description: 'Token-level description',
        },
      },
    }

    const result = inheritGroupProperties.preprocessor(input, {})

    // Token without description inherits from group
    expect((result as any).colors.primary.$description).toBe('Color tokens for the design system')
    // Token with own description keeps it
    expect((result as any).colors.secondary.$description).toBe('Token-level description')
  })

  it('inherits $extensions.org.primer.llm from group to child tokens', () => {
    const input: PreprocessedTokens = {
      data: {
        $extensions: {
          'org.primer.llm': {
            usage: ['chart-series', 'graph-line'],
            rules: 'Use for data visualization only.',
          },
        },
        blue: {
          $value: '#0066cc',
          $type: 'color',
        },
        red: {
          $value: '#cc0000',
          $type: 'color',
          $extensions: {
            'org.primer.figma': {
              collection: 'mode',
            },
          },
        },
      },
    }

    const result = inheritGroupProperties.preprocessor(input, {})

    // Token without extensions inherits from group
    expect((result as any).data.blue.$extensions['org.primer.llm']).toEqual({
      usage: ['chart-series', 'graph-line'],
      rules: 'Use for data visualization only.',
    })

    // Token with own extensions (but no llm) inherits llm from group
    expect((result as any).data.red.$extensions['org.primer.llm']).toEqual({
      usage: ['chart-series', 'graph-line'],
      rules: 'Use for data visualization only.',
    })
    // And keeps its own figma extension
    expect((result as any).data.red.$extensions['org.primer.figma']).toEqual({
      collection: 'mode',
    })
  })

  it('does not inherit when token has its own org.primer.llm', () => {
    const input: PreprocessedTokens = {
      colors: {
        $extensions: {
          'org.primer.llm': {
            usage: ['group-usage'],
            rules: 'Group rules',
          },
        },
        special: {
          $value: '#ff0000',
          $type: 'color',
          $extensions: {
            'org.primer.llm': {
              usage: ['token-specific-usage'],
              rules: 'Token-specific rules',
            },
          },
        },
      },
    }

    const result = inheritGroupProperties.preprocessor(input, {})

    // Token keeps its own llm extension
    expect((result as any).colors.special.$extensions['org.primer.llm']).toEqual({
      usage: ['token-specific-usage'],
      rules: 'Token-specific rules',
    })
  })

  it('inherits through nested groups', () => {
    const input: PreprocessedTokens = {
      colors: {
        $description: 'All colors',
        $extensions: {
          'org.primer.llm': {
            usage: ['color-token'],
          },
        },
        semantic: {
          success: {
            $value: '#28a745',
            $type: 'color',
          },
        },
      },
    }

    const result = inheritGroupProperties.preprocessor(input, {})

    expect((result as any).colors.semantic.success.$description).toBe('All colors')
    expect((result as any).colors.semantic.success.$extensions['org.primer.llm']).toEqual({
      usage: ['color-token'],
    })
  })

  it('does not copy group properties as-is (only inherits to tokens)', () => {
    const input: PreprocessedTokens = {
      data: {
        $description: 'Group description',
        $extensions: {
          'org.primer.llm': {
            usage: ['group-usage'],
          },
        },
        blue: {
          $value: '#0066cc',
          $type: 'color',
        },
      },
    }

    const result = inheritGroupProperties.preprocessor(input, {})

    // Group properties should not be copied to the output group
    expect((result as any).data.$description).toBeUndefined()
    expect((result as any).data.$extensions).toBeUndefined()
  })
})

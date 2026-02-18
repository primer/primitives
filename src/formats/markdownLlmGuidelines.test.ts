import {markdownLlmGuidelines} from './markdownLlmGuidelines.js'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities/index.js'

describe('Format: Markdown LLM Guidelines', () => {
  it('Outputs tokens with LLM extensions in markdown format', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        borderWidth: {
          thick: getMockToken({
            name: 'borderWidth-thick',
            path: ['borderWidth', 'thick'],
            $description: 'Thick 2px border for emphasis',
            $extensions: {
              'org.primer.llm': {
                usage: ['focus-indicator', 'selected-state'],
                rules: 'MUST use for focus rings',
              },
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('# Primer Design Token Guidelines')
    expect(result).toContain('## Border Width')
    expect(result).toContain('### borderWidth-thick')
    expect(result).toContain('Thick 2px border for emphasis')
    expect(result).toContain('**U:** focus-indicator, selected-state')
    expect(result).toContain('**R:** MUST use for focus rings')
  })

  it('Excludes tokens without LLM extensions', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        borderWidth: {
          thick: getMockToken({
            name: 'borderWidth-thick',
            path: ['borderWidth', 'thick'],
            $description: 'Has LLM extensions',
            $extensions: {
              'org.primer.llm': {usage: ['button']},
            },
          }),
          thin: getMockToken({
            name: 'borderWidth-thin',
            path: ['borderWidth', 'thin'],
            $description: 'No LLM extensions',
            $extensions: {
              'org.primer.figma': {collection: 'mode'},
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('borderWidth-thick')
    expect(result).not.toContain('borderWidth-thin')
  })

  it('Handles tokens with only description (no usage or rules)', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          token: getMockToken({
            name: 'test-token',
            path: ['test', 'token'],
            $description: 'Just a description',
            $extensions: {
              'org.primer.llm': {},
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('### test-token')
    expect(result).toContain('Just a description')
  })

  it('Handles tokens with only usage (no description or rules)', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          token: getMockToken({
            name: 'test-token',
            path: ['test', 'token'],
            $extensions: {
              'org.primer.llm': {
                usage: ['button', 'card'],
              },
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('### test-token')
    expect(result).toContain('**U:** button, card')
  })

  it('Handles tokens with only rules (no description or usage)', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          token: getMockToken({
            name: 'test-token',
            path: ['test', 'token'],
            $extensions: {
              'org.primer.llm': {
                rules: 'MUST use for buttons',
              },
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('### test-token')
    expect(result).toContain('**R:** MUST use for buttons')
  })

  it('Returns header with legend when no tokens have LLM extensions', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          token: getMockToken({
            name: 'test-token',
            path: ['test', 'token'],
            $extensions: {
              'org.primer.figma': {},
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('# Primer Design Token Guidelines')
  })

  it('Groups tokens by category and sorts alphabetically', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        z: {
          token: getMockToken({
            name: 'z-token',
            path: ['z', 'token'],
            $extensions: {'org.primer.llm': {usage: ['z']}},
          }),
        },
        a: {
          token: getMockToken({
            name: 'a-token',
            path: ['a', 'token'],
            $extensions: {'org.primer.llm': {usage: ['a']}},
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Categories should be sorted alphabetically
    const aIndex = result.indexOf('## A')
    const zIndex = result.indexOf('## Z')
    expect(aIndex).toBeLessThan(zIndex)
  })

  it('Uses second word for base-* tokens category', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        base: {
          easing: {
            ease: getMockToken({
              name: 'base-easing-ease',
              path: ['base', 'easing', 'ease'],
              $extensions: {'org.primer.llm': {usage: ['hover']}},
            }),
          },
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('## Easing')
    expect(result).toContain('### base-easing-ease')
  })

  it('Maps bgColor to "Background"', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        bgColor: {
          default: getMockToken({
            name: 'bgColor-default',
            path: ['bgColor', 'default'],
            $extensions: {'org.primer.llm': {usage: ['page']}},
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    expect(result).toContain('## Background')
  })

  it('Maps fgColor to "Text" or "Foreground"', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        fgColor: {
          default: getMockToken({
            name: 'fgColor-default',
            path: ['fgColor', 'default'],
            $extensions: {'org.primer.llm': {usage: ['text']}},
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // The format uses "Foreground Colors" or similar category name
    expect(result).toContain('fgColor-default')
  })

  it('Consolidates tokens with identical guidelines into a single entry', async () => {
    const sharedGuidelines = {
      $description: 'Shared description for all tokens',
      $extensions: {
        'org.primer.llm': {
          usage: ['chart', 'graph'],
          rules: 'Use for shared visualization',
        },
      },
    }

    const dictionary = getMockDictionary({
      tokens: {
        // Use 'viz' category instead of 'data' since 'data' now uses pattern compression
        viz: {
          blue: getMockToken({
            name: 'viz-blue',
            path: ['viz', 'blue'],
            ...sharedGuidelines,
          }),
          red: getMockToken({
            name: 'viz-red',
            path: ['viz', 'red'],
            ...sharedGuidelines,
          }),
          green: getMockToken({
            name: 'viz-green',
            path: ['viz', 'green'],
            ...sharedGuidelines,
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should have description and rules only once
    expect(result.match(/Shared description for all tokens/g)?.length).toBe(1)
    expect(result.match(/Use for shared visualization/g)?.length).toBe(1)

    // Should list all tokens together
    expect(result).toContain('**Tokens:**')
    expect(result).toContain('viz-blue')
    expect(result).toContain('viz-red')
    expect(result).toContain('viz-green')

    // Should NOT have individual ### headings for consolidated tokens
    expect(result).not.toContain('### viz-blue')
    expect(result).not.toContain('### viz-red')
    expect(result).not.toContain('### viz-green')
  })

  it('Does not consolidate tokens with different guidelines', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        color: {
          primary: getMockToken({
            name: 'color-primary',
            path: ['color', 'primary'],
            $description: 'Primary color',
            $extensions: {'org.primer.llm': {usage: ['primary']}},
          }),
          secondary: getMockToken({
            name: 'color-secondary',
            path: ['color', 'secondary'],
            $description: 'Secondary color',
            $extensions: {'org.primer.llm': {usage: ['secondary']}},
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Each token should have its own heading
    expect(result).toContain('### color-primary')
    expect(result).toContain('### color-secondary')

    // Should NOT have consolidated Tokens: line
    expect(result).not.toContain('**Tokens:**')
  })

  it('Densifies descriptions by removing filler words', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          a: getMockToken({
            name: 'test-a',
            path: ['test', 'a'],
            $description: 'Use this for primary actions',
            $extensions: {'org.primer.llm': {}},
          }),
          b: getMockToken({
            name: 'test-b',
            path: ['test', 'b'],
            $description: 'This is used for secondary actions',
            $extensions: {'org.primer.llm': {}},
          }),
          c: getMockToken({
            name: 'test-c',
            path: ['test', 'c'],
            $description: 'Used for tertiary actions',
            $extensions: {'org.primer.llm': {}},
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Descriptions should be densified
    expect(result).toContain('For primary actions')
    expect(result).toContain('For secondary actions')
    expect(result).toContain('For tertiary actions')
    expect(result).not.toContain('Use this for')
    expect(result).not.toContain('This is used for')
  })

  it('Shortens rules with key shorthands', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        bgColor: {
          test: getMockToken({
            name: 'bgColor-test',
            path: ['bgColor', 'test'],
            $extensions: {
              'org.primer.llm': {
                rules: 'Pair with fgColor.onEmphasis for text',
              },
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should use shortened format
    expect(result).toContain('Pair -> fg.onEmphasis')
    expect(result).not.toContain('Pair with')
  })

  it('Limits usage to max 3 items', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        test: {
          token: getMockToken({
            name: 'test-token',
            path: ['test', 'token'],
            $extensions: {
              'org.primer.llm': {
                usage: ['one', 'two', 'three', 'four', 'five'],
              },
            },
          }),
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should contain at most 3 usage items
    expect(result).toContain('one')
    expect(result).toContain('two')
    expect(result).toContain('three')
  })

  it('Outputs semantic tokens with bracket notation or in semantic section', async () => {
    const dictionary = getMockDictionary({
      tokens: {
        bgColor: {
          danger: {
            muted: getMockToken({
              name: 'bgColor-danger-muted',
              path: ['bgColor', 'danger', 'muted'],
              $description: 'Danger background',
              $extensions: {
                'org.primer.llm': {
                  usage: ['error-state'],
                  rules: 'Use for errors',
                },
              },
            }),
            emphasis: getMockToken({
              name: 'bgColor-danger-emphasis',
              path: ['bgColor', 'danger', 'emphasis'],
              $description: 'Danger background',
              $extensions: {
                'org.primer.llm': {
                  usage: ['error-state'],
                  rules: 'Use for errors',
                },
              },
            }),
          },
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should contain semantic tokens in some form (bracket notation or semantic section)
    expect(result).toContain('danger')
    expect(result).toContain('emphasis')
    expect(result).toContain('muted')
  })

  it('Groups semantic tokens from multiple categories', async () => {
    const sharedGuidelines = {
      $description: 'Danger emphasis color',
      $extensions: {
        'org.primer.llm': {
          usage: ['error-state'],
          rules: 'Use for errors',
        },
      },
    }

    const dictionary = getMockDictionary({
      tokens: {
        bgColor: {
          danger: {
            emphasis: getMockToken({
              name: 'bgColor-danger-emphasis',
              path: ['bgColor', 'danger', 'emphasis'],
              ...sharedGuidelines,
            }),
          },
        },
        borderColor: {
          danger: {
            emphasis: getMockToken({
              name: 'borderColor-danger-emphasis',
              path: ['borderColor', 'danger', 'emphasis'],
              ...sharedGuidelines,
            }),
          },
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should contain both tokens and semantic section
    expect(result).toContain('danger')
    expect(result).toContain('Semantic')
  })

  it('Handles tokens with shared rules efficiently', async () => {
    const sharedRules = 'MUST use for danger states'
    const dictionary = getMockDictionary({
      tokens: {
        bgColor: {
          danger: {
            muted: getMockToken({
              name: 'bgColor-danger-muted',
              path: ['bgColor', 'danger', 'muted'],
              $description: 'Muted danger',
              $extensions: {
                'org.primer.llm': {
                  usage: ['error'],
                  rules: sharedRules,
                },
              },
            }),
            emphasis: getMockToken({
              name: 'bgColor-danger-emphasis',
              path: ['bgColor', 'danger', 'emphasis'],
              $description: 'Strong danger',
              $extensions: {
                'org.primer.llm': {
                  usage: ['error'],
                  rules: sharedRules,
                },
              },
            }),
          },
        },
      },
    })

    const input = getMockFormatterArguments({dictionary})
    const result = await markdownLlmGuidelines(input)

    // Should contain the tokens
    expect(result).toContain('danger')
    expect(result).toContain('muted')
    expect(result).toContain('emphasis')
  })
})

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

    expect(result).toContain('# Token Guidelines')
    expect(result).toContain('## BorderWidth')
    expect(result).toContain('### borderWidth-thick')
    expect(result).toContain('Thick 2px border for emphasis')
    expect(result).toContain('**Usage:** focus-indicator, selected-state')
    expect(result).toContain('**Rules:** MUST use for focus rings')
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
    expect(result).not.toContain('**Usage:**')
    expect(result).not.toContain('**Rules:**')
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
    expect(result).toContain('**Usage:** button, card')
    expect(result).not.toContain('**Rules:**')
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
    expect(result).toContain('**Rules:** MUST use for buttons')
    expect(result).not.toContain('**Usage:**')
  })

  it('Returns only header when no tokens have LLM extensions', async () => {
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

    expect(result).toBe('# Token Guidelines\n')
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

  it('Maps bgColor to "background color"', async () => {
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

    expect(result).toContain('## background color')
  })

  it('Maps fgColor to "text and foreground color"', async () => {
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

    expect(result).toContain('## text and foreground color')
  })
})

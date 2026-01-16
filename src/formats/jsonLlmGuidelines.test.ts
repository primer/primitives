import {jsonLlmGuidelines} from './jsonLlmGuidelines.js'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities/index.js'
import {format} from 'prettier'

describe('Format: Json LLM Guidelines', () => {
  it('Outputs tokens with LLM extensions in flat structure', async () => {
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

    const expectedOutput = await format(
      JSON.stringify({
        'borderWidth-thick': {
          description: 'Thick 2px border for emphasis',
          usage: ['focus-indicator', 'selected-state'],
          rules: 'MUST use for focus rings',
        },
      }),
      {parser: 'json', printWidth: 120},
    )

    expect(await jsonLlmGuidelines(input)).toStrictEqual(expectedOutput)
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
    const result = await jsonLlmGuidelines(input)
    const parsed = JSON.parse(result)

    expect(parsed).toHaveProperty('borderWidth-thick')
    expect(parsed).not.toHaveProperty('borderWidth-thin')
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
    const result = await jsonLlmGuidelines(input)
    const parsed = JSON.parse(result)

    expect(parsed['test-token']).toEqual({
      description: 'Just a description',
    })
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
    const result = await jsonLlmGuidelines(input)
    const parsed = JSON.parse(result)

    expect(parsed['test-token']).toEqual({
      usage: ['button', 'card'],
    })
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
    const result = await jsonLlmGuidelines(input)
    const parsed = JSON.parse(result)

    expect(parsed['test-token']).toEqual({
      rules: 'MUST use for buttons',
    })
  })

  it('Returns empty object when no tokens have LLM extensions', async () => {
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
    const result = await jsonLlmGuidelines(input)
    const parsed = JSON.parse(result)

    expect(parsed).toEqual({})
  })

  it('Sorts tokens by name', async () => {
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
    const result = await jsonLlmGuidelines(input)
    const keys = Object.keys(JSON.parse(result))

    expect(keys).toEqual(['a-token', 'z-token'])
  })
})

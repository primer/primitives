import {cssAdvanced} from './cssAdvanced.js'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities/index.js'
import {format} from 'prettier'
import type {TransformedToken} from 'style-dictionary/types'

describe('Format: tokens nested in media query', () => {
  /**
   * Test cases for formatting tokens with simple css variables
   */
  it('Formats tokens as css variables with default :root selector', async () => {
    const input = getMockFormatterArguments()
    const expectedOutput = await format(
      `:root {
      --red: transformedValue;
    }`,
      {
        parser: 'css',
        printWidth: 500,
      },
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with custom selectors', async () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'test.css',
        options: {
          showFileHeader: false,
          selector: `[data-color-mode="dark"]`,
        },
      },
    })
    const expectedOutput = await format(
      ` [data-color-mode="dark"] {
            --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  /**
   * Test cases for formatting using media queries
   */
  it('Formats all tokens with screen media query and default selector', async () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'tokens.ts',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media screen',
            },
          ],
        },
      },
    })
    const expectedOutput = await format(
      ` @media screen {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats all tokens with screen media query and custom selector', async () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'tokens.ts',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media screen',
              selector: '[data-color-mode="dark"]',
            },
          ],
        },
      },
    })
    const expectedOutput = await format(
      ` @media screen {
        [data-color-mode="dark"] {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Outputs nothing if no matching media query is found', async () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'size-coarse.css',
        options: {
          queries: [
            {
              query: '@media screen',
              matcher: (token: TransformedToken) => token.filePath.includes('desktop'),
            },
          ],
          showFileHeader: false,
        },
      },
    })
    expect(await cssAdvanced(input)).toStrictEqual('')
  })

  it('Formats only matching tokens in defined media query using matcher', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            gap: getMockToken({
              name: 'tokens-subgroup-gap',
              filePath: 'size-fine.json',
            }),
            bigGap: getMockToken({
              name: 'tokens-subgroup-gap',
              filePath: 'size-coarse.json',
            }),
          },
        },
      }),
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media (pointer: fine)',
              matcher: (token: TransformedToken) => token.filePath.includes('size-fine.json'),
            },
          ],
        },
      },
    })
    const expectedOutput = await format(
      ` @media (pointer: fine) {
        :root {
          --tokens-subgroup-gap: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
  /**
   * Test cases for formatting using selectors
   */
  it('Formats all tokens with custom selectors', async () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'dark.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              selector:
                '[data-color-mode="dark"][data-dark-theme="dark"], [data-color-mode="auto"][data-light-theme="dark"]',
            },
          ],
        },
      },
    })
    const expectedOutput = await format(
      ` [data-color-mode="dark"][data-dark-theme="dark"],
        [data-color-mode="auto"][data-light-theme="dark"] {
          --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats only matching tokens with custom selectors', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            gap: getMockToken({
              name: 'tokens-subgroup-gap',
              filePath: 'size-fine.json',
            }),
            bigGap: getMockToken({
              name: 'tokens-subgroup-gap',
              filePath: 'size-coarse.json', // should not show up in output
            }),
          },
        },
      }),
      file: {
        destination: 'dark.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              selector:
                '[data-color-mode="dark"][data-dark-theme="dark"], [data-color-mode="auto"][data-light-theme="dark"]',
              matcher: (token: TransformedToken) => token.filePath.includes('size.json'), // no token in this file
            },
            {
              selector: '[data-color-mode="auto"][data-dark-theme="dark"]',
              matcher: (token: TransformedToken) => token.filePath.includes('size-fine.json'),
            },
          ],
        },
      },
    })
    const expectedOutput = await format(
      `[data-color-mode="auto"][data-dark-theme="dark"] {
            --tokens-subgroup-gap: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
  /**
   * Test cases for formatting tokens with simple css variables
   */
  it('Shows comment if option.formatting.commentStyle is long or not set', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              $value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {
        formatting: {
          commentStyle: 'long',
        },
        usesDtcg: true,
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media (prefers-color-scheme: light)',
            },
          ],
        },
      },
    })

    const inputUnset = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              $value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {
        usesDtcg: true,
      }, // description not set
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media (prefers-color-scheme: light)',
            },
          ],
        },
      },
    })

    const expectedOutput = await format(
      ` @media (prefers-color-scheme: light){
        :root {
          --red: transformedValue; /** This is a description */
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
    expect(await cssAdvanced(inputUnset)).toStrictEqual(expectedOutput)
  })

  it('Hides comment if option.formatting.commentStyle is set to none', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              $value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {
        formatting: {
          commentStyle: 'none',
        },
        usesDtcg: true,
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              query: '@media (prefers-color-scheme: dark)',
            },
          ],
        },
      },
    })

    const expectedOutput = await format(
      ` @media (prefers-color-scheme: dark) {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(await cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
})

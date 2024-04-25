import {cssAdvanced} from './cssAdvanced'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities'
import {format} from 'prettier'
import type {TransformedToken} from 'style-dictionary'

describe('Format: tokens nested in media query', () => {
  /**
   * Test cases for formatting tokens with simple css variables
   */
  it('Formats tokens as css variables with default :root selector', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(
      `:root {
      --red: transformedValue;
    }`,
      {
        parser: 'css',
        printWidth: 500,
      },
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with custom selectors', () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'test.css',
        options: {
          showFileHeader: false,
          selector: `[data-color-mode="dark"]`,
        },
      },
    })
    const expectedOutput = format(
      ` [data-color-mode="dark"] {
            --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  /**
   * Test cases for formatting using media queries
   */
  it('Formats all tokens with screen media query and default selector', () => {
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
    const expectedOutput = format(
      ` @media screen {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats all tokens with screen media query and custom selector', () => {
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
    const expectedOutput = format(
      ` @media screen {
        [data-color-mode="dark"] {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Outputs nothing if no matching media query is found', () => {
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
    expect(cssAdvanced(input)).toStrictEqual('')
  })

  it('Formats only matching tokens in defined media query using matcher', () => {
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
    const expectedOutput = format(
      ` @media (pointer: fine) {
        :root {
          --tokens-subgroup-gap: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
  /**
   * Test cases for formatting using selectors
   */
  it('Formats all tokens with custom selectors', () => {
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
    const expectedOutput = format(
      ` [data-color-mode="dark"][data-dark-theme="dark"],
        [data-color-mode="auto"][data-light-theme="dark"] {
          --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats only matching tokens with custom selectors', () => {
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
    const expectedOutput = format(
      `[data-color-mode="auto"][data-dark-theme="dark"] {
            --tokens-subgroup-gap: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
  /**
   * Test cases for formatting tokens with simple css variables
   */
  it('Shows comment if option.description is true', () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {
        descriptions: true,
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

    const expectedOutput = format(
      ` @media (prefers-color-scheme: light){
        :root {
          --red: transformedValue; /* This is a description */
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Hides comment if option.description is false or not set', () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {
        descriptions: false,
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

    const inputUnset = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            red: getMockToken({
              name: 'red',
              value: 'transformedValue',
              comment: 'This is a description',
            }),
          },
        },
      }),
      options: {}, // description not set
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

    const expectedOutput = format(
      ` @media (prefers-color-scheme: dark) {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
    expect(cssAdvanced(inputUnset)).toStrictEqual(expectedOutput)
  })
})

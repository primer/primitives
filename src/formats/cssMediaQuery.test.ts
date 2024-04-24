import {cssMediaQuery} from './cssMediaQuery'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities'
import {format} from 'prettier'
import type {TransformedToken} from 'style-dictionary'

describe('Format: tokens nested in media query', () => {
  it('Wraps in :root if no media query defined', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(
      `:root {
          --red: transformedValue;
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssMediaQuery(input)).toStrictEqual(expectedOutput)
  })

  it('Wrap all tokens in screen media query', () => {
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
    expect(cssMediaQuery(input)).toStrictEqual(expectedOutput)
  })

  it('Ignore if no matching media query is found', () => {
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
    expect(cssMediaQuery(input)).toStrictEqual('')
  })

  it('Wraps in defined media query if files match', () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            gap: getMockToken({
              name: 'tokens-subgroup-gap',
              filePath: 'size-fine.json',
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
    expect(cssMediaQuery(input)).toStrictEqual(expectedOutput)
  })

  it('Show comment if option.description is true', () => {
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
    expect(cssMediaQuery(input)).toStrictEqual(expectedOutput)
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
    expect(cssMediaQuery(input)).toStrictEqual(expectedOutput)
    expect(cssMediaQuery(inputUnset)).toStrictEqual(expectedOutput)
  })
})

import {cssWrapMediaQuery} from './cssWrapMediaQuery'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: tokens nested in media query', () => {
  it('Wraps in screen if no media query defined', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(
      ` @media screen {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssWrapMediaQuery(input)).toStrictEqual(expectedOutput)
  })

  it('Wraps in screen if no matching media query is found', () => {
    const input = getMockFormatterArguments({
      options: {
        mediaQuery: {
          'size-fine.css': '(pointer: fine)',
        },
      },
      file: {
        destination: 'size-coarse.css',
        options: {
          showFileHeader: false,
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
    expect(cssWrapMediaQuery(input)).toStrictEqual(expectedOutput)
  })

  it('Wraps in defined media query if files match', () => {
    const input = getMockFormatterArguments({
      options: {
        mediaQuery: {
          'size-fine.css': '(pointer: fine)',
        },
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
        },
      },
    })
    const expectedOutput = format(
      ` @media (pointer: fine) {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssWrapMediaQuery(input)).toStrictEqual(expectedOutput)
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
        mediaQuery: {
          'size-fine.css': '(pointer: fine)',
        },
        descriptions: true,
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
        },
      },
    })

    const expectedOutput = format(
      ` @media (pointer: fine) {
        :root {
          --red: transformedValue; /* This is a description */
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssWrapMediaQuery(input)).toStrictEqual(expectedOutput)
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
        mediaQuery: {
          'size-fine.css': '(pointer: fine)',
        },
        descriptions: false,
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
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
      options: {
        mediaQuery: {
          'size-fine.css': '(pointer: fine)',
        },
      },
      file: {
        destination: 'size-fine.css',
        options: {
          showFileHeader: false,
        },
      },
    })

    const expectedOutput = format(
      ` @media (pointer: fine) {
        :root {
          --red: transformedValue;
        }
      }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssWrapMediaQuery(input)).toStrictEqual(expectedOutput)
    expect(cssWrapMediaQuery(inputUnset)).toStrictEqual(expectedOutput)
  })
})

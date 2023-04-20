import {cssWrapMediaQuery} from './cssWrapMediaQuery'
import {getMockFormatterArguments} from '~/src/test-utilities'
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
})

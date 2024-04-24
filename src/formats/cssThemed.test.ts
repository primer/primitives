import {cssAdvanced} from './cssAdvanced'
import {getMockFormatterArguments} from '../test-utilities'
import {format} from 'prettier'

describe('Format: Css Themed', () => {
  it('Formats tokens', () => {
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
        destination: 'dark.css',
        options: {
          showFileHeader: false,
          queries: [
            {
              selector:
                '[data-color-mode="dark"][data-dark-theme="dark"], [data-color-mode="auto"][data-light-theme="dark"]',
            },
            {
              query: '@media (prefers-color-scheme: dark)',
              selector: '[data-color-mode="auto"][data-dark-theme="dark"]',
            },
          ],
        },
      },
    })
    const expectedOutput = format(
      ` [data-color-mode="dark"][data-dark-theme="dark"],
        [data-color-mode="auto"][data-light-theme="dark"] {
          --red: transformedValue;
        }
         @media (prefers-color-scheme: dark) {
          [data-color-mode="auto"][data-dark-theme="dark"] {
            --red: transformedValue;
          }
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with only one selector', () => {
    const input = getMockFormatterArguments({
      file: {
        destination: 'dark.css',
        options: {
          showFileHeader: false,
          selector: '',
          queries: [
            {
              query: `[data-color-mode="dark"]`,
            },
          ],
        },
      },
    })
    const expectedOutput = format(
      `[data-color-mode="dark"]{
        --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
})

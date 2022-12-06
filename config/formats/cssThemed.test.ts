import {cssThemed} from './cssThemed'
import {getMockFormatterArguments} from '~/src/test-utilities'
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
    expect(cssThemed(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with custom selectors', () => {
    const input = getMockFormatterArguments({
      options: {
        selector: `[data-color-mode="dark"][data-dark-theme="dark"]`,
        selectorLight: `[data-color-mode="auto"][data-light-theme="dark"]`,
        selectorDark: `[data-color-mode="auto"][data-dark-theme="dark"]`,
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
    expect(cssThemed(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with only options.selector', () => {
    const input = getMockFormatterArguments({
      options: {
        selector: `[data-color-mode="dark"]`,
      },
    })
    const expectedOutput = format(
      `[data-color-mode="dark"]{
        --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssThemed(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with only options.selectorLight', () => {
    const input = getMockFormatterArguments({
      options: {
        selectorLight: `[data-color-mode="light"]`,
      },
    })
    const expectedOutput = format(
      `:root, [data-color-mode="light"]{
        --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssThemed(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with only options.selectorDark', () => {
    const input = getMockFormatterArguments({
      options: {
        selectorLight: `[data-color-mode="dark"]`,
      },
    })
    const expectedOutput = format(
      `:root, [data-color-mode="dark"]{
        --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssThemed(input)).toStrictEqual(expectedOutput)
  })
})

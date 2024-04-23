import {cssVariables} from './cssVariables'
import {getMockFormatterArguments} from '../test-utilities'
import {format} from 'prettier'

describe('Format: css/variables', () => {
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
    expect(cssVariables(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens with custom selectors', () => {
    const input = getMockFormatterArguments({
      options: {
        selector: `[data-color-mode="dark"]`,
      },
    })
    const expectedOutput = format(
      ` [data-color-mode="dark"] {
            --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssVariables(input)).toStrictEqual(expectedOutput)
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
    expect(cssVariables(input)).toStrictEqual(expectedOutput)
  })
})

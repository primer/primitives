import {cssAdvanced} from './cssAdvanced'
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

  it('Formats tokens with only options.selector', () => {
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
      `[data-color-mode="dark"]{
        --red: transformedValue;
    }`,
      {parser: 'css', printWidth: 500},
    )
    expect(cssAdvanced(input)).toStrictEqual(expectedOutput)
  })
})

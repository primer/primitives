import {javascriptCommonJs} from './javascript-commonJs'
import {getMockFormatterArguments} from '~/src/test-utilities/getMockFormatterArguments'
import {format} from 'prettier'

describe('Format: CommonJs', () => {
  it('Formats tokens adding prefix', () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test'
      }
    })

    const expectedOutput = format(
      `exports.default = {
      test: {
        tokens: {
          subgroup: {
            red: "transformedValue",
          },
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500}
    )

    expect(javascriptCommonJs(input)).toBe(expectedOutput)
  })

  it('Formats tokens without prefix', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(
      `exports.default = {
      tokens: {
        subgroup: {
          red: "transformedValue",
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500}
    )
    expect(javascriptCommonJs(input)).toStrictEqual(expectedOutput)
  })
})

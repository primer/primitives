import {javascriptCommonJs} from './javascriptCommonJs.js'
import {getMockFormatterArguments} from '../test-utilities/index.js'
import {format} from 'prettier'

describe('Format: CommonJs', () => {
  it('Formats tokens adding prefix', async () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test',
      },
    })

    const expectedOutput = await format(
      `exports.default = {
      test: {
        tokens: {
          subgroup: {
            red: "transformedValue",
          },
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500},
    )

    expect(await javascriptCommonJs(input)).toBe(expectedOutput)
  })

  it('Formats tokens without prefix', async () => {
    const input = getMockFormatterArguments()
    const expectedOutput = await format(
      `exports.default = {
      tokens: {
        subgroup: {
          red: "transformedValue",
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500},
    )
    expect(await javascriptCommonJs(input)).toStrictEqual(expectedOutput)
  })
})

import {javascriptCommonJs} from './javascriptCommonJs'
import {getMockFormatterArguments} from '../test-utilities'
import syncPrettier from '@prettier/sync'

describe('Format: CommonJs', () => {
  it('Formats tokens adding prefix', () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test',
      },
    })

    const expectedOutput = syncPrettier.format(
      `module.exports = {
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

    expect(javascriptCommonJs(input)).toBe(expectedOutput)
  })

  it('Formats tokens without prefix', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = syncPrettier.format(
      `module.exports = {
      tokens: {
        subgroup: {
          red: "transformedValue",
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500},
    )
    expect(javascriptCommonJs(input)).toStrictEqual(expectedOutput)
  })
})

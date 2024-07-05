import {javascriptEsm} from './javascriptEsm'
import {getMockFormatterArguments} from '../test-utilities'
import syncPrettier from '@prettier/sync'

describe('Format: ESM', () => {
  it('Formats tokens adding prefix', () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test',
      },
    })
    const expectedOutput = syncPrettier.format(
      `export default {
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
    expect(javascriptEsm(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens without prefix', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = syncPrettier.format(
      `export default {
      tokens: {
        subgroup: {
          red: "transformedValue",
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500},
    )
    expect(javascriptEsm(input)).toStrictEqual(expectedOutput)
  })
})

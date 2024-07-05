import {javascriptEsm} from './javascriptEsm.js'
import {getMockFormatterArguments} from '../test-utilities/index.js'
import {format} from 'prettier'

describe('Format: ESM', () => {
  it('Formats tokens adding prefix', async () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test',
      },
    })
    const expectedOutput = await format(
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
    expect(await javascriptEsm(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens without prefix', async () => {
    const input = getMockFormatterArguments()
    const expectedOutput = await format(
      `export default {
      tokens: {
        subgroup: {
          red: "transformedValue",
        },
      },
    };`,
      {parser: 'typescript', printWidth: 500},
    )
    expect(await javascriptEsm(input)).toStrictEqual(expectedOutput)
  })
})

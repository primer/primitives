import {jsonOneDimensional} from './jsonOneDimensional.js'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '../test-utilities/index.js'
import syncPrettier from '@prettier/sync'

describe('Format: Json One Dimensional', () => {
  const dictionary = getMockDictionary({
    tokens: {
      subgroup: {
        red: getMockToken({
          name: 'tokens-subgroup-red',
          path: ['tokens', 'subgroup', 'red'],
        }),
      },
    },
  })

  test('Formats tokens as object', () => {
    const input = getMockFormatterArguments({
      dictionary,
      options: {outputVerbose: true},
    })

    const expectedOutput = syncPrettier.format(
      `{
        "tokens-subgroup-red": {
          "name": "tokens-subgroup-red",
          "path": ["tokens", "subgroup", "red"],
          "original": {
            "value": "originalValue",
            "attributes": {}
          },
          "filePath": "file.json",
          "isSource": true,
          "value": "transformedValue",
          "attributes": {}
        }
      }`,
      {parser: 'json', printWidth: 500},
    )
    expect(jsonOneDimensional(input)).toStrictEqual(expectedOutput)
  })

  test('Formats tokens as values only', () => {
    const input = getMockFormatterArguments({
      dictionary,
    })

    const expectedOutput = syncPrettier.format(
      `{
        "tokens-subgroup-red": "transformedValue"
      }`,
      {parser: 'json', printWidth: 500},
    )
    expect(jsonOneDimensional(input)).toStrictEqual(expectedOutput)
  })
})

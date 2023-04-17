import {jsonOneDimensional} from './jsonOneDimensional'
import {getMockDictionary, getMockFormatterArguments, getMockToken} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: Json One Dimensional', () => {
  const input = getMockFormatterArguments({
    dictionary: getMockDictionary({
      tokens: {
        subgroup: {
          red: getMockToken({
            name: 'tokens-subgroup-red',
            path: ['tokens', 'subgroup', 'red'],
          }),
        },
      },
    }),
  })

  test('Formats tokens', () => {
    const expectedOutput = format(
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
})

import {jsonNestedPrefixed} from './jsonNestedPrefixed'
import {getMockFormatterArguments} from '../test-utilities'
import {format} from 'prettier'

describe('Format: Json nested with prefixes', () => {
  test('Formats tokens with prefix', async () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test',
      },
    })

    const expectedOutput = await format(
      `{
        "test": {
          "tokens": {
            "subgroup": {
              "red": "transformedValue"
            }
          }
        }
      }`,
      {parser: 'json', printWidth: 500},
    )

    expect(await jsonNestedPrefixed(input)).toBe(expectedOutput)
  })

  test('Formats tokens without prefix', async () => {
    const input = getMockFormatterArguments()
    const expectedOutput = await format(
      `{
        "tokens": {
          "subgroup": {
            "red": "transformedValue"
          }
        }
      }`,
      {parser: 'json', printWidth: 500},
    )
    expect(await jsonNestedPrefixed(input)).toStrictEqual(expectedOutput)
  })

  test('Formats tokens without verbose setting', async () => {
    const input = getMockFormatterArguments({
      options: {
        outputVerbose: true,
      },
    })
    const expectedOutput = await format(
      `{
        "tokens": {
          "subgroup": {
            "red": {
               "name": "red",
               "path": ["tokens", "subgroup", "red"],
               "original": {
                 "value": "originalValue",
                 "attributes": {}
               },
               "filePath": "file.json",
               "isSource": true,
               "value": "transformedValue",
               "attributes": {},
               "description": "This is a description"
            }
          }
        }
      }`,
      {parser: 'json', printWidth: 500},
    )
    expect(await jsonNestedPrefixed(input)).toStrictEqual(expectedOutput)
  })
})

import {jsonNestedPrefixed} from './jsonNestedPrefixed'
import {getMockFormatterArguments} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: Json nested with prefixes', () => {
  test('Formats tokens with prefix', () => {
    const input = getMockFormatterArguments({
      platform: {
        prefix: 'test'
      }
    })

    const expectedOutput = format(
      `{
        "test": {
          "tokens": {
            "subgroup": {
              "red": "transformedValue"
            }
          }
        }
      }`,
      {parser: 'json', printWidth: 500}
    )

    expect(jsonNestedPrefixed(input)).toBe(expectedOutput)
  })

  test('Formats tokens without prefix', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(
      `{
        "tokens": {
          "subgroup": {
            "red": "transformedValue"
          }
        }
      }`,
      {parser: 'json', printWidth: 500}
    )
    expect(jsonNestedPrefixed(input)).toStrictEqual(expectedOutput)
  })

  test('Formats tokens without verbose setting', () => {
    const input = getMockFormatterArguments({
      options: {
        outputVerbose: true
      }
    })
    const expectedOutput = format(
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
               "attributes": {}
            }
          }
        }
      }`,
      {parser: 'json', printWidth: 500}
    )
    expect(jsonNestedPrefixed(input)).toStrictEqual(expectedOutput)
  })
})

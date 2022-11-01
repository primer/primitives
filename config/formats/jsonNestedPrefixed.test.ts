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
})

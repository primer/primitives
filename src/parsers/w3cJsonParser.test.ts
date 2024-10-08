import {w3cJsonParser} from './w3cJsonParser.js'
import {parserOutput as expectedOutput, getMockParserInput} from '../test-utilities/index.js'

describe('Parser: w3c token json5 parser', () => {
  it('parses valid w3c json5', () => {
    const result = w3cJsonParser.parser(getMockParserInput('json5.w3c'))
    expect(result).toStrictEqual(expectedOutput)
  })

  it('parses valid w3c json', () => {
    const result = w3cJsonParser.parser(getMockParserInput('json.w3c'))
    expect(result).toStrictEqual(expectedOutput)
  })

  it('parses valid json5', () => {
    const result = w3cJsonParser.parser(getMockParserInput('json5.default'))
    expect(result).toStrictEqual(expectedOutput)
  })

  it('parses valid json', () => {
    const result = w3cJsonParser.parser(getMockParserInput('json.default'))
    expect(result).toStrictEqual(expectedOutput)
  })

  it('it parses empty object `{}` json', () => {
    const result = w3cJsonParser.parser(getMockParserInput('{}'))
    expect(result).toStrictEqual({})
  })

  it('throws an error while parsing invalid empty JSON', () => {
    expect(() => {
      w3cJsonParser.parser(getMockParserInput('', 'invalidFile.json'))
    }).toThrow(`Invalid json5 file "invalidFile.json".`)
  })
})

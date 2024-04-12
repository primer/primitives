import {cssCustomMedia} from './cssCustomMedia'
import {getMockFormatterArguments} from '../test-utilities'
import {format} from 'prettier'

describe('Format: tokens to custom-media', () => {
  it('Formats tokens with custom media', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = format(`@custom-media --red transformedValue;`, {parser: 'css', printWidth: 500})
    expect(cssCustomMedia(input)).toStrictEqual(expectedOutput)
  })
})

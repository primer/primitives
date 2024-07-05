import {cssCustomMedia} from './cssCustomMedia.js'
import {getMockFormatterArguments} from '../test-utilities/index.js'
import {format} from 'prettier'

describe('Format: tokens to custom-media', () => {
  it('Formats tokens with custom media', async () => {
    const input = getMockFormatterArguments()
    const expectedOutput = await format(`@custom-media --red transformedValue;`, {
      parser: 'css',
      printWidth: 500,
    })
    expect(await cssCustomMedia(input)).toStrictEqual(expectedOutput)
  })
})

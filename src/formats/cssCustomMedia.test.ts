import {cssCustomMedia} from './cssCustomMedia'
import {getMockFormatterArguments} from '../test-utilities'
import syncPrettier from '@prettier/sync'

describe('Format: tokens to custom-media', () => {
  it('Formats tokens with custom media', () => {
    const input = getMockFormatterArguments()
    const expectedOutput = syncPrettier.format(`@custom-media --red transformedValue;`, {
      parser: 'css',
      printWidth: 500,
    })
    expect(cssCustomMedia(input)).toStrictEqual(expectedOutput)
  })
})

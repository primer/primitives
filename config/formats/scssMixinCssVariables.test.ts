import {scssMixinCssVariables} from './scssMixinCssVariables'
import {getMockFormatterArguments} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: Scss with sss variables', () => {
  it('Formats tokens', () => {
    const mixinName = 'mixTest'
    const input = getMockFormatterArguments({
      options: {
        mixinName
      }
    })

    const expectedOutput = format(
      `@mixin ${mixinName} {
      & {
        --red: transformedValue;
      }
    }`,
      {parser: 'scss', printWidth: 500}
    )
    expect(scssMixinCssVariables(input)).toStrictEqual(expectedOutput)
  })

  it('throws an error if options.mixinName is missing', () => {
    expect(() => {
      scssMixinCssVariables(getMockFormatterArguments())
    }).toThrow('Missing argument for scssMixinCssVariables formatter: "options.mixinName"')
  })
})

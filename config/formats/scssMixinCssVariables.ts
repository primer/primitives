import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import type {FormatterArguments} from 'style-dictionary/types/Format'

const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to scss mixin with css variables
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const scssMixinCssVariables: StyleDictionary.Formatter = ({dictionary, options, file}: FormatterArguments) => {
  if (!options.mixinName) throw new Error('Missing argument for scssMixinCssVariables formatter: "options.mixinName"')

  const {outputReferences, mixinName} = options

  const output = `${fileHeader({file})}@mixin ${mixinName} {\n  & {\n${formattedVariables({
    format: 'css',
    dictionary,
    outputReferences
  })}\n  }\n}\n`

  // return prettified
  return format(output, {parser: 'scss', printWidth: 500})
}

import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'

const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to scss mixin with css variables
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const scssMixinCssVariables: StyleDictionary.Formatter = ({dictionary, file, options}) => {
  const {outputReferences, mixinName} = options

  const output = `${fileHeader({file})}@mixin ${mixinName} {\n  & {\n${formattedVariables({
    format: 'css',
    dictionary,
    outputReferences
  })}\n  }\n}\n`
  // return prettified
  return format(output, {parser: 'scss', printWidth: 500})
}

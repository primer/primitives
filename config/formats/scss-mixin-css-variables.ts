import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'

const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

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

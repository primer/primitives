import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import type {LineFormatting} from 'style-dictionary/types/FormatHelpers'
const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to csssection
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @param arguments.options outputReferences `boolean`, selector `string`
 * @returns formatted `string`
 */
export const cssVariables: StyleDictionary.Formatter = ({dictionary, options = {}, file}: FormatterArguments) => {
  const selector = options.selector ? options.selector : `:root`
  const {outputReferences, descriptions} = options
  const formatting: LineFormatting = {
    commentStyle: descriptions ? 'long' : 'none',
  }

  const output = `${fileHeader({file})}${selector} {\n${formattedVariables({
    format: 'css',
    dictionary,
    outputReferences,
    formatting,
  })}\n}\n`
  // return formatted output
  return format(output, {parser: 'css', printWidth: 500})
}

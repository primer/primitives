import StyleDictionary from 'style-dictionary'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import {format} from 'prettier'
import type {LineFormatting} from 'style-dictionary/types/FormatHelpers'
const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to css with @custom-media
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const cssWrapMediaQuery: StyleDictionary.Formatter = ({dictionary, options, file}: FormatterArguments) => {
  const {outputReferences, descriptions} = options
  const formatting: LineFormatting = {
    commentStyle: descriptions ? 'long' : 'none',
  }
  // get specific media query or use screen
  const mediaQuery = options.mediaQuery?.[file.destination] || 'screen'
  // add file header
  const output = [fileHeader({file})]
  // add meadia query
  output.push(`@media ${mediaQuery} {\n:root {`)
  // add tokens
  output.push(formattedVariables({format: 'css', dictionary, outputReferences, formatting}))
  // close media query
  output.push(`}\n}`)
  // return prettified
  return format(output.join('\n'), {parser: 'css', printWidth: 500})
}

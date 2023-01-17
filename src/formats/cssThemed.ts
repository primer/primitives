import StyleDictionary from 'style-dictionary'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import {format} from 'prettier'
const {fileHeader, formattedVariables} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to css with prefers dark and light section
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @param arguments.options outputReferences `boolean`, selector `string`, selectorLight `string`, selectorDark `string`
 * @returns formatted `string`
 */
export const cssThemed: StyleDictionary.Formatter = ({dictionary, options = {}, file}: FormatterArguments) => {
  const {selector, selectorLight, selectorDark} = options
  const {outputReferences} = options
  // add file header
  const output = [fileHeader({file})]
  // add single theme css
  output.push(`${selector || ':root'}${selectorLight ? `, ${selectorLight}` : ''}{
    ${formattedVariables({format: 'css', dictionary, outputReferences})}
  }`)
  // add auto dark theme css
  if (selectorDark) {
    output.push(`@media (prefers-color-scheme: dark) {
      ${selectorDark} {
        ${formattedVariables({format: 'css', dictionary, outputReferences})}
      }
    }`)
  }
  // return prettified
  return format(output.join('\n'), {parser: 'css', printWidth: 500})
}

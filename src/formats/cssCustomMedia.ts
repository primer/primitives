import StyleDictionary from 'style-dictionary'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import {format} from 'prettier'
const {fileHeader} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to css with @custom-media
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const cssCustomMedia: StyleDictionary.Formatter = ({
  dictionary,
  options: _options,
  file,
}: FormatterArguments) => {
  // add file header
  const output = [fileHeader({file})]
  // add single theme css
  dictionary.allTokens.map(({name, value}) => {
    output.push(`@custom-media --${name} ${value};`)
  })
  // return prettified
  return format(output.join('\n'), {parser: 'css', printWidth: 500})
}

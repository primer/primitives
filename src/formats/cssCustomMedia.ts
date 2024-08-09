import {format} from 'prettier'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {fileHeader} from 'style-dictionary/utils'

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to css with @custom-media
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const cssCustomMedia: FormatFn = async ({dictionary, options: _options, file}: FormatFnArguments) => {
  // add file header
  const output = [await fileHeader({file})]
  // add single theme css
  dictionary.allTokens.map(({name, $value}) => {
    output.push(`@custom-media --${name} ${$value};`)
  })
  // return prettified
  return format(output.join('\n'), {parser: 'css', printWidth: 500})
}

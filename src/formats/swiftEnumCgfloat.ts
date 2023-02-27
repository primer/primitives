import StyleDictionary from 'style-dictionary'
import type {FormatterArguments} from 'style-dictionary/types/Format'

const {fileHeader} = StyleDictionary.formatHelpers

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to javascript esm (javascript export statement)
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const swiftEnumCgfloat: StyleDictionary.Formatter = ({dictionary, file, platform}: FormatterArguments) => {
  // add file header and convert output
  const output = `${fileHeader({file})}${`
  import UIKit

  public enum Size: CGFloat {
    ${dictionary.allTokens.map(token => `case ${token.name} = ${token.value}`).join('\n    ')}

    public var floatValue: CGFloat { rawValue }
  }`}\n`
  // return prettified
  return output
}

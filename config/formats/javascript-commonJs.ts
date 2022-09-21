
import StyleDictionary from 'style-dictionary';
import { format } from "prettier";
import { toValue } from './utils';

const { fileHeader } = StyleDictionary.formatHelpers;

export const javascriptCommonJs: StyleDictionary.Formatter = ({ dictionary, file, options, platform }) => {
  const { prefix } = platform
  let tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens
  //
  const output = fileHeader({ file }) +
    `module.exports = ${JSON.stringify(toValue(tokens), null, 2)}\n`
  // return prettified
  return format(output, { parser: "typescript", printWidth: 500 })
}
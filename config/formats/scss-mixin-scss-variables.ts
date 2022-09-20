import StyleDictionary from 'style-dictionary';
import { format } from "prettier";

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

export const scssMixinScssVariables: StyleDictionary.Formatter = ({ dictionary, file, options }) => {
  const { outputReferences } = options;

  const output = fileHeader({ file }) +
    `@mixin primer-colors-${file.destination.split('.')[0]} {\n  & {\n` +
    formattedVariables({ format: 'sass', dictionary, outputReferences }) +
    '\n  }\n}\n';
  // return prettified
  return format(output, { parser: 'scss', printWidth: 500 })
}
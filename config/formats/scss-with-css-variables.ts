import StyleDictionary from 'style-dictionary';

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

export const scssWithCssVariables: StyleDictionary.Formatter = ({ dictionary, file, options }) => {
  const { outputReferences } = options;

  return fileHeader({ file }) +
    `@mixin primer-colors-${file.destination.replace('.scss', '')} {\n  & {\n` +
    formattedVariables({ format: 'css', dictionary, outputReferences }) +
    '\n  }\n}\n';
}
import StyleDictionary from 'style-dictionary';

const { fileHeader } = StyleDictionary.formatHelpers;

const flattenToValue = (tokens: any) => tokens.map((token: any) => {
  console.log(tokens)
  // `  "${token.name}": ${JSON.stringify(token.value)}`
})

export const javascriptExport: StyleDictionary.Formatter = ({ dictionary, file, options }) => {

  console.dir(dictionary.tokens, { depth: null })
  return ""
  // return fileHeader({ file }) +
  //   `export default ${flattenToValue(dictionary)}`
}
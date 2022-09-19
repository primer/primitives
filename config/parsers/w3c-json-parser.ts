export const w3cJsonParser = {
  pattern: /\.json$/,
  parse: ({ filePath, contents }: { filePath: string, contents: string }) => {
    // replace $value with value so that style dictionary recognizes it
    contents = contents.replace(/"\$value":/g, '"value":')
    return JSON.parse(contents)
  }
}
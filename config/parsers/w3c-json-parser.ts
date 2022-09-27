export const w3cJsonParser = {
  pattern: /\.json$/,
  parse: ({ filePath, contents }: { filePath: string, contents: string }) => {
    // replace $value with value so that style dictionary recognizes it
    contents = contents.replace(/"\$value":/g, '"value":')
      // convert $description to comment
      .replace(/"\$description":/g, '"comment":')
    //
    return JSON.parse(contents)
  }
}
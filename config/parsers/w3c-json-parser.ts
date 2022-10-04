import { parse as json5Parse } from 'json5'
export const w3cJsonParser = {
  pattern: /\.json5?$/,
  parse: ({ filePath, contents }: { filePath: string, contents: string }) => {
    // replace $value with value so that style dictionary recognizes it
    contents = contents.replace(/"?\$value"?:/g, '"value":')
      // convert $description to comment
      .replace(/"?\$description"?:/g, '"comment":')
    //
    return json5Parse(contents)
  }
}
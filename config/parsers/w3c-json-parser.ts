import {parse as json5Parse} from 'json5'

/**
 * @description Parses a valid [json5](https://json5.org) file and replaces `$value` with `value` and `$description` with `comment` to make a w3c standard file compatible with style dictionary
 * @pattern supported file extensions `.json` or `.json5`
 */
export const w3cJsonParser = {
  pattern: /\.json5?$/,
  parse: ({filePath: _filePath, contents}: {filePath: string; contents: string}) => {
    // replace $value with value so that style dictionary recognizes it
    contents = contents
      .replace(/"?\$value"?:/g, '"value":')
      // convert $description to comment
      .replace(/"?\$description"?:/g, '"comment":')
    //
    return json5Parse(contents)
  }
}

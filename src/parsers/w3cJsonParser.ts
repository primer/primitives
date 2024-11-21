import JSON5 from 'json5'
import type {Parser, ParserOptions} from 'style-dictionary/types'

/**
 * @description Parses a valid [json5](https://json5.org) file and replaces `$value` with `value` and `$description` with `comment` to make a w3c standard file compatible with style dictionary
 * @pattern supported file extensions `.json` or `.json5`
 */
export const w3cJsonParser: Parser = {
  name: 'w3cJsonParser',
  pattern: /\.json5?$/,
  parser: ({filePath, contents}: ParserOptions) => {
    // replace $value with value so that style dictionary recognizes it
    try {
      contents = contents
        .replace(/["|']?\$value["|']?:/g, '"value":')
        // convert $description to comment
        .replace(/["|']?\$?description["|']?:/g, '"comment":')
        .replace(/["|']?\$?type["|']?:/g, '"$type":')
        .replace(/["|']?\$?extensions["|']?:/g, '"$extensions":')
      //
      return JSON5.parse(contents)
    } catch (error) {
      throw new Error(`Invalid json5 file "${filePath}". Error: ${error}`)
    }
  },
}

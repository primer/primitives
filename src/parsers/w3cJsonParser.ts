import {parse as json5Parse} from 'json5'
import type StyleDictionary from 'style-dictionary'

/**
 * @description Parses a valid [json5](https://json5.org) file and replaces `$value` with `value` and `$description` with `comment` to make a w3c standard file compatible with style dictionary
 * @pattern supported file extensions `.json` or `.json5`
 */
export const w3cJsonParser: StyleDictionary.Parser = {
  pattern: /\.json5?$/,
  parse: ({filePath, contents}: {filePath: string; contents: string}) => {
    // replace $value with value so that style dictionary recognizes it
    try {
      contents = contents
        .replace(/["|']?\$value["|']?:/g, '"value":')
        // convert $description to comment
        .replace(/["|']?\$?description["|']?:/g, '"comment":')
        .replace(/["|']?\$?type["|']?:/g, '"$type":')
        .replace(/["|']?\$?extensions["|']?:/g, '"$extensions":')
      //
      return json5Parse(contents)
    } catch (e) {
      throw new Error(`Invalid json5 file "${filePath}".`)
    }
  },
}

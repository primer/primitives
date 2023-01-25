import type StyleDictionary from 'style-dictionary'
import {upperCaseFirstCharacter} from '~/config/utilities'

/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a camelCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` camelCase
 */
export const namePathToCamelCase: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken, options?: StyleDictionary.Platform): string => {
    // match unsupported characters
    const regex = /[^a-zA-Z0-9]+/g
    // replace any non-letter and non-number character and split into word array
    const tokenPathArray = token.path.join(' ').replace(regex, ' ').split(' ')
    return (
      [options?.prefix, ...tokenPathArray]
        // remove undefined if exists
        .filter((part: unknown): part is string => typeof part === 'string')
        // ucFirst all but first part
        .map((part: string, index: number) => {
          if (index > 0) {
            return upperCaseFirstCharacter(part)
          }
          return part
        })
        .join('')
    )
  },
}

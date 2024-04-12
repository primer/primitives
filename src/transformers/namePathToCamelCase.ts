import type StyleDictionary from 'style-dictionary'
import {toCamelCase} from '../utilities'

/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a camelCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` camelCase
 */
export const namePathToCamelCase: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken, options?: StyleDictionary.Platform): string =>
    toCamelCase([options?.prefix || '', ...token.path]),
}

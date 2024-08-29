import type StyleDictionary from 'style-dictionary'
import {toPascalCase} from '../utilities/toPascalCase'
/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a PascalCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` PascalCase
 */
export const namePathToPascalCase: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken, options?: StyleDictionary.Platform): string =>
    toPascalCase([options?.prefix || '', ...token.path]),
}

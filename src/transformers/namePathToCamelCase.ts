import {toCamelCase} from '../utilities/index.js'
import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'

/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a camelCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` camelCase
 */
export const namePathToCamelCase: Transform = {
  name: 'name/pathToCamelCase',
  type: `name`,
  transform: (token: TransformedToken, options?: PlatformConfig): string =>
    toCamelCase([options?.prefix || '', ...token.path]),
}

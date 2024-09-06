import type {PlatformConfig, Transform, TransformedToken} from 'style-dictionary/types'
import {toPascalCase} from '../utilities/toPascalCase'
/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a PascalCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` PascalCase
 */
export const namePathToPascalCase: Transform = {
  name: 'name/pathToPascalCase',
  type: `name`,
  transform: (token: TransformedToken, options?: PlatformConfig): string =>
    toPascalCase([options?.prefix || '', ...token.path]),
}

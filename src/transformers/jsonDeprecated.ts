import type {Transform, TransformedToken} from 'style-dictionary/types'
import {isDeprecated} from '../filters/index.js'
/**
 * @description replaces tokens value with content of tokens `deprecated` property
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens with a `deprecated` property
 * @transformer returns `string` specified in `token.deprecated` or `null`
 */
export const jsonDeprecated: Transform = {
  name: 'json/deprecated',
  type: 'value',
  transitive: true,
  filter: isDeprecated,
  transform: (token: TransformedToken) => {
    const deprecated = (token.original as Record<string, unknown>).$deprecated ?? token.$deprecated
    return typeof deprecated === 'string' ? deprecated.replace(/[{}]/g, '') : null
  },
}

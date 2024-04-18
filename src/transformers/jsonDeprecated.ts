import {isDeprecated} from '../filters'
import type StyleDictionary from 'style-dictionary'
/**
 * @description replaces tokens value with content of tokens `deprecated` property
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens with a `deprecated` property
 * @transformer returns `string` specified in `token.deprecated` or `null`
 */
export const jsonDeprecated: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isDeprecated,
  transformer: (token: StyleDictionary.TransformedToken) =>
    typeof token.deprecated === 'string' ? token.deprecated.replace(/[{}]/g, '') : null,
}

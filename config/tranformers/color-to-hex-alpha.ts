import {toHex} from 'color2k'
import {alpha} from '../utilities/alpha'
import StyleDictionary from 'style-dictionary'
/**
 * @description replaces tokens value with `hex8` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `hex8` string
 */
export const colorToHexAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'color' && token.alpha !== undefined,
  transformer: (token: StyleDictionary.TransformedToken) => {
    if (!token.value) throw new Error(`Missing value for token: ${token.path.join('.')} from file "${token.filePath}"`)
    return toHex(alpha(token.value, token.alpha))
  }
}

import {isColorWithAlpha} from '~/config/filters'
import {alpha} from '~/config/utilities'
import type StyleDictionary from 'style-dictionary'
/**
 * @description replaces tokens value with `rgba` color using the tokens `alpha` property to specify the value used for alpha
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `color` with an `alpha` property
 * @transformer returns `rgba` string
 */
export const colorToRgbAlpha: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: isColorWithAlpha,
  transformer: (token: StyleDictionary.TransformedToken) => alpha(token.value, token.alpha)
}

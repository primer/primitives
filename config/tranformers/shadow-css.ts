import StyleDictionary from 'style-dictionary'
import { TokenShadow } from '../../@types/TokenShadow'

export const shadowCss: StyleDictionary.Transform = {
  type: `value`,
  transitive: true,
  matcher: (token: StyleDictionary.TransformedToken) => token.$type === 'shadow',
  transformer: ({value}: {value: TokenShadow}) => {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    return `${value.x || 0} ${value.y || 0} ${value.blur || 0} ${value.spread || 0} ${value.color}`
  }
}
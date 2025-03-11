import {toHex} from 'color2k'
import {isGradient} from '../filters/isGradient.js'
import {getTokenValue} from './utilities/getTokenValue.js'
import type {Transform, TransformedToken} from 'style-dictionary/types'

/**
 * @description converts gradient tokens value to css gradient
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `gradient`
 * @transformer returns a `css gradient` string
 */
export const gradientToCss: Transform = {
  name: 'gradient/css',
  type: 'value',
  transitive: true,
  filter: isGradient,
  transform: (token: TransformedToken) => {
    const {angle} = token.$extensions?.['org.primer.gradient'] ?? {}
    const stops = getTokenValue(token).map(({color, position}: {color: string; position: number}) => {
      return `${toHex(color)} ${position * 100}%`
    })

    return `linear-gradient(${angle || 180}deg, ${stops.join(', ')})`
  },
}

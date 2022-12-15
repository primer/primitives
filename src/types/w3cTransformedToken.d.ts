import type StyleDictionary from 'style-dictionary'

export type w3cTokenType = 'color' | 'dimension' | 'fontFamily' | 'fontWeight' | 'duration' | 'cubicBezier'
export type w3cCompositeTokenType = 'shadow' | 'border' | 'gradient' | 'transition' | 'strokeStyle' | 'typography'

export interface w3cTransformedToken extends StyleDictionary.TransformedToken {
  $type?: w3cTokenType | w3cCompositeTokenType
}

import type {TransformedToken} from 'style-dictionary/types'

export type w3cTokenType = 'color' | 'dimension' | 'fontFamily' | 'fontWeight' | 'duration' | 'cubicBezier'
export type w3cCompositeTokenType = 'shadow' | 'border' | 'gradient' | 'transition' | 'strokeStyle' | 'typography'

export interface w3cTransformedToken extends TransformedToken {
  $type?: w3cTokenType | w3cCompositeTokenType
}

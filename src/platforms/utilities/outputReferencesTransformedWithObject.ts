import type {Dictionary, TransformedToken} from 'style-dictionary/types'
import {resolveReferences} from 'style-dictionary/utils'

export function outputReferencesTransformedWithObject(
  token: TransformedToken,
  {dictionary, usesDtcg}: {dictionary: Dictionary; usesDtcg?: boolean},
): boolean {
  const originalValue = usesDtcg ? token.original.$value : token.original.value
  const value = usesDtcg ? token.$value : token.value

  // double check if this is a string, technically speaking the token could also be an object
  // and pass the usesReferences check
  if (typeof originalValue === 'string') {
    // Check if the token's value is the same as if we were resolve references on the original value
    // This checks whether the token's value has been transformed e.g. transitive transforms.
    // If it has been, that means we should not be outputting refs because this would undo the work of those transforms.
    return (
      value ===
      resolveReferences(originalValue, dictionary.unfilteredTokens ?? dictionary.tokens, {
        usesDtcg,
        warnImmediately: false,
      })
    )
  }
  if (typeof originalValue === 'object') {
    const originalValues = Object.values(originalValue).filter(val => typeof val === 'string')

    return originalValues.some(origVal => {
      const resolvedValue = resolveReferences(origVal, dictionary.unfilteredTokens ?? dictionary.tokens, {
        usesDtcg,
        warnImmediately: false,
      })

      return typeof resolvedValue === 'string' ? value.split(' ').includes(resolvedValue) : false
    })
  }
  return false
}

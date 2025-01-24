// const FILTER_WARNINGS = GroupMessages.GROUP.FilteredOutputReferences

import type {Dictionary, TransformedToken} from 'style-dictionary/types'
import {getReferences} from 'style-dictionary/utils'

/**
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedToken} TransformedToken
 * @typedef {import('../../../types/DesignToken.d.ts').Dictionary} Dictionary
 *
 * @param {TransformedToken} token
 * @param {{ dictionary: Dictionary, usesDtcg?: boolean }} dictionary
 * @returns
 */
export function outputReferencesFilterObject(
  token: TransformedToken,
  {dictionary, usesDtcg}: {dictionary: Dictionary; usesDtcg?: boolean},
): boolean {
  const originalValue = usesDtcg ? token.original.$value : token.original.value
  // get refs, pass unfilteredTokens to ensure we find the refs even if they are filtered out
  const refs = getReferences(originalValue, dictionary.tokens, {
    unfilteredTokens: dictionary.unfilteredTokens,
    usesDtcg,
    warnImmediately: false,
  })

  return refs.some(ref => {
    // check whether every ref can be found in the filtered set of tokens
    const foundToken = dictionary.allTokens.find(thisToken => thisToken.name === ref.name)
    if (!foundToken) {
      // remove the warning about this ref being filtered out, since we now prevent it from outputting it as a ref
      // GroupMessages.remove(FILTER_WARNINGS, ref.path.join('.'))
    }

    return !!foundToken
  })
}

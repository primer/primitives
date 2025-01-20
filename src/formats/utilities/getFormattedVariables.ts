/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import type {Dictionary, OutputReferences} from 'style-dictionary/types'
import {sortByReference} from 'style-dictionary/utils'
import createPropertyFormatterWithRef from './createPropertyFormatterWithRef.js'

const defaultFormatting = {
  lineSeparator: '\n',
}

export default function getFormattedVariables({
  format,
  dictionary,
  outputReferences = false,
  outputReferenceFallbacks,
  formatting = {},
  themeable = false,
  usesDtcg = false,
}: {
  format: string
  dictionary: Dictionary
  outputReferences?: OutputReferences
  outputReferenceFallbacks?: boolean
  formatting?: {
    lineSeparator?: string
  }
  themeable?: boolean
  usesDtcg?: boolean
}) {
  // typecast, we know that by know the tokens have been transformed
  let allTokens = dictionary.allTokens
  const tokens = dictionary.tokens

  const {lineSeparator} = Object.assign({}, defaultFormatting, formatting)

  // Some languages are imperative, meaning a variable has to be defined
  // before it is used. If `outputReferences` is true, check if the token
  // has a reference, and if it does send it to the end of the array.
  // We also need to account for nested references, a -> b -> c. They
  // need to be defined in reverse order: c, b, a so that the reference always
  // comes after the definition
  if (outputReferences) {
    // note: using the spread operator here so we get a new array rather than
    // mutating the original
    allTokens = [...allTokens].sort(sortByReference(tokens, {unfilteredTokens: dictionary.unfilteredTokens, usesDtcg}))
  }

  return allTokens
    .map(
      createPropertyFormatterWithRef({
        outputReferences,
        outputReferenceFallbacks,
        dictionary,
        format,
        formatting,
        themeable,
        usesDtcg,
      }),
    )
    .filter(function (strVal) {
      return !!strVal
    })
    .join(lineSeparator)
}

import type {TransformedToken} from 'style-dictionary'
import {format} from 'prettier'
import type {FormatFn, FormatFnArguments, FormattingOptions} from 'style-dictionary/types'
import {fileHeader, formattedVariables} from 'style-dictionary/utils'

const wrapWithSelector = (css: string, selector: string | false): string => {
  // return without selector
  if (selector === false || selector.trim().length === 0) return css
  // return with selector
  return `${selector} { ${css} }`
}

export const cssAdvanced: FormatFn = async ({
  dictionary: originalDictionary,
  options = {
    queries: [],
  },
  file,
  platform,
}: FormatFnArguments) => {
  // get options
  const {outputReferences, descriptions, usesDtcg} = options
  // selector
  const selector = file.options?.selector !== undefined ? file.options.selector : ':root'
  // query extension property
  const queryExtProp = file.options?.queryExtensionProperty || 'mediaQuery'
  // get queries from file options
  const queries = file.options?.queries || [
    {
      query: undefined,
      matcher: () => true,
    },
  ]
  // set formatting
  const formatting: FormattingOptions = {
    commentStyle: descriptions ? 'long' : 'none',
  }
  // clone dictionary
  const dictionary = {...originalDictionary}
  // add prefix to tokens
  if (platform.prefix) {
    dictionary.allTokens = dictionary.allTokens.map(
      token =>
        ({
          ...token,
          name: `${platform.prefix}-${token.name}`,
          path: [platform.prefix, ...token.path],
        }) as TransformedToken,
    )
  }
  // get queries from tokens
  for (const designToken of dictionary.allTokens) {
    const query = designToken.$extensions?.[queryExtProp]
    // early abort if query does not exist on token
    if (!query) continue
    // if query exists already from other token
    const currentQueryIndex = queries.findIndex((q: {query: string; matcher: () => boolean}) => q.query === query)

    // if query exists
    if (currentQueryIndex > -1) {
      queries[currentQueryIndex] = {
        ...queries[currentQueryIndex],
        matcher: (token: TransformedToken) =>
          queries[currentQueryIndex].matcher(token) ||
          token.$extensions[queryExtProp] === queries[currentQueryIndex].query,
      }
    }
    // if query does not exist
    else {
      queries.push({
        query,
        matcher: (token: TransformedToken) => token.$extensions?.[queryExtProp] === query,
      })
    }
  }
  // add file header
  const output = [await fileHeader({file})]
  // add single theme css
  for (const query of queries) {
    const {query: queryString, matcher} = query
    // filter tokens to only include the ones that pass the matcher
    const filteredDictionary = {
      ...dictionary,
      allTokens: dictionary.allTokens.filter(matcher || (() => true)),
    }
    // early abort if no matches
    if (!filteredDictionary.allTokens.length) continue
    // add tokens into root
    const css = formattedVariables({
      format: 'css',
      dictionary: filteredDictionary,
      outputReferences,
      formatting,
      usesDtcg,
    })
    // wrap css
    const cssWithSelector = wrapWithSelector(css, query.selector !== undefined ? query.selector : selector)
    // add css with or without query
    output.push(queryString ? `${queryString} { ${cssWithSelector} }` : cssWithSelector)
  }
  // return prettified
  return format(output.join('\n'), {parser: 'css', printWidth: 500})
}

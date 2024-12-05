import type {Dictionary, TransformedToken, FormatFn, FormatFnArguments, PlatformConfig} from 'style-dictionary/types'
import {format} from 'prettier'
import {transformNamePathToFigma} from '../transformers/namePathToFigma.js'
import type {ShadowTokenValue} from '../types/shadowTokenValue.js'
import {hexToRgbaFloat} from '../transformers/utilities/hexToRgbaFloat.js'
import type {RgbaFloat} from '../transformers/utilities/isRgbaFloat.js'
import {isRgbaFloat} from '../transformers/utilities/isRgbaFloat.js'
import {getReferences, sortByReference} from 'style-dictionary/utils'

const isReference = (string: string): boolean => /^\{([^\\]*)\}$/g.test(string)

const getReference = (dictionary: Dictionary, refString: string, platform: PlatformConfig) => {
  if (isReference(refString)) {
    // retrieve reference token
    const refToken = getReferences(refString, dictionary.tokens, {unfilteredTokens: dictionary.unfilteredTokens})[0]
    // return full reference
    return [refToken.attributes?.collection, transformNamePathToFigma(refToken, platform)].filter(Boolean).join('/')
  }
}

const getFigmaType = (type: string): string => {
  const validTypes = {
    color: 'COLOR',
    dimension: 'FLOAT',
    fontWeight: 'FLOAT',
    number: 'FLOAT',
    fontFamily: 'STRING',
  }
  if (type in validTypes) return validTypes[type as keyof typeof validTypes]
  throw new Error(`Invalid type: ${type}`)
}

const shadowToVariables = (
  name: string,
  values: Omit<ShadowTokenValue, 'color'> & {color: string | RgbaFloat},
  token: TransformedToken,
) => {
  // floatValue
  const floatValue = (property: 'offsetX' | 'offsetY' | 'blur' | 'spread') => ({
    name: `${name}/${property}`,
    value: parseInt(values[property].replace('px', '')),
    type: 'FLOAT',
    scopes: ['EFFECT_FLOAT'],
    mode,
    collection,
    group,
  })

  const {attributes} = token
  const {mode, collection, group} = attributes || {}

  return [
    floatValue('offsetX'),
    floatValue('offsetY'),
    floatValue('blur'),
    floatValue('spread'),
    {
      name: `${name}/color`,
      value: isRgbaFloat(values.color)
        ? {...values.color, ...(values.alpha ? {a: values.alpha} : {})}
        : hexToRgbaFloat(values.color, values.alpha),
      type: 'COLOR',
      scopes: ['EFFECT_COLOR'],
      mode,
      collection,
      group,
    },
  ]
}

/**
 * @description Converts `StyleDictionary.dictionary.tokens` to javascript esm (javascript export statement)
 * @param arguments [FormatterArguments](https://github.com/amzn/style-dictionary/blob/main/types/Format.d.ts)
 * @returns formatted `string`
 */
export const jsonFigma: FormatFn = async ({dictionary, file: _file, platform}: FormatFnArguments) => {
  // array to store tokens in
  const tokens: Array<Record<string, unknown>> = []
  const sortedTokens = [...dictionary.allTokens].sort(
    sortByReference(dictionary.tokens, {unfilteredTokens: dictionary.unfilteredTokens}),
  )
  // loop through tokens sorted by reference
  for (const token of sortedTokens) {
    // deconstruct token
    const {attributes, $value: value, $type, $description: description, original, alpha, mix} = token
    const {mode, collection, scopes, group, codeSyntax} = attributes || {}
    // early escape if no type is present
    if (!$type) return
    // shadows need to be specifically dealt with
    if ($type === 'shadow') {
      const shadowValues = !Array.isArray(value) ? [value] : value
      // if only one set of shadow values is present
      if (shadowValues.length === 1) {
        tokens.push(
          ...shadowToVariables(token.name, shadowValues[0], {
            ...token,
            ...(platform.mode ? {mode: platform.mode} : {}),
          }),
        )
      } else {
        // if multiple shadow sets values are present we need loop through them and add the index to the name
        for (const [index, stepValue] of shadowValues.entries()) {
          tokens.push(
            ...shadowToVariables(`${token.name}/${index + 1}`, stepValue, {
              ...token,
              ...(platform.mode ? {mode: platform.mode} : {}),
            }),
          )
        }
      }
      // other tokens just get added to tokens array
    } else {
      tokens.push({
        name: token.name,
        value,
        type: getFigmaType($type),
        alpha,
        isMix: mix ? true : undefined,
        description,
        refId: [collection, token.name].filter(Boolean).join('/'),
        reference: getReference(dictionary, original.$value, platform),
        collection,
        mode,
        group,
        scopes,
        codeSyntax,
      })
    }
  }
  // add file header and convert output
  const output = JSON.stringify(tokens, null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

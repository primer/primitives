import StyleDictionary from 'style-dictionary'
import {format} from 'prettier'
import type {FormatterArguments} from 'style-dictionary/types/Format'
import {transformNamePathToFigma} from '../transformers/namePathToFigma'
import type {ShadowTokenValue} from '../types/ShadowTokenValue'
const {sortByReference} = StyleDictionary.formatHelpers

const isReference = (string: string): boolean => /^\{([^\\]*)\}$/g.test(string)

const getReference = (
  dictionary: StyleDictionary.Dictionary,
  refString: string,
  platform: StyleDictionary.Platform,
) => {
  if (isReference(refString)) {
    // retrieve reference token
    const refToken = dictionary.getReferences(refString)[0]
    // return full reference
    return [refToken.attributes?.collection, transformNamePathToFigma(refToken, platform)].filter(Boolean).join('/')
  }
}

const getFigmaType = (type: string): string => {
  const validTypes = {
    color: 'COLOR',
    dimension: 'FLOAT',
  }
  if (type in validTypes) return validTypes[type as keyof typeof validTypes]
  throw new Error(`Invalid type: ${type}`)
}
// const toRgbaFloat = (color: string | , alpha?: number) => {}

const shadowToVariables = (name: string, values: ShadowTokenValue, token: StyleDictionary.TransformedToken) => {
  // floatValue
  const floatValue = (property: 'offsetX' | 'offsetY' | 'blur' | 'spread') => ({
    name: `${name}/${property}`,
    value: values[property].replace('px', ''),
    type: 'FLOAT',
    scopes: ['EFFECT_FLOATING'],
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
      value: toRgbaFloat(values.color, token.alpha),
      // value: {...values.color, a: token.alpha || values.color.a},
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
export const jsonFigma: StyleDictionary.Formatter = ({dictionary, file: _file, platform}: FormatterArguments) => {
  // sort tokens by reference
  const shadows: Record<string, unknown>[] = []
  const tokens = dictionary.allTokens.sort(sortByReference(dictionary)).map(token => {
    const {attributes, value, $type, comment: description, original, alpha, mix} = token
    const {mode, collection, scopes, group, codeSyntax} = attributes || {}

    if ($type === 'shadow') {
      if (token.value.length === 1) {
        shadows.push(...shadowToVariables(token.name, token.value[0], token))
      } else {
        for (const [index, stepValue] of token.value.entries()) {
          shadows.push(...shadowToVariables(`${token.name}/${index + 1}`, stepValue, token))
        }
      }
      return {}
    }
    return {
      name: token.name,
      value,
      type: getFigmaType($type),
      alpha,
      isMix: mix ? true : undefined,
      description,
      refId: [collection, token.name].filter(Boolean).join('/'),
      reference: getReference(dictionary, original.value, platform),
      collection,
      mode,
      group,
      scopes,
      codeSyntax,
    }
  })
  // add file header and convert output
  const output = JSON.stringify([...tokens, ...shadows], null, 2)
  // return prettified
  return format(output, {parser: 'json', printWidth: 500})
}

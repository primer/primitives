import {TransformedToken} from 'style-dictionary/types'

const mockTokenDefaults = {
  name: 'tokenName',
  path: ['path'],
  original: {
    $value: 'originalValue',
    attributes: {},
  },
  filePath: 'file.json',
  isSource: true,
  $value: 'transformedValue',
  attributes: {},
} as const

type getMockTokenOptions = {
  remove: Array<keyof typeof mockTokenDefaults>
}

const removeProps = (
  token: Record<string, unknown>,
  props: getMockTokenOptions['remove'] = [],
): Partial<TransformedToken> => {
  for (const prop of props) {
    delete token[prop]
  }
  return token
}
/**
 *
 * @param valueOverrides partial StyleDictionary.TransformedToken
 * @returns StyleDictionary.TransformedToken - a merge of {@link mockTokenDefaults} and any valid properties provided in the valueOverrides param
 */
export const getMockToken = (
  valueOverrides: {
    [key: keyof TransformedToken]: unknown
  },
  options?: getMockTokenOptions,
) => {
  return {
    ...removeProps(mockTokenDefaults, options?.remove),
    ...valueOverrides,
  }
}

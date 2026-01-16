import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token has LLM extensions (`org.primer.llm` in `$extensions`)
 * @param arguments [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @returns boolean
 */
export const hasLlmExtensions = (token: TransformedToken): boolean => {
  return (
    token.$extensions !== undefined &&
    token.$extensions !== null &&
    typeof token.$extensions === 'object' &&
    'org.primer.llm' in token.$extensions
  )
}

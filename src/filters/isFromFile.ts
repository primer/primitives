import type {TransformedToken} from 'style-dictionary/types'

/**
 * @description Checks if token comes from a specific file
 * @param token [TransformedToken](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts)
 * @param files - array of file paths
 * @returns boolean
 */
export const isFromFile = (token: TransformedToken, files: string[]): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return files?.includes(token.filePath) === true
}

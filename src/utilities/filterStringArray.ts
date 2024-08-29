export const filterStringArray = (string: string[]): string[] => {
  // match unsupported characters
  const regex = /[^a-zA-Z0-9]+/g
  // replace any non-letter and non-number character and split into word array
  const stringArray = string
    .filter(Boolean)
    .join(' ')
    .replace(regex, ' ')
    .split(' ')
    // remove undefined if exists
    .filter((part: unknown): part is string => Boolean(part) && typeof part === 'string')

  return stringArray
}

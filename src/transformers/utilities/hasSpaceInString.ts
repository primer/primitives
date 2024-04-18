export const hasSpaceInString = (string: string): boolean => {
  if (typeof string !== 'string') {
    throw new TypeError(`Invalid input. Input must be a string, ${typeof string} provided`)
  }
  return /\s/g.test(string)
}

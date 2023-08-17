/**
 * Get the value of a flag from the command line
 * @param flag name of the flag to get
 * @param prefix default `--` but can be changed to `-` the part to the left of the flag name
 * @returns null if flag is not found, otherwise the value of the flag or the flag name if the flag has no value
 * @example `getFlag('--silent')` returns `null` if `--silent` is not found, `--silent` if `--silent` is found with no value, and `true` if `--silent=true` is found
 */
export const getFlag = (flag: string, prefix = '--') => {
  flag = `${prefix}${flag.replace(prefix, '')}`
  const index = process.argv.findIndex(arg => arg === flag || arg.startsWith(`${flag}=`))
  return index === -1 ? null : process.argv[index].replace(`${flag}=`, '')
}

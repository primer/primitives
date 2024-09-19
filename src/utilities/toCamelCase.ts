import {filterStringArray} from './filterStringArray.js'
import {upperCaseFirstCharacter} from './upperCaseFirstCharacter.js'

export const toCamelCase = (string: string | string[]) => {
  if (!Array.isArray(string)) {
    string = [string]
  }

  return (
    filterStringArray(string)
      // ucFirst all but first part
      .map((part: string, index: number) => {
        if (index > 0) {
          return upperCaseFirstCharacter(part)
        }
        return part
      })
      .join('')
  )
}

import {filterStringArray} from './filterStringArray.js'
import {upperCaseFirstCharacter} from './upperCaseFirstCharacter.js'

export const toPascalCase = (string: string | string[]) => {
  if (!Array.isArray(string)) {
    string = [string]
  }

  return (
    filterStringArray(string)
      // ucFirst all but first part
      .map((part: string) => {
        return upperCaseFirstCharacter(part)
      })
      .join('')
  )
}

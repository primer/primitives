import {filterStringArray} from './filterStringArray'
import {upperCaseFirstCharacter} from './upperCaseFirstCharacter'

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

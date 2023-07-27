import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'
import {schemaErrorMessage} from '../utilities/schemaErrorMessage'

type Collections =
  | 'base/color/light'
  | 'base/color/dark'
  | 'base/color/dark-dimmed'
  | 'mode'
  | 'pattern/mode'
  | 'base/size'
  | 'functional/size'
  | 'pattern/size'

export const collection = (collections: Collections[]) => {
  return z.string().refine(
    value => collections.includes(value as Collections),
    value => ({
      message: schemaErrorMessage(
        `Invalid collection: "${value}"`,
        `Valid collections are ${joinFriendly(collections)}`,
      ),
    }),
  )
}

type Modes = 'light' | 'dark'

export const mode = (modes: Modes[]) => {
  return z.string().refine(
    value => modes.includes(value as Modes),
    value => ({
      message: schemaErrorMessage(`Invalid mode: "${value}"`, `Valid modes are ${joinFriendly(modes)}`),
    }),
  )
}

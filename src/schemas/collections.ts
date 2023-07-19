import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'

type Collections =
  | 'base/color/light'
  | 'base/color/dark'
  | 'base/color/dark-dimmed'
  | 'mode'
  | 'pattern/mode'
  | 'base/size'
  | 'functional/size'

export const collection = (collections: Collections[]) => {
  return z.string().refine(
    value => collections.includes(value as Collections),
    value => ({
      message: `Invalid collection: "${value}", valid collections are ${joinFriendly(collections)}`,
    }),
  )
}

type Modes = 'light' | 'dark'

export const mode = (modes: Modes[]) => {
  return z.string().refine(
    value => modes.includes(value as Modes),
    value => ({
      message: `Invalid mode: "${value}", valid modes are ${joinFriendly(modes)}`,
    }),
  )
}

import {z} from 'zod'
import {joinFriendly} from '../utilities/joinFriendly'

export const colorCollections = z.enum(['base/color/light', 'base/color/dark', 'mode', 'pattern/mode'])

export const dimensionCollections = z.enum(['base/size', 'functional/size'])

type Collections = 'base/color/light' | 'base/color/dark' | 'mode' | 'pattern/mode' | 'base/size' | 'functional/size'

export const collection = (collections: Collections[]) => {
  return z.string().refine(
    value => collections.includes(value as Collections),
    value => ({
      message: `Invalid mode: "${value}", valid modes are ${joinFriendly(collections)}`,
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

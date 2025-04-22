import {z} from 'zod'
import {joinFriendly, schemaErrorMessage} from '../utilities/index.js'

type Collections =
  | 'base/color/light'
  | 'base/color/light-high-contrast'
  | 'base/color/dark'
  | 'base/color/dark-dimmed'
  | 'base/color/dark-high-contrast'
  | 'base/typography'
  | 'mode'
  | 'pattern/mode'
  | 'base/size'
  | 'functional/size'
  | 'pattern/size'
  | 'typography'

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

type Modes =
  | 'light'
  | 'dark'
  | 'dark dimmed'
  | 'dark dimmed high contrast'
  | 'light high contrast'
  | 'dark high contrast'
  | 'light protanopia deuteranopia'
  | 'dark protanopia deuteranopia'
  | 'light tritanopia'
  | 'dark tritanopia'
  | 'light high contrast protanopia deuteranopia'
  | 'dark high contrast protanopia deuteranopia'
  | 'light high contrast tritanopia'
  | 'dark high contrast tritanopia'

export const mode = (modes: Modes[]) => {
  return z.string().refine(
    value => modes.includes(value as Modes),
    value => ({
      message: schemaErrorMessage(`Invalid mode: "${value}"`, `Valid modes are ${joinFriendly(modes)}`),
    }),
  )
}

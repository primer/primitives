import {z} from 'zod'

const colorHex3RegEx = '^#[0-9a-f]{3}$'
const colorHex6RegEx = '^#[0-9a-f]{6}$'
const colorHex8RegEx = '^#[0-9a-f]{8}$'

const colorHexRegex = new RegExp(`(${colorHex3RegEx})|(${colorHex6RegEx})|(${colorHex8RegEx})`, 'i')

export const colorHexValue = z.string().refine(
  color => colorHexRegex.test(color),
  color => ({
    message: `**Invalid color:** "${color}"\nColor must be a hex string or a reference to a color token.`,
  }),
)

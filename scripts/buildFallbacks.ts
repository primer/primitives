// eslint-disable-next-line import/extensions
import colorFallbacks from '../src/tokens/fallback/color-fallbacks.json'
import fs from 'fs'

const storybookFallbacks = Object.entries(colorFallbacks).map(([key, value]) => [key, value])

fs.mkdirSync('tokens-next-private/fallbacks', {recursive: true})
fs.writeFileSync(
  'tokens-next-private/fallbacks/color-fallbacks.json',
  JSON.stringify(Object.fromEntries(storybookFallbacks), null, 2),
  'utf8',
)

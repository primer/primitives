import {getContrast} from 'color2k'
import {themes} from '../scripts/themes.config.js'
import {getFallbackTheme} from '../scripts/utilities/getFallbackTheme.js'
import {docJson} from '../src/platforms/docJson.js'
import {PrimerStyleDictionary} from '../src/primerStyleDictionary.js'

it('keeps the dark dimmed focus outline visible on default, muted, and inset surfaces', async () => {
  const theme = themes.find(config => config.theme === 'dark-dimmed')
  assert.isDefined(theme)
  const dictionary = await PrimerStyleDictionary.extend({
    source: theme.source,
    include: theme.include,
    platforms: {
      colors: docJson('colors.json', undefined, '', {theme: [theme.theme, getFallbackTheme(theme.theme)]}),
    },
  })
  const {tokenMap} = await dictionary.getPlatformTokens('colors')
  const outline = tokenMap.get('{focus.outline-color}')?.$value
  assert.isString(outline)
  expect(tokenMap.get('{focus.outlineColor}')?.$value).toBe(outline)
  for (const surface of ['bgColor.default', 'bgColor.muted', 'bgColor.inset']) {
    const background = tokenMap.get(`{${surface}}`)?.$value
    assert.isString(background)
    expect(getContrast(outline, background), surface).toBeGreaterThanOrEqual(3)
  }
})

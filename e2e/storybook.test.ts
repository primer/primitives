import {type Page, test, expect} from '@playwright/test'
// eslint-disable-next-line import/extensions
import data from '../docs/storybook/storybook-static/stories.json'

const stories = Object.values(data.stories).map(story => {
  return {
    id: story.id,
  }
})
const themes = [
  'light',
  'light_colorblind',
  'light_tritanopia',
  'light_high_contrast',
  'dark',
  'dark_colorblind',
  'dark_tritanopia',
  'dark_high_contrast',
]

test.describe('storybook', () => {
  for (const story of stories) {
    test.describe(story.id, () => {
      for (const theme of themes) {
        test(theme, async ({page}) => {
          await visit(page, {
            id: story.id,
            globals: {
              theme,
            },
          })
          await page.waitForSelector('body.sb-show-main:not(.sb-show-preparing-story)')
          expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
        })
      }
    })
  }
})

interface Options {
  id: string
  args?: Record<string, string | boolean>
  globals?: Record<string, string>
}

const {STORYBOOK_URL = 'http://localhost:6006'} = process.env

export async function visit(page: Page, options: Options) {
  const {id, args, globals} = options
  // In CI, the static server strips `.html` extensions
  const url = process.env.CI ? new URL(`/iframe`, STORYBOOK_URL) : new URL(`/iframe.html`, STORYBOOK_URL)

  url.searchParams.set('id', id)
  url.searchParams.set('viewMode', 'story')

  if (args) {
    const serialized = Object.entries(args)
      .map(([key, value]) => `${key}:${value}`)
      .join(',')
    url.searchParams.set('args', serialized)
  }

  if (globals) {
    let params = ''
    for (const [key, value] of Object.entries(globals)) {
      if (params !== '') {
        params += '&'
      }
      params += `${key}:${value}`
    }
    url.searchParams.set('globals', params)
  }

  await page.goto(url.toString())
  await page.waitForSelector('body.sb-show-main:not(.sb-show-preparing-story)')
}

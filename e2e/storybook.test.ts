import {type Page, test, expect} from '@playwright/test'
// eslint-disable-next-line import/extensions, import/no-unresolved
import data from '../docs/storybook/storybook-static/stories.json'

interface Story {
  id: string
  parameters?: {
    snapshot?: {
      excludeFromSnapshot?: boolean
    }
    docs?: {
      tags?: string[]
    }
  }
}

const stories = Object.values(data.stories).map((story: unknown) => {
  const {id, parameters} = story as Story
  return {
    id,
    excludeFromSnapshot: parameters?.snapshot?.excludeFromSnapshot,
    tags: parameters?.docs?.tags,
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
    if (
      story.excludeFromSnapshot ||
      (story.tags && story.tags.includes('excludeSnapshot')) ||
      (story.tags && story.tags.includes('docs'))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      test.skip(story.id, async () => {})
      continue
    }

    const runAllThemes = !story.id.includes('size') && !story.id.includes('typography')

    test.describe(`${story.id} (${runAllThemes ? 'all themes' : 'light theme only'})`, () => {
      for (const theme of themes) {
        if (runAllThemes || theme === 'light') {
          test(`${theme} theme`, async ({page}) => {
            await visit(page, {
              id: story.id,
              globals: {
                theme,
              },
            })
            expect(await page.screenshot({animations: 'disabled', fullPage: true})).toMatchSnapshot()
          })
        }
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
  await waitForImages(page)
}

/**
 * Helper specifically for working with images in storybook. Unfortunately, the
 * `waitUntil: 'networkidle'` option does not work well with storybook during
 * development as there is always a connection listening for updates.
 */
async function waitForImages(page: Page) {
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'))
    await Promise.all(
      images.map(img => {
        if (img.complete) {
          return
        }
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve)
          img.addEventListener('error', reject)
        })
      }),
    )
  })
}

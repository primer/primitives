import {type Page, test, expect} from '@playwright/test'

const {STORYBOOK_URL = 'http://localhost:6006'} = process.env

interface Story {
  id: string
  tags?: string[]
}

interface StoryIndex {
  entries: Record<string, Story>
}

const storyIndexResponse = await fetch(new URL('/index.json', STORYBOOK_URL))

if (!storyIndexResponse.ok) {
  throw new Error(
    `Unable to load Storybook index from ${STORYBOOK_URL}: ${storyIndexResponse.status} ${storyIndexResponse.statusText}`,
  )
}

const data = (await storyIndexResponse.json()) as StoryIndex

const stories = Object.values(data.entries).map((story: unknown) => {
  const {id, tags} = story as Story
  return {
    id,
    tags,
  }
})
const themes = [
  'light',
  'light_colorblind',
  'light_tritanopia',
  'light_colorblind_high_contrast',
  'light_tritanopia_high_contrast',
  'light_high_contrast',
  'dark',
  'dark_dimmed',
  'dark_colorblind',
  'dark_tritanopia',
  'dark_colorblind_high_contrast',
  'dark_dimmed_high_contrast',
  'dark_tritanopia_high_contrast',
  'dark_high_contrast',
]

// Reorder stories for balanced shard distribution
// This algorithm groups heavy stories (all-theme) with light stories (single-theme)
// so that when Playwright divides tests sequentially, each shard gets a balanced load
function reorderStoriesForBalancedShards(storiesToReorder: Story[], numShards: number) {
  interface TestWithWeight {
    storyId: string
    theme: string
    weight: number // 1 for single theme, 14 for all themes
    storyWeight: number // total weight for this story
  }

  const tests: TestWithWeight[] = []

  for (const story of storiesToReorder) {
    const hasIncludeSnapshot = story.tags && story.tags.includes('includeSnapshot')
    const hasSnapshotLight = story.tags && story.tags.includes('snapshotLight')
    const shouldIncludeSnapshot = hasIncludeSnapshot || hasSnapshotLight

    if (!shouldIncludeSnapshot) {
      continue
    }

    const runAllThemes = hasIncludeSnapshot && !story.id.includes('size') && !story.id.includes('typography')
    const storyWeight = runAllThemes ? themes.length : 1

    for (const theme of themes) {
      if (runAllThemes || theme === 'light') {
        tests.push({
          storyId: story.id,
          theme,
          weight: 1,
          storyWeight,
        })
      }
    }
  }

  // Sort tests: heavy stories first (descending by storyWeight), then by theme
  // This ensures that when Playwright divides tests sequentially across N shards,
  // each shard gets a mix of heavy and light tests, balancing the load
  tests.sort((a, b) => {
    if (b.storyWeight !== a.storyWeight) {
      return b.storyWeight - a.storyWeight // heavy first
    }
    return a.storyId.localeCompare(b.storyId)
  })

  if (process.env.DEBUG_SHARDS) {
    const shardWeights = Array(numShards).fill(0)
    for (let i = 0; i < tests.length; i++) {
      const shardIdx = i % numShards
      shardWeights[shardIdx]++
    }
    console.log('=== SHARD BALANCE (after reordering) ===')
    for (let i = 0; i < numShards; i++) {
      console.log(`Shard ${i + 1}: ${shardWeights[i]} tests`)
    }
  }

  return tests
}

const reorderedTests = reorderStoriesForBalancedShards(stories, 3)

test.describe('storybook', () => {
  for (const {storyId, theme} of reorderedTests) {
    const story = stories.find(s => s.id === storyId)
    if (!story) continue

    const hasIncludeSnapshot = story.tags && story.tags.includes('includeSnapshot')
    const hasSnapshotLight = story.tags && story.tags.includes('snapshotLight')
    const runAllThemes = hasIncludeSnapshot && !story.id.includes('size') && !story.id.includes('typography')

    test(`${storyId}/${theme} theme`, async ({page}) => {
      await visit(page, {
        id: storyId,
        globals: {
          theme,
        },
      })
      expect(await page.screenshot({animations: 'disabled', fullPage: true})).toMatchSnapshot()
    })
  }
})

interface Options {
  id: string
  args?: Record<string, string | boolean>
  globals?: Record<string, string>
}

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

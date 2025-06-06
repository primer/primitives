import {collection, mode} from './collections.js'

describe('Schema: collection', () => {
  const collections = collection([
    'base/color/light',
    'base/color/light-high-contrast',
    'base/color/dark',
    'base/color/dark-dimmed',
    'base/color/dark-high-contrast',
    'mode',
    'pattern/mode',
  ])
  it('passes on valid values', () => {
    expect(collections.safeParse('mode').success).toStrictEqual(true)
    expect(collections.safeParse('base/color/light').success).toStrictEqual(true)
  })

  it('fails on invalid values', () => {
    expect(collections.safeParse('wrongCollection').success).toStrictEqual(false)
    expect(collections.safeParse('').success).toStrictEqual(false)
  })

  it('fails on non-string values', () => {
    expect(collections.safeParse(undefined).success).toStrictEqual(false)
    expect(collections.safeParse(null).success).toStrictEqual(false)
    expect(collections.safeParse(1).success).toStrictEqual(false)
  })
})

describe('Schema: mode', () => {
  const modes = mode([
    'light',
    'dark',
    'dark dimmed',
    'light high contrast',
    'dark high contrast',
    'light protanopia deuteranopia',
    'dark protanopia deuteranopia',
    'light tritanopia',
    'dark tritanopia',
  ])

  it('passes on valid values', () => {
    expect(modes.safeParse('light').success).toStrictEqual(true)
    expect(modes.safeParse('dark').success).toStrictEqual(true)
  })

  it('fails on invalid values', () => {
    expect(modes.safeParse('wrongMode').success).toStrictEqual(false)
    expect(modes.safeParse('').success).toStrictEqual(false)
  })

  it('fails on non-string values', () => {
    expect(modes.safeParse(undefined).success).toStrictEqual(false)
    expect(modes.safeParse(null).success).toStrictEqual(false)
    expect(modes.safeParse(1).success).toStrictEqual(false)
  })
})

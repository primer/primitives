import {figmaAttributes} from './figmaAttributes.js'
import type {TransformedToken, PlatformConfig} from 'style-dictionary/types'

describe('figmaAttributes', () => {
  const baseToken = {
    $extensions: {
      'org.primer.figma': {
        collection: 'base/color/dark',
        scopes: ['bgColor'],
        group: undefined,
        codeSyntax: undefined,
      },
    },
  } as unknown as TransformedToken

  it('returns collection from token extensions', () => {
    const result = figmaAttributes.transform(baseToken, {} as PlatformConfig)
    expect(result).toMatchObject({
      collection: 'base/color/dark',
      group: 'base/color/dark',
    })
  })

  it('applies collectionOverride when collection matches', () => {
    const platform = {
      options: {
        collectionOverride: {'base/color/dark': 'base/color/dark-dimmed'},
      },
    } as unknown as PlatformConfig

    const result = figmaAttributes.transform(baseToken, platform)
    expect(result).toMatchObject({
      collection: 'base/color/dark-dimmed',
      group: 'base/color/dark-dimmed',
    })
  })

  it('does not apply collectionOverride when collection does not match', () => {
    const token = {
      $extensions: {
        'org.primer.figma': {
          collection: 'base/color/dark-dimmed',
          scopes: ['bgColor'],
        },
      },
    } as unknown as TransformedToken

    const platform = {
      options: {
        collectionOverride: {'base/color/dark': 'base/color/dark-dimmed'},
      },
    } as unknown as PlatformConfig

    const result = figmaAttributes.transform(token, platform)
    expect(result).toMatchObject({
      collection: 'base/color/dark-dimmed',
      group: 'base/color/dark-dimmed',
    })
  })

  it('preserves explicit group when set', () => {
    const token = {
      $extensions: {
        'org.primer.figma': {
          collection: 'base/color/dark',
          group: 'custom-group',
          scopes: ['bgColor'],
        },
      },
    } as unknown as TransformedToken

    const platform = {
      options: {
        collectionOverride: {'base/color/dark': 'base/color/dark-dimmed'},
      },
    } as unknown as PlatformConfig

    const result = figmaAttributes.transform(token, platform)
    expect(result).toMatchObject({
      collection: 'base/color/dark-dimmed',
      group: 'custom-group',
    })
  })

  it('uses theme for mode when available', () => {
    const platform = {
      options: {
        theme: 'dark dimmed',
      },
    } as unknown as PlatformConfig

    const result = figmaAttributes.transform(baseToken, platform)
    expect(result).toMatchObject({
      mode: 'dark dimmed',
    })
  })
})

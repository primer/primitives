import type {TokenBuildInput} from '~/src/types/TokenBuildInput'

export const themes: TokenBuildInput[] = [
  {
    filename: 'light',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/light.json5`,
    ],
    include: [`src/tokens/base/color/light/light.json5`],
  },
  {
    filename: 'light-tritanopia',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/light.json5`,
      `src/tokens/functional/color/light/overrides/light.tritanopia.json5`,
    ],
    include: [`src/tokens/base/color/light/light.json5`],
  },
  {
    filename: 'light-colorblind',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/light.json5`,
      `src/tokens/functional/color/light/overrides/light.protanopia-deuteranopia.json5`,
    ],
    include: [`src/tokens/base/color/light/light.json5`],
  },
  {
    filename: 'light-high-contrast',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/color/light/overrides/light.high-contrast.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/light.json5`,
    ],
    include: [`src/tokens/base/color/light/light.json5`, `src/tokens/base/color/light/light.high-contrast.json5`],
  },
  {
    filename: 'dark',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/dark.json5`,
    ],
    include: [`src/tokens/base/color/dark/dark.json5`],
  },
  {
    filename: 'dark-dimmed',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/color/dark/overrides/dark.dimmed.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/dark.json5`,
    ],
    include: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/dark.dimmed.json5`],
  },
  {
    filename: 'dark-tritanopia',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/dark.json5`,
      `src/tokens/functional/color/dark/overrides/dark.tritanopia.json5`,
    ],
    include: [`src/tokens/base/color/dark/dark.json5`],
  },
  {
    filename: 'dark-colorblind',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/dark.json5`,
      `src/tokens/functional/color/dark/overrides/dark.protanopia-deuteranopia.json5`,
    ],
    include: [`src/tokens/base/color/dark/dark.json5`],
  },
  {
    filename: 'dark-high-contrast',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/scales.json5`,
      `src/tokens/functional/color/dark/overrides/dark.high-contrast.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/dark.json5`,
    ],
    include: [`src/tokens/base/color/dark/dark.json5`, `src/tokens/base/color/dark/dark.high-contrast.json5`],
  },
]

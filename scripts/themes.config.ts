import type {TokenBuildInput} from '../src/types/tokenBuildInput.js'

export const themes: TokenBuildInput[] = [
  {
    filename: 'light',
    theme: 'light',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-tritanopia',
    theme: 'light-tritanopia',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/light/overrides/light.tritanopia.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-colorblind',
    theme: 'light-protanopia-deuteranopia',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/light/overrides/light.protanopia-deuteranopia.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-high-contrast',
    theme: 'light-high-contrast',
    source: [
      `src/tokens/functional/color/light/*.json5`,
      `src/tokens/functional/shadow/light.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/light/overrides/light.high-contrast.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/light.high-contrast.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'dark',
    theme: 'dark',
    source: [
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/dark/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-dimmed',
    theme: 'dark-dimmed',
    source: [
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/color/dark/overrides/dark.dimmed.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.dimmed.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-tritanopia',
    theme: 'dark-tritanopia',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/dark/overrides/dark.tritanopia.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-colorblind',
    theme: 'dark-protanopia-deuteranopia',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/dark/overrides/dark.protanopia-deuteranopia.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-high-contrast',
    theme: 'dark-high-contrast',
    source: [
      `src/tokens/functional/color/dark/*.json5`,
      `src/tokens/functional/shadow/dark.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/dark/overrides/dark.high-contrast.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.high-contrast.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
]

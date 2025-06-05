import type {TokenBuildInput} from '../src/types/tokenBuildInput.js'

export const themes: TokenBuildInput[] = [
  {
    filename: 'light',
    theme: 'light',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
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
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-tritanopia-high-contrast',
    theme: 'light-tritanopia-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/functional/color/light/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/light.high-contrast.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-colorblind',
    theme: 'light-protanopia-deuteranopia',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-colorblind-high-contrast',
    theme: 'light-protanopia-deuteranopia-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/functional/color/light/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/light/light.json5`,
      `src/tokens/base/color/light/light.high-contrast.json5`,
      `src/tokens/base/color/light/display-light.json5`,
    ],
  },
  {
    filename: 'light-high-contrast',
    theme: 'light-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
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
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
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
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.dimmed.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-dimmed-high-contrast',
    theme: 'dark-dimmed-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/functional/color/dark/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.high-contrast.json5`,
      `src/tokens/base/color/dark/dark.dimmed.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-tritanopia',
    theme: 'dark-tritanopia',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-tritanopia-high-contrast',
    theme: 'dark-tritanopia-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/functional/color/dark/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.high-contrast.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-colorblind',
    theme: 'dark-protanopia-deuteranopia',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-colorblind-high-contrast',
    theme: 'dark-protanopia-deuteranopia-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/component/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/functional/color/dark/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.high-contrast.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
  {
    filename: 'dark-high-contrast',
    theme: 'dark-high-contrast',
    source: [
      `src/tokens/functional/shadow/shadow.json5`,
      `src/tokens/functional/border/*.json5`,
      `src/tokens/functional/color/*.json5`,
      `src/tokens/component/*.json5`,
    ],
    include: [
      `src/tokens/functional/size/border.json5`,
      `src/tokens/base/color/dark/dark.json5`,
      `src/tokens/base/color/dark/dark.high-contrast.json5`,
      `src/tokens/base/color/dark/display-dark.json5`,
    ],
  },
]

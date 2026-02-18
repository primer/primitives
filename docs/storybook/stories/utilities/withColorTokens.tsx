import React from 'react'
import type {TransformedToken} from 'style-dictionary'
import type {StoryContext, Decorator} from '@storybook/react'

// eslint-disable-next-line import/extensions
import lightColorTokens from '../../../../dist/docs/functional/themes/light.json'
import lightColorblindColorTokens from '../../../../dist/docs/functional/themes/light-colorblind.json'
import lightColorblindHighContrastColorTokens from '../../../../dist/docs/functional/themes/light-colorblind-high-contrast.json'
import lightTritanopiaColorTokens from '../../../../dist/docs/functional/themes/light-tritanopia.json'
import lightTritanopiaHighContrastColorTokens from '../../../../dist/docs/functional/themes/light-tritanopia-high-contrast.json'
import lightHighContrastColorTokens from '../../../../dist/docs/functional/themes/light-high-contrast.json'
import darkColorTokens from '../../../../dist/docs/functional/themes/dark.json'
import darkDimmedColorTokens from '../../../../dist/docs/functional/themes/dark-dimmed.json'
import darkDimmedHighContrastColorTokens from '../../../../dist/docs/functional/themes/dark-dimmed-high-contrast.json'
import darkColorblindColorTokens from '../../../../dist/docs/functional/themes/dark-colorblind.json'
import darkColorblindHighContrastColorTokens from '../../../../dist/docs/functional/themes/dark-colorblind-high-contrast.json'
import darkTritanopiaColorTokens from '../../../../dist/docs/functional/themes/dark-tritanopia.json'
import darkTritanopiaHighContrastColorTokens from '../../../../dist/docs/functional/themes/dark-tritanopia-high-contrast.json'
import darkHighContrastColorTokens from '../../../../dist/docs/functional/themes/dark-high-contrast.json'

export type ColorTokens = Record<string, TransformedToken>

// Map theme names to their corresponding JSON data
export const themeTokens: Record<string, ColorTokens> = {
  light: lightColorTokens,
  light_colorblind: lightColorblindColorTokens,
  light_colorblind_high_contrast: lightColorblindHighContrastColorTokens,
  light_tritanopia: lightTritanopiaColorTokens,
  light_tritanopia_high_contrast: lightTritanopiaHighContrastColorTokens,
  light_high_contrast: lightHighContrastColorTokens,
  dark: darkColorTokens,
  dark_dimmed: darkDimmedColorTokens,
  dark_dimmed_high_contrast: darkDimmedHighContrastColorTokens,
  dark_colorblind: darkColorblindColorTokens,
  dark_colorblind_high_contrast: darkColorblindHighContrastColorTokens,
  dark_tritanopia: darkTritanopiaColorTokens,
  dark_tritanopia_high_contrast: darkTritanopiaHighContrastColorTokens,
  dark_high_contrast: darkHighContrastColorTokens,
}

// Decorator that provides colorTokens based on the current theme
export const withColorTokens: Decorator = (Story, context: StoryContext) => {
  let themeName = context.globals.theme || 'light'

  // Handle special themes by defaulting to light
  if (themeName === 'light-dark-split' || themeName === 'all') themeName = 'light'

  const colorTokens = themeTokens[themeName]

  return <Story args={{...context.args, colorTokens}} />
}

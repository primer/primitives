type Options = {
  bg: string[]
}

type contrastType = 'contrast.text' | 'contrast.border'

export type ContrastRequirementBlueprint = [
  contrastType | number, // minimumContrast
  string, // foregroundColor
  string, // backgroundColor
  Options?,
]

export type ContrastRequirement = [
  number, // minimumContrast
  string, // foregroundColor
  string, // backgroundColor
  Options?,
]

const contrastRatios = {
  default: {
    'contrast.text': 4.5,
    'contrast.border': 3,
  },
  highContrast: {
    'contrast.text': 7,
    'contrast.border': 4.5,
  },
}

// basically for all non high contrast modes
const baseRequirements: ContrastRequirementBlueprint[] = [
  // neutral text colors
  ['contrast.text', 'fgColor-default', 'bgColor-default'],
  ['contrast.text', 'fgColor-muted', 'bgColor-default'],
  ['contrast.text', 'fgColor-default', 'bgColor-muted'],
  ['contrast.text', 'fgColor-muted', 'bgColor-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-inset'],
  ['contrast.text', 'fgColor-muted', 'bgColor-inset'],
  ['contrast.text', 'control-fgColor-rest', 'bgColor-default'],
  ['contrast.text', 'control-fgColor-rest', 'bgColor-muted'],
  ['contrast.text', 'control-fgColor-rest', 'bgColor-inset'],
  // control colors
  ['contrast.text', 'control-fgColor-rest', 'control-bgColor-rest'],
  ['contrast.text', 'control-fgColor-placeholder', 'bgColor-default'],
  ['contrast.text', 'control-fgColor-rest', 'control-bgColor-active'],
  ['contrast.text', 'control-fgColor-rest', 'control-bgColor-hover'],
  ['contrast.text', 'control-fgColor-rest', 'control-bgColor-selected'],
  ['contrast.text', 'button-invisible-fgColor-rest', 'bgColor-muted'],
  ['contrast.text', 'button-invisible-fgColor-hover', 'button-invisible-bgColor-hover'],
  ['contrast.text', 'button-invisible-iconColor-rest', 'bgColor-muted'],
  ['contrast.text', 'button-invisible-iconColor-hover', 'button-invisible-bgColor-hover'],
  ['contrast.text', 'button-danger-fgColor-rest', 'button-danger-bgColor-rest'],
  ['contrast.text', 'button-danger-fgColor-hover', 'button-danger-bgColor-hover'],
  ['contrast.text', 'button-danger-fgColor-active', 'button-danger-bgColor-active'],
  ['contrast.text', 'button-danger-iconColor-rest', 'button-danger-bgColor-rest'],
  ['contrast.text', 'button-danger-iconColor-hover', 'button-danger-bgColor-hover'],
  ['contrast.text', 'button-primary-fgColor-rest', 'button-primary-bgColor-rest'],
  ['contrast.text', 'button-primary-fgColor-rest', 'button-primary-bgColor-hover'],
  ['contrast.text', 'button-primary-fgColor-rest', 'button-primary-bgColor-active'],
  ['contrast.text', 'button-primary-iconColor-rest', 'button-primary-bgColor-rest'],
  ['contrast.text', 'button-primary-iconColor-rest', 'button-primary-bgColor-hover'],
  // default text on role bg
  // TODO: contrast does not work with semi-transparent colors
  ['contrast.text', 'fgColor-default', 'bgColor-neutral-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-accent-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-success-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-open-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-danger-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-closed-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-attention-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-severe-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-done-muted'],
  ['contrast.text', 'fgColor-default', 'bgColor-sponsors-muted'],
  // role
  ['contrast.text', 'fgColor-neutral', 'bgColor-default'],
  ['contrast.text', 'fgColor-neutral', 'bgColor-muted'],
  ['contrast.text', 'fgColor-neutral', 'bgColor-inset'],
  ['contrast.text', 'fgColor-accent', 'bgColor-default'],
  ['contrast.text', 'fgColor-accent', 'bgColor-muted'],
  ['contrast.text', 'fgColor-accent', 'bgColor-inset'],
  ['contrast.text', 'fgColor-success', 'bgColor-default'],
  ['contrast.text', 'fgColor-success', 'bgColor-muted'],
  ['contrast.text', 'fgColor-success', 'bgColor-inset'],
  ['contrast.text', 'fgColor-open', 'bgColor-default'],
  ['contrast.text', 'fgColor-open', 'bgColor-muted'],
  ['contrast.text', 'fgColor-open', 'bgColor-inset'],
  ['contrast.text', 'fgColor-danger', 'bgColor-default'],
  ['contrast.text', 'fgColor-danger', 'bgColor-muted'],
  ['contrast.text', 'fgColor-danger', 'bgColor-inset'],
  ['contrast.text', 'fgColor-closed', 'bgColor-default'],
  ['contrast.text', 'fgColor-closed', 'bgColor-muted'],
  ['contrast.text', 'fgColor-closed', 'bgColor-inset'],
  ['contrast.text', 'fgColor-attention', 'bgColor-default'],
  ['contrast.text', 'fgColor-attention', 'bgColor-muted'],
  ['contrast.text', 'fgColor-attention', 'bgColor-inset'],
  ['contrast.text', 'fgColor-severe', 'bgColor-default'],
  ['contrast.text', 'fgColor-severe', 'bgColor-muted'],
  ['contrast.text', 'fgColor-severe', 'bgColor-inset'],
  ['contrast.text', 'fgColor-done', 'bgColor-default'],
  ['contrast.text', 'fgColor-done', 'bgColor-muted'],
  ['contrast.text', 'fgColor-done', 'bgColor-inset'],
  ['contrast.text', 'fgColor-upsell', 'bgColor-default'],
  ['contrast.text', 'fgColor-upsell', 'bgColor-muted'],
  ['contrast.text', 'fgColor-upsell', 'bgColor-inset'],
  ['contrast.text', 'fgColor-sponsors', 'bgColor-default'],
  ['contrast.text', 'fgColor-sponsors', 'bgColor-muted'],
  ['contrast.text', 'fgColor-sponsors', 'bgColor-inset'],
  // role text on role bg
  ['contrast.text', 'fgColor-neutral', 'bgColor-neutral-muted'],
  ['contrast.text', 'fgColor-accent', 'bgColor-accent-muted'],
  ['contrast.text', 'fgColor-success', 'bgColor-success-muted'],
  ['contrast.text', 'fgColor-open', 'bgColor-open-muted'],
  ['contrast.text', 'fgColor-danger', 'bgColor-danger-muted'],
  ['contrast.text', 'fgColor-closed', 'bgColor-closed-muted'],
  ['contrast.text', 'fgColor-attention', 'bgColor-attention-muted'],
  ['contrast.text', 'fgColor-severe', 'bgColor-severe-muted'],
  ['contrast.text', 'fgColor-done', 'bgColor-done-muted'],
  ['contrast.text', 'fgColor-upsell', 'bgColor-upsell-muted'],
  ['contrast.text', 'fgColor-sponsors', 'bgColor-sponsors-muted'],
  // fgColor-onEmphasis
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-neutral-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-accent-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-success-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-open-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-danger-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-closed-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-attention-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-severe-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-done-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-upsell-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'bgColor-sponsors-emphasis'],
  // borders
  ['contrast.border', 'control-borderColor-emphasis', 'bgColor-default'],
  ['contrast.border', 'control-borderColor-emphasis', 'bgColor-muted'],
]

const displayColorRequirements: ContrastRequirementBlueprint[] = [
  // TODO: there are no specific border colors for roles
  // display colors
  ['contrast.text', 'display-gray-fgColor', 'display-gray-bgColor-muted'],
  ['contrast.text', 'display-indigo-fgColor', 'display-indigo-bgColor-muted'],
  ['contrast.text', 'display-blue-fgColor', 'display-blue-bgColor-muted'],
  ['contrast.text', 'display-cyan-fgColor', 'display-cyan-bgColor-muted'],
  ['contrast.text', 'display-teal-fgColor', 'display-teal-bgColor-muted'],
  ['contrast.text', 'display-pine-fgColor', 'display-pine-bgColor-muted'],
  ['contrast.text', 'display-green-fgColor', 'display-green-bgColor-muted'],
  ['contrast.text', 'display-lime-fgColor', 'display-lime-bgColor-muted'],
  ['contrast.text', 'display-olive-fgColor', 'display-olive-bgColor-muted'],
  ['contrast.text', 'display-lemon-fgColor', 'display-lemon-bgColor-muted'],
  ['contrast.text', 'display-yellow-fgColor', 'display-yellow-bgColor-muted'],
  ['contrast.text', 'display-orange-fgColor', 'display-orange-bgColor-muted'],
  ['contrast.text', 'display-red-fgColor', 'display-red-bgColor-muted'],
  ['contrast.text', 'display-coral-fgColor', 'display-coral-bgColor-muted'],
  ['contrast.text', 'display-pink-fgColor', 'display-pink-bgColor-muted'],
  ['contrast.text', 'display-plum-fgColor', 'display-plum-bgColor-muted'],
  ['contrast.text', 'display-purple-fgColor', 'display-purple-bgColor-muted'],
  ['contrast.text', 'display-brown-fgColor', 'display-brown-bgColor-muted'],
  ['contrast.text', 'display-auburn-fgColor', 'display-auburn-bgColor-muted'],
  //
  ['contrast.text', 'fgColor-onEmphasis', 'display-gray-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-indigo-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-blue-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-cyan-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-teal-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-pine-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-green-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-lime-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-olive-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-lemon-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-yellow-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-orange-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-red-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-coral-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-pink-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-plum-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-purple-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-brown-bgColor-emphasis'],
  ['contrast.text', 'fgColor-onEmphasis', 'display-auburn-bgColor-emphasis'],
  //
  ['contrast.border', 'bgColor-default', 'display-gray-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-indigo-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-blue-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-cyan-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-teal-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-pine-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-green-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-lime-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-olive-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-lemon-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-yellow-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-orange-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-red-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-coral-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-pink-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-plum-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-purple-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-brown-borderColor-emphasis'],
  ['contrast.border', 'bgColor-default', 'display-auburn-borderColor-emphasis'],
  //
  ['contrast.border', 'bgColor-muted', 'display-gray-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-indigo-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-blue-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-cyan-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-teal-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-pine-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-green-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-lime-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-olive-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-lemon-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-yellow-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-orange-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-red-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-coral-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-pink-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-plum-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-purple-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-brown-borderColor-emphasis'],
  ['contrast.border', 'bgColor-muted', 'display-auburn-borderColor-emphasis'],
  //
  ['contrast.border', 'display-gray-borderColor-emphasis', 'display-gray-bgColor-muted'],
  ['contrast.border', 'display-indigo-borderColor-emphasis', 'display-indigo-bgColor-muted'],
  ['contrast.border', 'display-blue-borderColor-emphasis', 'display-blue-bgColor-muted'],
  ['contrast.border', 'display-cyan-borderColor-emphasis', 'display-cyan-bgColor-muted'],
  ['contrast.border', 'display-teal-borderColor-emphasis', 'display-teal-bgColor-muted'],
  ['contrast.border', 'display-pine-borderColor-emphasis', 'display-pine-bgColor-muted'],
  ['contrast.border', 'display-green-borderColor-emphasis', 'display-green-bgColor-muted'],
  ['contrast.border', 'display-lime-borderColor-emphasis', 'display-lime-bgColor-muted'],
  ['contrast.border', 'display-olive-borderColor-emphasis', 'display-olive-bgColor-muted'],
  ['contrast.border', 'display-lemon-borderColor-emphasis', 'display-lemon-bgColor-muted'],
  ['contrast.border', 'display-yellow-borderColor-emphasis', 'display-yellow-bgColor-muted'],
  ['contrast.border', 'display-orange-borderColor-emphasis', 'display-orange-bgColor-muted'],
  ['contrast.border', 'display-red-borderColor-emphasis', 'display-red-bgColor-muted'],
  ['contrast.border', 'display-coral-borderColor-emphasis', 'display-coral-bgColor-muted'],
  ['contrast.border', 'display-pink-borderColor-emphasis', 'display-pink-bgColor-muted'],
  ['contrast.border', 'display-plum-borderColor-emphasis', 'display-plum-bgColor-muted'],
  ['contrast.border', 'display-purple-borderColor-emphasis', 'display-purple-bgColor-muted'],
  ['contrast.border', 'display-brown-borderColor-emphasis', 'display-brown-bgColor-muted'],
  ['contrast.border', 'display-auburn-borderColor-emphasis', 'display-auburn-bgColor-muted'],
]

const setContrastRatios = (
  contrast: 'default' | 'highContrast',
  requirements: ContrastRequirementBlueprint[],
): ContrastRequirement[] => {
  return requirements.map(([contrastType, color1, color2]) => [
    typeof contrastType === 'number'
      ? contrastType
      : (contrastRatios[contrast][contrastType as contrastType] as number),
    color1,
    color2,
  ])
}

const defaultContrast: ContrastRequirement[] = setContrastRatios('default', [
  ...baseRequirements,
  ...displayColorRequirements,
])

const highContrast: ContrastRequirement[] = setContrastRatios('highContrast', [
  ...baseRequirements,
  ...displayColorRequirements,
  // add high contrast overwrites or additions
])

export const bgColors: string[] = ['bgColor-default', 'bgColor-muted']

export type ThemeName =
  | 'light'
  | 'light_high_contrast'
  | 'light_colorblind'
  | 'light_tritanopia'
  | 'dark'
  | 'dark_dimmed'
  | 'dark_high_contrast'
  | 'dark_colorblind'
  | 'dark_tritanopia'

export type ContrastRequirements = {[key in ThemeName]: ContrastRequirement[]}
export const contrastRequirements: ContrastRequirements = {
  // default light mode
  light: defaultContrast,
  light_high_contrast: highContrast,
  light_colorblind: defaultContrast,
  light_tritanopia: defaultContrast,
  // default dark mode
  dark: defaultContrast,
  dark_dimmed: defaultContrast,
  dark_high_contrast: highContrast,
  dark_colorblind: defaultContrast,
  dark_tritanopia: defaultContrast,
}

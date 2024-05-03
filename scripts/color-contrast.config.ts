type Options = {
  bg: string[]
}

export type ContrastRequirement = [
  number, // minimumContrast
  string, // foregroundColor
  string, // backgroundColor
  Options?,
]
// basically for all non high contrast modes
const baseRequirements: ContrastRequirement[] = [
  // neutral text colors
  [4.5, 'fgColor-default', 'bgColor-default'],
  [4.5, 'fgColor-muted', 'bgColor-default'],
  [4.5, 'fgColor-default', 'bgColor-muted'],
  [4.5, 'fgColor-muted', 'bgColor-muted'],
  [4.5, 'fgColor-default', 'bgColor-inset'],
  [4.5, 'fgColor-muted', 'bgColor-inset'],
  [4.5, 'control-fgColor-rest', 'bgColor-default'],
  [4.5, 'control-fgColor-placeholder', 'bgColor-default'],
  [4.5, 'control-fgColor-rest', 'bgColor-muted'],
  [4.5, 'control-fgColor-placeholder', 'bgColor-muted'],
  [4.5, 'control-fgColor-rest', 'bgColor-inset'],
  [4.5, 'control-fgColor-placeholder', 'bgColor-inset'],
  // control colors
  [4.5, 'fgColor-default', 'control-bgColor-rest'],
  [4.5, 'fgColor-muted', 'control-bgColor-rest'],
  [4.5, 'control-fgColor-rest', 'control-bgColor-rest'],
  [4.5, 'control-fgColor-placeholder', 'control-bgColor-rest'],
  [4.5, 'fgColor-default', 'control-bgColor-hover'],
  [4.5, 'fgColor-muted', 'control-bgColor-hover'],
  [4.5, 'control-fgColor-rest', 'control-bgColor-hover'],
  [4.5, 'fgColor-default', 'control-bgColor-active'],
  [4.5, 'fgColor-muted', 'control-bgColor-active'],
  [4.5, 'control-fgColor-rest', 'control-bgColor-active'],
  [4.5, 'fgColor-default', 'control-bgColor-selected'],
  [4.5, 'fgColor-muted', 'control-bgColor-selected'],
  [4.5, 'control-fgColor-rest', 'control-bgColor-selected'],
  // default text on role bg
  // TODO: contrast does not work with semi-transparent colors
  [4.5, 'fgColor-default', 'bgColor-accent-muted'],
  [4.5, 'fgColor-default', 'bgColor-success-muted'],
  [4.5, 'fgColor-default', 'bgColor-open-muted'],
  [4.5, 'fgColor-default', 'bgColor-danger-muted'],
  [4.5, 'fgColor-default', 'bgColor-closed-muted'],
  [4.5, 'fgColor-default', 'bgColor-attention-muted'],
  [4.5, 'fgColor-default', 'bgColor-severe-muted'],
  [4.5, 'fgColor-default', 'bgColor-done-muted'],
  [4.5, 'fgColor-default', 'bgColor-sponsors-muted'],
  // role
  [4.5, 'fgColor-accent', 'bgColor-default'],
  [4.5, 'fgColor-accent', 'bgColor-muted'],
  [4.5, 'fgColor-accent', 'bgColor-inset'],
  [4.5, 'fgColor-success', 'bgColor-default'],
  [4.5, 'fgColor-success', 'bgColor-muted'],
  [4.5, 'fgColor-success', 'bgColor-inset'],
  [4.5, 'fgColor-open', 'bgColor-default'],
  [4.5, 'fgColor-open', 'bgColor-muted'],
  [4.5, 'fgColor-open', 'bgColor-inset'],
  [4.5, 'fgColor-danger', 'bgColor-default'],
  [4.5, 'fgColor-danger', 'bgColor-muted'],
  [4.5, 'fgColor-danger', 'bgColor-inset'],
  [4.5, 'fgColor-closed', 'bgColor-default'],
  [4.5, 'fgColor-closed', 'bgColor-muted'],
  [4.5, 'fgColor-closed', 'bgColor-inset'],
  [4.5, 'fgColor-attention', 'bgColor-default'],
  [4.5, 'fgColor-attention', 'bgColor-muted'],
  [4.5, 'fgColor-attention', 'bgColor-inset'],
  [4.5, 'fgColor-severe', 'bgColor-default'],
  [4.5, 'fgColor-severe', 'bgColor-muted'],
  [4.5, 'fgColor-severe', 'bgColor-inset'],
  [4.5, 'fgColor-done', 'bgColor-default'],
  [4.5, 'fgColor-done', 'bgColor-muted'],
  [4.5, 'fgColor-done', 'bgColor-inset'],
  [4.5, 'fgColor-sponsors', 'bgColor-default'],
  [4.5, 'fgColor-sponsors', 'bgColor-muted'],
  [4.5, 'fgColor-sponsors', 'bgColor-inset'],
  // role text on role bg
  [4.5, 'fgColor-accent', 'bgColor-accent-muted', {bg: ['bgColor-default']}],
  [4.5, 'fgColor-success', 'bgColor-success-muted'],
  [4.5, 'fgColor-open', 'bgColor-open-muted'],
  [4.5, 'fgColor-danger', 'bgColor-danger-muted'],
  [4.5, 'fgColor-closed', 'bgColor-closed-muted', {bg: ['bgColor-default']}],
  [4.5, 'fgColor-attention', 'bgColor-attention-muted'],
  [4.5, 'fgColor-severe', 'bgColor-severe-muted'],
  [4.5, 'fgColor-done', 'bgColor-done-muted'],
  [4.5, 'fgColor-sponsors', 'bgColor-sponsors-muted'],
  // fgColor-onEmphasis
  [4.5, 'fgColor-onEmphasis', 'bgColor-neutral-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-accent-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-success-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-open-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-danger-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-closed-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-attention-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-severe-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-done-emphasis'],
  [4.5, 'fgColor-onEmphasis', 'bgColor-sponsors-emphasis'],
  // borders
  [3, 'control-borderColor-emphasis', 'bgColor-default'],
  [3, 'control-borderColor-emphasis', 'bgColor-muted'],
  // TODO: there are no specific border colors for roles
]

const highContrast: ContrastRequirement[] = [
  // neutral text colors
  [7, 'fgColor-default', 'bgColor-default'],
  [7, 'fgColor-muted', 'bgColor-default'],
  [7, 'fgColor-default', 'bgColor-muted'],
  [7, 'fgColor-muted', 'bgColor-muted'],
  [7, 'fgColor-default', 'bgColor-inset'],
  [7, 'fgColor-muted', 'bgColor-inset'],
  [7, 'control-fgColor-rest', 'bgColor-default'],
  [7, 'control-fgColor-placeholder', 'bgColor-default'],
  [7, 'control-fgColor-rest', 'bgColor-muted'],
  [7, 'control-fgColor-placeholder', 'bgColor-muted'],
  [7, 'control-fgColor-rest', 'bgColor-inset'],
  [7, 'control-fgColor-placeholder', 'bgColor-inset'],
  // control colors
  [7, 'fgColor-default', 'control-bgColor-rest'],
  [7, 'fgColor-muted', 'control-bgColor-rest'],
  [7, 'control-fgColor-rest', 'control-bgColor-rest'],
  [7, 'control-fgColor-placeholder', 'control-bgColor-rest'],
  [7, 'fgColor-default', 'control-bgColor-hover'],
  [7, 'fgColor-muted', 'control-bgColor-hover'],
  [7, 'control-fgColor-rest', 'control-bgColor-hover'],
  [7, 'fgColor-default', 'control-bgColor-active'],
  [7, 'fgColor-muted', 'control-bgColor-active'],
  [7, 'control-fgColor-rest', 'control-bgColor-active'],
  [7, 'fgColor-default', 'control-bgColor-selected'],
  [7, 'fgColor-muted', 'control-bgColor-selected'],
  [7, 'control-fgColor-rest', 'control-bgColor-selected'],
  // default text on role bg
  // TODO: contrast does not work with semi-transparent colors
  [7, 'fgColor-default', 'bgColor-accent-muted'],
  [7, 'fgColor-default', 'bgColor-success-muted'],
  [7, 'fgColor-default', 'bgColor-open-muted'],
  [7, 'fgColor-default', 'bgColor-danger-muted'],
  [7, 'fgColor-default', 'bgColor-closed-muted'],
  [7, 'fgColor-default', 'bgColor-attention-muted'],
  [7, 'fgColor-default', 'bgColor-severe-muted'],
  [7, 'fgColor-default', 'bgColor-done-muted'],
  [7, 'fgColor-default', 'bgColor-sponsors-muted'],
  // role
  [7, 'fgColor-accent', 'bgColor-default'],
  [7, 'fgColor-accent', 'bgColor-muted'],
  [7, 'fgColor-accent', 'bgColor-inset'],
  [7, 'fgColor-success', 'bgColor-default'],
  [7, 'fgColor-success', 'bgColor-muted'],
  [7, 'fgColor-success', 'bgColor-inset'],
  [7, 'fgColor-open', 'bgColor-default'],
  [7, 'fgColor-open', 'bgColor-muted'],
  [7, 'fgColor-open', 'bgColor-inset'],
  [7, 'fgColor-danger', 'bgColor-default'],
  [7, 'fgColor-danger', 'bgColor-muted'],
  [7, 'fgColor-danger', 'bgColor-inset'],
  [7, 'fgColor-closed', 'bgColor-default'],
  [7, 'fgColor-closed', 'bgColor-muted'],
  [7, 'fgColor-closed', 'bgColor-inset'],
  [7, 'fgColor-attention', 'bgColor-default'],
  [7, 'fgColor-attention', 'bgColor-muted'],
  [7, 'fgColor-attention', 'bgColor-inset'],
  [7, 'fgColor-severe', 'bgColor-default'],
  [7, 'fgColor-severe', 'bgColor-muted'],
  [7, 'fgColor-severe', 'bgColor-inset'],
  [7, 'fgColor-done', 'bgColor-default'],
  [7, 'fgColor-done', 'bgColor-muted'],
  [7, 'fgColor-done', 'bgColor-inset'],
  [7, 'fgColor-sponsors', 'bgColor-default'],
  [7, 'fgColor-sponsors', 'bgColor-muted'],
  [7, 'fgColor-sponsors', 'bgColor-inset'],
  // role text on role bg
  [7, 'fgColor-accent', 'bgColor-accent-muted'],
  [7, 'fgColor-success', 'bgColor-success-muted'],
  [7, 'fgColor-open', 'bgColor-open-muted'],
  [7, 'fgColor-danger', 'bgColor-danger-muted'],
  [7, 'fgColor-closed', 'bgColor-closed-muted'],
  [7, 'fgColor-attention', 'bgColor-attention-muted'],
  [7, 'fgColor-severe', 'bgColor-severe-muted'],
  [7, 'fgColor-done', 'bgColor-done-muted'],
  [7, 'fgColor-sponsors', 'bgColor-sponsors-muted'],
  // fgColor-onEmphasis
  [7, 'fgColor-onEmphasis', 'bgColor-neutral-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-accent-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-success-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-open-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-danger-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-closed-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-attention-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-severe-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-done-emphasis'],
  [7, 'fgColor-onEmphasis', 'bgColor-sponsors-emphasis'],
  // borders
  [4.5, 'control-borderColor-emphasis', 'bgColor-default'],
  [4.5, 'control-borderColor-emphasis', 'bgColor-muted'],
] as ContrastRequirement[]

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
  light: baseRequirements,
  light_high_contrast: highContrast,
  light_colorblind: baseRequirements,
  light_tritanopia: baseRequirements,
  // default dark mode
  dark: baseRequirements,
  dark_dimmed: baseRequirements,
  dark_high_contrast: highContrast,
  dark_colorblind: baseRequirements,
  dark_tritanopia: baseRequirements,
}

import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const excludedPrefixes = ['bgColor-', 'fgColor-', 'borderColor-', 'display-', 'data-', 'shadow-']

const functionalTokenNames = Object.keys(themeTokens.light).filter(
  name => !excludedPrefixes.some(prefix => name.startsWith(prefix)),
)

function functionalNamesFor(prefixes: readonly string[]) {
  return functionalTokenNames.filter(name => prefixes.some(prefix => name.startsWith(prefix)))
}

function labelNamesFor(families: readonly string[]) {
  return functionalTokenNames.filter(name => families.some(family => name.startsWith(`label-${family}-`)))
}

const buttonGroups = [
  {
    title: 'Functional colors buttons primary',
    prefixes: [
      'button-default',
      'button-outline',
      'button-primary',
      'button-inactive',
      'buttonCounter',
      'buttonKeybindingHint',
    ],
  },
  {title: 'Functional colors buttons danger', prefixes: ['button-danger', 'button-invisible', 'button-star']},
] as const

const controlGroups = [
  {title: 'Functional colors controls states', prefixes: ['control-checked', 'control-transparent']},
  {
    title: 'Functional colors controls base',
    prefixes: [
      'control-bgColor',
      'control-borderColor',
      'control-fgColor',
      'control-iconColor',
      'control-danger',
      'counter',
      'focus',
    ],
  },
] as const

const labelGroups = [
  {title: 'Functional colors labels warm', families: ['auburn', 'blue', 'brown', 'coral', 'cyan', 'gray']},
  {title: 'Functional colors labels mid', families: ['green', 'indigo', 'lemon', 'lime', 'olive', 'orange']},
  {title: 'Functional colors labels bright', families: ['pine', 'pink', 'plum', 'purple', 'red', 'teal', 'yellow']},
] as const

const miscGroups = [
  {
    title: 'Functional colors navigation',
    prefixes: [
      'avatar',
      'avatarStack',
      'header',
      'headerSearch',
      'menu',
      'overlay',
      'page',
      'reactionButton',
      'selectMenu',
      'sideNav',
      'tooltip',
      'underlineNav',
    ],
  },
  {
    title: 'Functional colors content',
    prefixes: [
      'card',
      'codeMirror',
      'contribution',
      'dashboard',
      'diffBlob',
      'highlight',
      'progressBar',
      'selection',
      'skeletonLoader',
      'timelineBadge',
      'topicTag',
      'treeViewItem',
    ],
  },
  {title: 'Functional colors syntax ansi', prefixes: ['ansi-', 'color-ansi']},
  {title: 'Functional colors syntax prettylights', prefixes: ['prettylights', 'color-prettylights']},
] as const

export default {
  title: 'VRT/Functional colors',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const FunctionalColorsButtonsPrimary = () => (
  <ThemeTokenTable
    title={buttonGroups[0].title}
    tokenNames={functionalNamesFor(buttonGroups[0].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsButtonsDanger = () => (
  <ThemeTokenTable
    title={buttonGroups[1].title}
    tokenNames={functionalNamesFor(buttonGroups[1].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsControlsStates = () => (
  <ThemeTokenTable
    title={controlGroups[0].title}
    tokenNames={functionalNamesFor(controlGroups[0].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsControlsBase = () => (
  <ThemeTokenTable
    title={controlGroups[1].title}
    tokenNames={functionalNamesFor(controlGroups[1].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsLabelsWarm = () => (
  <ThemeTokenTable
    title={labelGroups[0].title}
    tokenNames={labelNamesFor(labelGroups[0].families)}
    previewKind="mixed"
  />
)

export const FunctionalColorsLabelsMid = () => (
  <ThemeTokenTable
    title={labelGroups[1].title}
    tokenNames={labelNamesFor(labelGroups[1].families)}
    previewKind="mixed"
  />
)

export const FunctionalColorsLabelsBright = () => (
  <ThemeTokenTable
    title={labelGroups[2].title}
    tokenNames={labelNamesFor(labelGroups[2].families)}
    previewKind="mixed"
  />
)

export const FunctionalColorsNavigation = () => (
  <ThemeTokenTable
    title={miscGroups[0].title}
    tokenNames={functionalNamesFor(miscGroups[0].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsContent = () => (
  <ThemeTokenTable
    title={miscGroups[1].title}
    tokenNames={functionalNamesFor(miscGroups[1].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsSyntaxAnsi = () => (
  <ThemeTokenTable
    title={miscGroups[2].title}
    tokenNames={functionalNamesFor(miscGroups[2].prefixes)}
    previewKind="mixed"
  />
)

export const FunctionalColorsSyntaxPrettylights = () => (
  <ThemeTokenTable
    title={miscGroups[3].title}
    tokenNames={functionalNamesFor(miscGroups[3].prefixes)}
    previewKind="mixed"
  />
)

FunctionalColorsButtonsPrimary.tags = ['snapshotLight']
FunctionalColorsButtonsDanger.tags = ['snapshotLight']
FunctionalColorsControlsStates.tags = ['snapshotLight']
FunctionalColorsControlsBase.tags = ['snapshotLight']
FunctionalColorsLabelsWarm.tags = ['snapshotLight']
FunctionalColorsLabelsMid.tags = ['snapshotLight']
FunctionalColorsLabelsBright.tags = ['snapshotLight']
FunctionalColorsNavigation.tags = ['snapshotLight']
FunctionalColorsContent.tags = ['snapshotLight']
FunctionalColorsSyntaxAnsi.tags = ['snapshotLight']
FunctionalColorsSyntaxPrettylights.tags = ['snapshotLight']

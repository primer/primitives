import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const excludedPrefixes = ['bgColor-', 'fgColor-', 'borderColor-', 'display-', 'data-', 'shadow-']

const functionalTokenNames = Object.keys(themeTokens.light).filter(
  name => !excludedPrefixes.some(prefix => name.startsWith(prefix)),
)

const functionalGroups = [
  {
    id: 'interactive',
    prefixes: [
      'avatar',
      'avatarStack',
      'button',
      'buttonCounter',
      'buttonKeybindingHint',
      'control',
      'controlKnob',
      'controlTrack',
      'counter',
      'reactionButton',
    ],
  },
  {
    id: 'navigation',
    prefixes: ['header', 'headerSearch', 'menu', 'overlay', 'page', 'selectMenu', 'sideNav', 'tooltip', 'underlineNav'],
  },
  {
    id: 'content',
    prefixes: [
      'card',
      'codeMirror',
      'contribution',
      'dashboard',
      'diffBlob',
      'focus',
      'highlight',
      'label',
      'progressBar',
      'selection',
      'skeletonLoader',
      'timelineBadge',
      'topicTag',
      'treeViewItem',
    ],
  },
  {id: 'syntax', prefixes: ['ansi', 'prettylights', 'color']},
] as const

function functionalNamesFor(prefixes: readonly string[]) {
  return functionalTokenNames.filter(name => prefixes.some(prefix => name.startsWith(prefix)))
}

export default {
  title: 'VRT/Functional colors',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const FunctionalColorsInteractive = () => {
  return (
    <ThemeTokenTable
      title="Functional colors interactive"
      tokenNames={functionalNamesFor(functionalGroups[0].prefixes)}
      previewKind="mixed"
    />
  )
}

export const FunctionalColorsNavigation = () => {
  return (
    <ThemeTokenTable
      title="Functional colors navigation"
      tokenNames={functionalNamesFor(functionalGroups[1].prefixes)}
      previewKind="mixed"
    />
  )
}

export const FunctionalColorsContent = () => {
  return (
    <ThemeTokenTable
      title="Functional colors content"
      tokenNames={functionalNamesFor(functionalGroups[2].prefixes)}
      previewKind="mixed"
    />
  )
}

export const FunctionalColorsSyntax = () => {
  return (
    <ThemeTokenTable
      title="Functional colors syntax"
      tokenNames={functionalNamesFor(functionalGroups[3].prefixes)}
      previewKind="mixed"
    />
  )
}

FunctionalColorsInteractive.tags = ['snapshotLight']
FunctionalColorsNavigation.tags = ['snapshotLight']
FunctionalColorsContent.tags = ['snapshotLight']
FunctionalColorsSyntax.tags = ['snapshotLight']

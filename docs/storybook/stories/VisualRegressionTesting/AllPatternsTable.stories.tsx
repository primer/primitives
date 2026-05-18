import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {getTokensByName} from '../utilities/getTokensByName'
import {ThemeTokenTable} from './ThemeTokenTable'

const patternGroups = [
  {
    title: 'Pattern group controls',
    prefixes: ['avatar', 'control', 'controlKnob', 'controlTrack', 'counter', 'focus'],
  },
  {title: 'Pattern group buttons', prefixes: ['button']},
  {
    title: 'Pattern group navigation',
    prefixes: ['header', 'menu', 'overlay', 'selectMenu', 'sideNav', 'underlineNav'],
  },
  {
    title: 'Pattern group content',
    prefixes: ['selection', 'tooltip', 'treeViewItem', 'contribution', 'label', 'syntax', 'timelineBadge', 'color'],
  },
] as const

function tokenNamesFor(prefixes: readonly string[]) {
  return Array.from(
    new Set(
      prefixes.flatMap(prefix => {
        return getTokensByName(themeTokens.light, prefix).map(token => token.name)
      }),
    ),
  )
}

export default {
  title: 'VRT/patterns',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const PatternGroupControls = () => (
  <ThemeTokenTable
    title={patternGroups[0].title}
    tokenNames={tokenNamesFor(patternGroups[0].prefixes)}
    previewKind="mixed"
  />
)

export const PatternGroupButtons = () => (
  <ThemeTokenTable
    title={patternGroups[1].title}
    tokenNames={tokenNamesFor(patternGroups[1].prefixes)}
    previewKind="mixed"
  />
)

export const PatternGroupNavigation = () => (
  <ThemeTokenTable
    title={patternGroups[2].title}
    tokenNames={tokenNamesFor(patternGroups[2].prefixes)}
    previewKind="mixed"
  />
)

export const PatternGroupContent = () => (
  <ThemeTokenTable
    title={patternGroups[3].title}
    tokenNames={tokenNamesFor(patternGroups[3].prefixes)}
    previewKind="mixed"
  />
)

PatternGroupControls.tags = ['snapshotLight']
PatternGroupButtons.tags = ['snapshotLight']
PatternGroupNavigation.tags = ['snapshotLight']
PatternGroupContent.tags = ['snapshotLight']

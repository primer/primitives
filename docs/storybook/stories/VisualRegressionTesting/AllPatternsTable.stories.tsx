import React from 'react'
import {Stack} from '@primer/react/experimental'
import {withColorTokens, type ColorTokens} from '../utilities/withColorTokens'
import * as PatternStories from '../Color/Patterns/AllPatterns.stories'

const patternGroups = [
  {
    title: 'Pattern group controls',
    stories: [
      PatternStories.Avatar,
      PatternStories.Control,
      PatternStories.Counter,
      PatternStories.Button,
      PatternStories.Focus,
    ],
  },
  {
    title: 'Pattern group navigation',
    stories: [
      PatternStories.Header,
      PatternStories.Menu,
      PatternStories.Overlay,
      PatternStories.SelectMenu,
      PatternStories.SideNav,
      PatternStories.UnderlineNav,
    ],
  },
  {
    title: 'Pattern group content',
    stories: [
      PatternStories.Selection,
      PatternStories.Tooltip,
      PatternStories.Treeview,
      PatternStories.ContributionGraph,
      PatternStories.Label,
      PatternStories.Syntax,
      PatternStories.TimelineBadge,
    ],
  },
] as const

export default {
  title: 'VRT/All patterns',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const PatternGroupControls = ({colorTokens}: {colorTokens: ColorTokens}) => {
  return (
    <Stack gap="large">
      {patternGroups[0].stories.map((PatternStory, index) => (
        <PatternStory key={index} colorTokens={colorTokens} />
      ))}
    </Stack>
  )
}

export const PatternGroupNavigation = ({colorTokens}: {colorTokens: ColorTokens}) => {
  return (
    <Stack gap="large">
      {patternGroups[1].stories.map((PatternStory, index) => (
        <PatternStory key={index} colorTokens={colorTokens} />
      ))}
    </Stack>
  )
}

export const PatternGroupContent = ({colorTokens}: {colorTokens: ColorTokens}) => {
  return (
    <Stack gap="large">
      {patternGroups[2].stories.map((PatternStory, index) => (
        <PatternStory key={index} colorTokens={colorTokens} />
      ))}
    </Stack>
  )
}

PatternGroupControls.tags = ['snapshotLight']
PatternGroupNavigation.tags = ['snapshotLight']
PatternGroupContent.tags = ['snapshotLight']

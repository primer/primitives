import React from 'react'
import {Stack} from '@primer/react/experimental'
import {withColorTokens, type ColorTokens} from '../utilities/withColorTokens'
import * as PatternStories from '../Color/Patterns/AllPatterns.stories'

const patternStories = [
  PatternStories.Avatar,
  PatternStories.Control,
  PatternStories.Counter,
  PatternStories.Button,
  PatternStories.Focus,
  PatternStories.Header,
  PatternStories.Menu,
  PatternStories.Overlay,
  PatternStories.SelectMenu,
  PatternStories.SideNav,
  PatternStories.TimelineBadge,
  PatternStories.UnderlineNav,
  PatternStories.Selection,
  PatternStories.Tooltip,
  PatternStories.Treeview,
  PatternStories.ContributionGraph,
  PatternStories.Label,
  PatternStories.Syntax,
]

export default {
  title: 'VRT/All patterns',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllPatterns = ({colorTokens}: {colorTokens: ColorTokens}) => {
  return (
    <Stack gap="large">
      {patternStories.map((PatternStory, index) => (
        <PatternStory key={index} colorTokens={colorTokens} />
      ))}
    </Stack>
  )
}

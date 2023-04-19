import React from 'react'
import {Flash, Label, StateLabel, Tooltip, IconButton} from '@primer/react'
import {SearchIcon} from '@primer/octicons-react'

export default {
  title: 'Demos/Other',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const FlashDemo = () => {
  return (
    <div style={{display: 'grid', gap: '1rem'}}>
      <Flash variant="success">Success</Flash>
      <Flash variant="danger">Danger</Flash>
      <Flash variant="warning">Warning</Flash>
      <Flash>Default</Flash>
    </div>
  )
}

export const LabelDemo = () => {
  return (
    <div style={{display: 'grid', gap: '1rem'}}>
      <Label variant="primary">Primary</Label>
      <Label variant="secondary">Secondary</Label>
      <Label variant="accent">Accent</Label>
      <Label variant="success">Success</Label>
      <Label variant="attention">Attention</Label>
      <Label variant="severe">Primary</Label>
      <Label variant="danger">Danger</Label>
      <Label variant="done">Done</Label>
      <Label variant="sponsors">Sponsors</Label>
    </div>
  )
}

export const StateLabelDemo = () => {
  return (
    <div style={{display: 'grid', gap: '1rem'}}>
      <StateLabel status="issueOpened">Open</StateLabel>
      <StateLabel status="issueClosed">Closed</StateLabel>
      <StateLabel status="issueClosedNotPlanned">Closed</StateLabel>
      <StateLabel status="issueDraft">Draft</StateLabel>
      <StateLabel status="pullOpened">Open</StateLabel>
      <StateLabel status="pullClosed">Closed</StateLabel>
      <StateLabel status="pullMerged">Merged</StateLabel>
      <StateLabel status="draft">Draft</StateLabel>
    </div>
  )
}

export const TooltipDemo = () => (
  <>
    <Tooltip aria-label="Search">
      <IconButton icon={SearchIcon} aria-label="Search" />
    </Tooltip>
  </>
)

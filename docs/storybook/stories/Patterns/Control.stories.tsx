import React from 'react'
import './PatternOverrides.css'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../ColorPreview'
import {ToggleSwitch, SegmentedControl} from '@primer/react'

export default {
  title: 'Patterns/Colors',
} as ComponentMeta<typeof ColorPreview>

export const ToggleSwitchScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div className="ToggleSwitch" style={{display: 'flex', gap: '1rem'}}>
      <ToggleSwitch aria-labelledby="switchLabel" />
      <ToggleSwitch disabled aria-labelledby="switchLabel" />
      <ToggleSwitch checked aria-labelledby="switchLabel" />
      <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
    </div>
  )
}

export const SegmentedControlScheme: ComponentStory<typeof ColorPreview> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSegmentChange = (selectedIndex: React.SetStateAction<number>) => {
    setSelectedIndex(selectedIndex)
  }
  return (
    <div className="SegmentedControl" style={{display: 'flex', gap: '1rem'}}>
      <SegmentedControl aria-label="File view" onChange={handleSegmentChange}>
        <SegmentedControl.Button selected={selectedIndex === 0}>Preview</SegmentedControl.Button>
        <SegmentedControl.Button selected={selectedIndex === 1}>Raw</SegmentedControl.Button>
        <SegmentedControl.Button selected={selectedIndex === 2}>Blame</SegmentedControl.Button>
      </SegmentedControl>
    </div>
  )
}

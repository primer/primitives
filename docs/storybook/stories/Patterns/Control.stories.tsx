import React from 'react'
import './PatternOverrides.css'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../ColorPreview'
import {ToggleSwitch} from '@primer/react'

export default {
  title: 'Patterns/Colors',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
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

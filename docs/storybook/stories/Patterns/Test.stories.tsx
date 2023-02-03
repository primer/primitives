import React from 'react'
import './PatternOverrides.css'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import { ColorPreview } from '../ColorPreview'
import { ToggleSwitch } from '@primer/react'

export default {
  title: 'Patterns/Colors',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
} as ComponentMeta<typeof ColorPreview>

const fgColors = ['fgColor-default', 'fgColor-muted', 'fgColor-inverse', 'fgColor-disabled', 'fgColor-link-rest','fgColor-accent', 'fgColor-success', 'fgColor-attention', 'fgColor-severe', 'fgColor-danger', 'fgColor-open', 'fgColor-closed', 'fgColor-done', 'fgColor-sponsors']

export const ToggleSwitchScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div className="ToggleSwitch" style={{ display: 'flex', gap: '1rem'}}>
      <ToggleSwitch aria-labelledby="switchLabel" />
      <ToggleSwitch disabled aria-labelledby="switchLabel" />
      <ToggleSwitch checked aria-labelledby="switchLabel" />
      <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
    </div>
  )
}

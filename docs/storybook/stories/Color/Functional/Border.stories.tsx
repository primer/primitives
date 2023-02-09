import React from 'react'
// eslint-disable-next-line import/no-unresolved
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Functional/Border',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
} as ComponentMeta<typeof ColorPreview>

const borderColors = [
  'borderColor-default',
  'borderColor-secondary',
  'borderColor-disabled',
  'borderColor-neutral-muted',
  'borderColor-neutral-emphasis',
  'borderColor-accent-muted',
  'borderColor-accent-emphasis',
  'borderColor-success-muted',
  'borderColor-success-emphasis',
  'borderColor-attention-muted',
  'borderColor-attention-emphasis',
  'borderColor-severe-muted',
  'borderColor-severe-emphasis',
  'borderColor-danger-muted',
  'borderColor-danger-emphasis',
  'borderColor-open-muted',
  'borderColor-open-emphasis',
  'borderColor-closed-muted',
  'borderColor-closed-emphasis',
  'borderColor-done-muted',
  'borderColor-done-emphasis',
  'borderColor-sponsors-muted',
  'borderColor-sponsors-emphasis',
]

export const Border: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

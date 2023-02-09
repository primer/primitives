import React from 'react'
// eslint-disable-next-line import/no-unresolved
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Functional/Background',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
} as ComponentMeta<typeof ColorPreview>

const bgColors = [
  'bgColor-default',
  'bgColor-secondary',
  'bgColor-disabled',
  'bgColor-neutral-muted',
  'bgColor-neutral-emphasis',
  'bgColor-accent-muted',
  'bgColor-accent-emphasis',
  'bgColor-success-muted',
  'bgColor-success-emphasis',
  'bgColor-attention-muted',
  'bgColor-attention-emphasis',
  'bgColor-severe-muted',
  'bgColor-severe-emphasis',
  'bgColor-danger-muted',
  'bgColor-danger-emphasis',
  'bgColor-open-muted',
  'bgColor-open-emphasis',
  'bgColor-closed-muted',
  'bgColor-closed-emphasis',
  'bgColor-done-muted',
  'bgColor-done-emphasis',
  'bgColor-sponsors-muted',
  'bgColor-sponsors-emphasis',
]

export const Background: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
